import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <div>
      {/* Shoppy Globe */}
      <Provider store={store}>
        <Router>
          <div className="bg-gray-100 min-h-screen">
            <Header />
            <div className="container mx-auto p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
