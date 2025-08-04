import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from cookies on page load
  useEffect(() => {
    const cookieCart = Cookies.get('cart');
    if (cookieCart) {
      setCartItems(JSON.parse(cookieCart));
    }
  }, []);

  // Clear cart handler
  const handleClearCart = () => {
    Cookies.remove('cart');
    setCartItems([]);
  };

    const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const priceNum = parseFloat(item.price.replace('$', '')) || 0;
      return total + priceNum * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="product-grid">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
        <img src={item.image} alt={item.name} className="cart-image" />
        <div className="cart-details">
        <h3>{item.name}</h3>
        <p className="price">{item.price}</p>
             </div>
        <div className="cart-qty">
          <span>Quantity: {item.quantity}</span>
        </div>
      </div>
            ))}
          </div>

           <div className="cart-total">
            <h3>Total: ${getTotalPrice()}</h3>
          </div>

          {/* 🧹 Clear Cart Button */}
          <button className="clear-cart-btn" onClick={handleClearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
