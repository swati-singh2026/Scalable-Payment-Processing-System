import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />

        <Route path="/checkout" element={<Checkout cart={cart} />} />

        <Route path="/payment-success" element={<PaymentSuccess />} />

        <Route path="/payment-failed" element={<PaymentFailed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
