import dotenv from "dotenv";

dotenv.config({ path: "./server/.env" });

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import razorpay from "./razorpay.js";
import paymentRoutes from "./routes/paymentRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Payment Routes
app.use("/api/payments", paymentRoutes);

// Test API
app.get("/", (req, res) => {
  res.send("API is working fine!");
});

// Create Razorpay Order
app.post("/create-order", async (req, res) => {
  try {
    console.log("BODY =", req.body);

    const amount = Number(req.body.amount);

    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        error: "Invalid amount",
      });
    }

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    console.log("Razorpay Order Created:", order.id);

    return res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("RAZORPAY ERROR =", error);

    return res.status(500).json({
      success: false,
      error: "Unable to create Razorpay order",
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
