import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search input
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* <h1 className="text-2xl font-semibold text-center mb-4">Product List</h1> */}

      {/* Search Bar */}
      <div className="w-full flex flex-row items-center justify-center">
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-6/12 p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      </div>

      {/* Loading & Error Handling */}
      {loading && <p className="text-center">Loading products...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
