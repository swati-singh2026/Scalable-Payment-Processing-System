import { useNavigate } from "react-router-dom";

export default function PaymentFailed() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white shadow-lg rounded-xl p-8 text-center w-[450px]">
        <div className="text-6xl mb-4">❌</div>

        <h1 className="text-3xl font-bold text-red-600">Payment Failed</h1>

        <p className="text-gray-600 mt-3">
          Your payment could not be completed. Please try again.
        </p>

        <button
          onClick={() => navigate("/checkout")}
          className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
