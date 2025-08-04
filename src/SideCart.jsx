import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function SideCart({ onClose }) {
  const [cartItems, setCartItems] = useState([]);

  // Load from cookie on mount
  useEffect(() => {
    const cookieCart = Cookies.get('cart');
    if (cookieCart) {
      setCartItems(JSON.parse(cookieCart));
    }
  }, []);

  // Sync from cookies every second
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCart = Cookies.get('cart');
      if (updatedCart) {
        const parsed = JSON.parse(updatedCart);
        setCartItems(parsed);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 🧹 Remove item by ID
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    Cookies.set('cart', JSON.stringify(updatedCart), { expires: 1 });
  };

  const totalAmount = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="sidecart">
      <button className="close-btn" onClick={onClose}>×</button>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="sidecart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="top-row">
                <img src={item.image} alt={item.name} className="cart-thumb" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="qty">Qty: {item.quantity}</div>
                </div>

              </div>
              <div className="price-row">
                <div className="price">{item.price}</div>
                <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>🗑</button>
              </div>
            </div>
          ))}
          <div className="sidecart-total">
            <strong>Total:</strong> ${totalAmount.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}

export default SideCart;
