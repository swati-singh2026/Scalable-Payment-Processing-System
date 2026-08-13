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

    // Verify Signature
    const isValid = verifySignature(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    );

    // Save Transaction
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

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
