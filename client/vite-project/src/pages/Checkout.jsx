import { useNavigate } from "react-router-dom";
export default function Checkout({ cart }) {
  const navigate = useNavigate();
  const total = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const handlePayment = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert(`Proceeding to payment of ₹${total}`);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="bg-white p-6 rounded shadow">
        {cart.length === 0 ? (
          <div>
            <p>Your cart is empty.</p>
            <button
              onClick={handlePayment}
              disabled
              className="mt-6 w-full bg-gray-300 text-white px-4 py-2 rounded cursor-not-allowed"
            >
              Pay Now
            </button>
            <button
              onClick={() => navigate("/")}
              className="mt-2 w-full bg-blue-gray-300 py-2 rounded"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div>
            <ul className="mb-4">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between mb-2">
                  <span>
                    {item.name} x {item.qty}
                  </span>
                  <span>${item.price * item.qty}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${total}</span>
            </div>
            <button
              onClick={handlePayment}
              className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded"
            >
              Pay Now
            </button>
            <button
              onClick={() => navigate("/")}
              className="mt-2 w-full bg-blue-gray-300 py-2 rounded"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
      
    </div>
  );
}
