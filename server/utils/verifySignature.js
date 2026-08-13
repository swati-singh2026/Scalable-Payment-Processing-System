import crypto from "crypto";

const verifySignature = (orderId, paymentId, razorpaySignature) => {
  const body = `${orderId}|${paymentId}`;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  return expectedSignature === razorpaySignature;
};

export default verifySignature;
