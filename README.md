<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

# ShoppyGlobe - E-commerce Application

ShoppyGlobe is a modern e-commerce web application built with React, Vite, Redux, and Tailwind CSS. It provides a seamless shopping experience with features like product listing, search functionality, cart management, and checkout.

# Component Structure

App: The main component that integrates all routes.

Header: Displays the navigation menu and shopping cart icon.

ProductList: Shows a list of products fetched from an API.

ProductItem: Represents a single product with an “Add to Cart” button.

ProductDetail: Displays detailed information about a selected product.

Cart: Shows items added to the cart with options to modify quantities or remove items.

CartItem: Represents a single item in the cart.

NotFound: Displays a 404 page for unknown routes.

# Search Feature

Implements a search bar to filter products in real-time based on user input.

Dynamically updates the product list without additional API requests.

# State Management

Redux Toolkit is used for managing the cart state.

Actions, reducers, and selectors handle adding, removing, and modifying cart items efficiently.

# React Routing

Implemented using React Router.

Routes for Home, Product Detail, Cart, and Checkout pages.

Utilizes route parameters for product details.

# Data Fetching

Uses useEffect to fetch product data from DummyJSON API.

Implements a custom hook (useFetchProducts.js) to handle API calls efficiently.

Error handling is included to manage failed requests.

# Event Handling

Add to Cart button in each ProductItem component.

Remove from Cart button in each CartItem component.

All cart interactions update the Redux store in real-time.

# Styling

Tailwind CSS for modern and responsive UI.

Fully responsive layout supporting mobile, tablet, and desktop views.

# Performance Optimization

Implements code splitting and lazy loading using React.lazy and Suspense.

Reduces initial load time and improves application speed.

# Installation & Setup

Clone the repository:

git clone https://github.com/yourusername/shoppyglobe.git
cd shoppyglobe

Install dependencies:

npm install

Start the development server:

npm run dev

Open http://localhost:5173 in your browser.

# Project Structure

shoppyglobe/
│── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductItem.jsx
│   │   ├── CartItem.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductPage.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── CartPage.jsx
│   │   ├── Checkout.jsx
│   │   ├── NotFound.jsx
│   ├── redux/
│   │   ├── store.js
│   │   ├── cartSlice.js
│   ├── hooks/
│   │   ├── useFetchProducts.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│── package.json
│── vite.config.js

# Technologies Used

React.js with Vite

Redux Toolkit for state management

React Router for navigation

Tailwind CSS for styling

DummyJSON API for product data

# License

This project is licensed under the MIT License.
