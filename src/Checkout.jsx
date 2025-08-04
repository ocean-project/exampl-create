import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function Checkout() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from cookies
  useEffect(() => {
    const cookieCart = Cookies.get('cart');
    if (cookieCart) {
      setCartItems(JSON.parse(cookieCart));
    }
  }, []);

  // Total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const priceNum = parseFloat(item.price.replace('$', '')) || 0;
      return total + priceNum * item.quantity;
    }, 0).toFixed(2);
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    Cookies.remove('cart');
    setCartItems([]);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-wrapper">
        {/* Billing Form */}
        <div className="billing-form">
          <h2>Billing Details</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Address" required />
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="Zip Code" required />
          </form>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    {item.name} × {item.quantity} — {item.price}
                  </li>
                ))}
              </ul>
              <h3>Total: ${getTotalPrice()}</h3>
              <button className="place-order-btn" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
