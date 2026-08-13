import express from "express";
import { verifyPayment } from "../controllers/paymentController.js";

const router = express.Router();

// Verify Payment
router.post("/verify", verifyPayment);

export default router;
