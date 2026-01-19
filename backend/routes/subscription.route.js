// routes/subscription.routes.js
import { Router } from "express";
import { SubscriptionController } from "../controllers/subscription.controller.js";

const router = Router();
const controller = new SubscriptionController();

router.post("/subscriptions/create-order", controller.createOrder);
router.post("/subscriptions/verify-payment", controller.verifyPayment);

export default router;
