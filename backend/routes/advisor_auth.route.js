import { Router } from "express";
import { AdvisorRegistrationController } from "../controllers/advisorAuth.controller.js";

const router = Router();
const controller = new AdvisorRegistrationController();

router.post("/register/request-otp", controller.requestOtp);
router.post("/register/verify-otp", controller.verifyOtp);
router.post("/register/create-account", controller.createAccount);


export default router;
