// routes/investor.routes.js
import { Router } from "express";
import { InvestorRegistrationController } from "../controllers/investerAuth.controller.js";

const router = Router();
const controller = new InvestorRegistrationController();

router.post("/register/request-otp", controller.requestOtp);
router.post("/register/verify-otp", controller.verifyOtp);
router.post("/register/create-account", controller.register);

export default router;
