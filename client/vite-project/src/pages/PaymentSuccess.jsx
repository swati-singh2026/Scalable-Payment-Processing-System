import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white shadow-lg rounded-xl p-8 text-center w-[450px]">
        <div className="text-6xl mb-4">✅</div>

        <h1 className="text-3xl font-bold text-green-700">
          Payment Successful
        </h1>

        <p className="text-gray-600 mt-3">
          Thank you! Your payment has been processed successfully.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
