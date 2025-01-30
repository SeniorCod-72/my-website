import React, { useState, useEffect } from 'react';

function App() {
  // List of products with id, name, and price
  const productList = [
    { "id": 1, "name": "T-Shirt", "price": 20 },
    { "id": 2, "name": "Jeans", "price": 40 },
    { "id": 3, "name": "Sneakers", "price": 60 },
    { "id": 4, "name": "Hat", "price": 15 },
    { "id": 5, "name": "Socks", "price": 5 }
  ];

  // State to store cart items, retrieved from localStorage if available
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // State to track sorting option and search query
  const [sortOption, setSortOption] = useState('name-asc');
  const [searchQuery, setSearchQuery] = useState('');

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);

      if (existingProduct) {
        // If product already exists, increase quantity
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If product is new, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove a product or decrease its quantity in the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart
        .map(item =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 } // Decrease quantity
            : item
        )
        .filter(item => item.quantity > 0); // Remove item if quantity is 0
    });
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Function to sort products based on the selected sorting option
  const sortProducts = () => {
    let sortedProducts = [...productList];

    if (sortOption === 'name-asc') {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name)); // Sort A-Z by name
    } else if (sortOption === 'name-desc') {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name)); // Sort Z-A by name
    } else if (sortOption === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price); // Sort by price (low to high)
    } else if (sortOption === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price); // Sort by price (high to low)
    }

    return sortedProducts;
  };

  // Filter products based on the search query and sorting option
  const filteredProducts = sortProducts().filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Save cart state to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <h1>Product List</h1>

      {/* Search input and sorting dropdown */}
      <div className="search-sort-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="name-asc">Sort by Name (A-Z)</option>
          <option value="name-desc">Sort by Name (Z-A)</option>
          <option value="price-asc">Sort by Price (Low to High)</option>
          <option value="price-desc">Sort by Price (High to Low)</option>
        </select>
      </div>

      {/* Display list of products */}
      <div className='product-list'>
        {filteredProducts.map(product => (
          <div key={product.id} className='product'>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Shopping Cart Section */}
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty. Add some products to your cart!</p>
        ) : (
          <>
            <ul>
              {cart.map(item => (
                <li key={item.id}>
                  {item.name} - ${item.price} x {item.quantity}
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
              <li><strong>Total: ${calculateTotal()}</strong></li>
            </ul>
            <button onClick={clearCart}>Clear Cart</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
