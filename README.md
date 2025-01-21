Shopping Cart Application
A simple e-commerce shopping cart app built with React. Users can browse a list of products, add them to their cart, remove items from the cart, and view the total price. The cart is saved to localStorage to persist between page reloads. Products can be sorted by name or price, and users can search for products by name.

Features
Product List: A static list of products with names and prices.
Search: Users can search for products by name.
Sorting: Users can sort the product list by:
Name (A-Z, Z-A)
Price (Low to High, High to Low)
Add to Cart: Add products to the shopping cart. If a product is already in the cart, its quantity will be increased.
Remove from Cart: Remove items from the cart. If the quantity is greater than one, it will decrease by one.
Clear Cart: Completely clear all items from the cart.
Cart Persistence: The cart is saved to localStorage so the cart persists across page reloads.
Installation
Clone the repository:

bash
Copy
git clone https://github.com/SeniorCod-72/shopping-cart-app.git
Navigate to the project directory:

bash
Copy
cd shopping-cart-app
Install the dependencies:

bash
Copy
npm install
Start the application:

bash
Copy
npm start
Open your browser and go to http://localhost:3000 to view the app.

Usage
Once the app is running, you will see the following features:

Product List: A list of products with names and prices.
Search: A search bar above the product list where you can type product names to filter the list.
Sort Options: A dropdown menu to sort the product list by name (A-Z, Z-A) or price (Low to High, High to Low).
Add to Cart: Each product has an "Add to Cart" button. Click this to add items to your shopping cart.
Shopping Cart: At the bottom of the page, your shopping cart is displayed with the items you've added. You can:
Remove items or decrease their quantity.
View the total price of the cart.
Clear the entire cart.
How It Works
State Management:

The state of the cart is managed with useState, and it persists using localStorage.
Products are sorted based on the selected sort option and filtered by the search query.
addToCart: Adds the selected product to the cart. If the product is already in the cart, the quantity is incremented.

removeFromCart: Decreases the quantity of a product in the cart or removes it if the quantity becomes zero.

clearCart: Empties the cart entirely.

useEffect: Ensures that the cart data is saved to localStorage every time the cart is updated.

Technologies Used
React: The app is built using React, a popular JavaScript library for building user interfaces.
localStorage: Used to persist the cart data across browser sessions.
useState & useEffect: React hooks for managing state and side effects.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-name).
Commit your changes (git commit -am 'Add feature').
Push to the branch (git push origin feature-name).
Create a new Pull Request.
License
This project is open source and available under the MIT License.

