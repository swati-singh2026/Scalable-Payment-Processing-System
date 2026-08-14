import crypto from "crypto";

const verifySignature = (orderId, paymentId, razorpaySignature) => {
  const body = `${orderId}|${paymentId}`;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  console.log("========== SIGNATURE DEBUG ==========");
  console.log("Order ID:", orderId);
  console.log("Payment ID:", paymentId);
  console.log("Received Signature:", razorpaySignature);
  console.log("Expected Signature:", expectedSignature);
  console.log("Secret Loaded:", process.env.RAZORPAY_KEY_SECRET ? "YES" : "NO");
  console.log("Signatures Match:", expectedSignature === razorpaySignature);
  console.log("=====================================");

  return expectedSignature === razorpaySignature;
};

export default verifySignature;
