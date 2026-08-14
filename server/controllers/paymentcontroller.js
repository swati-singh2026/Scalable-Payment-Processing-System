import Transaction from "../models/Transaction.js";
import verifySignature from "../utils/verifySignature.js";

export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      amount,
      currency,
    } = req.body;

    console.log("========== VERIFY PAYMENT REQUEST ==========");
    console.log("Order ID:", razorpay_order_id);
    console.log("Payment ID:", razorpay_payment_id);
    console.log("Signature received:", !!razorpay_signature);
    console.log("Amount:", amount);
    console.log("Currency:", currency);
    console.log("============================================");

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Missing Razorpay payment details",
      });
    }

    const isValid = verifySignature(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    );

    const transaction = await Transaction.create({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      signature: razorpay_signature,
      amount,
      currency,
      status: isValid ? "success" : "failed",
    });

    if (isValid) {
      return res.status(200).json({
        success: true,
        message: "Payment verified successfully",
        transaction,
      });
    }

    return res.status(400).json({
      success: false,
      message: "Payment verification failed",
      transaction,
    });
  } catch (error) {
    console.error("Verification Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
