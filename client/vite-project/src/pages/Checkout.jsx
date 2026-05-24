import { useNavigate } from "react-router-dom";
export default function Checkout({ cart }) {
  const navigate = useNavigate();
  const total = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const handlePayment = async () => {
    try {
      const amount = total > 0 ? total : 500;
      const apiUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000/create-order";

      console.log("Creating order", { amount, apiUrl });

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to create order");
      }

      const order = await response.json();

      if (!window.Razorpay) {
        alert("Razorpay SDK is not loaded. Please refresh the page.");
        return;
      }

      const options = {
        key: "rzp_test_SmL7NiqXstHBPR",
        amount: order.amount,
        currency: order.currency,
        name: "Scalable Payment Processing System",
        description: "Test Transaction",
        order_id: order.id,
        handler: function (response) {
          alert("Payment Successful!");
          console.log("clicked", response);
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Unable to start payment. Check the browser console for details.");
    }
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
              className="mt-6 w-full bg-gray-300 text-white px-4 py-2 rounded"
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
