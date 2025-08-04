import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function Shop() {
 const initialCart = () => {
    const cookieCart = Cookies.get('cart');
    return cookieCart ? JSON.parse(cookieCart) : [];
  };

  const [cart, setCart] = useState(initialCart); // 👈 use function here

  // Optional: update cookie when cart changes
  useEffect(() => {
    Cookies.set('cart', JSON.stringify(cart), { expires: 1 });
  }, [cart]);

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$59.99',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?...',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: '$129.00',
      image: 'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?...',
    },
    {
      id: 3,
      name: 'Gaming Mouse',
      price: '$39.50',
      image: 'https://images.unsplash.com/photo-1613141412501-9012977f1969?...',
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      price: '$75.00',
      image: 'https://images.unsplash.com/photo-1582978571763-2d039e56f0c3?...',
    },
  ];

const handleAddToCart = (product) => {
  // Check if item already exists in cart
  const existingItem = cart.find((item) => item.id === product.id);

  let updatedCart;

  if (existingItem) {
    // Update quantity
    updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    // Add new product with quantity 1
    updatedCart = [...cart, { ...product, quantity: 1 }];
  }

  setCart(updatedCart);
  alert(`${product.name} added to cart!`);
};
;

  return (
    <div className="shop-page">
      <h1>Welcome to Our Shop</h1>
      <p>🛒 Cart Items: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
