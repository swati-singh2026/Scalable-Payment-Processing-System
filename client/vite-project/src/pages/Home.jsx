import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import { useNavigate } from "react-router-dom";
export default function Home({ cart, setCart }) {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Smartphone", price: 20000 },
    { id: 3, name: "Tablet", price: 30000 },
  ];

  const navigate = useNavigate();
  <button
    onClick={() => navigate("/checkout")}
    className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
  >
    Go to Checkout
  </button>;

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-3 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
        <Cart cart={cart} removeItem={removeItem} />
        <button
          onClick={() => navigate("/checkout")}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
}
