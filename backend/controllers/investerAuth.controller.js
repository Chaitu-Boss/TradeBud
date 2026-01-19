// controllers/investor-registration.controller.js
import { InvestorRegistrationService } from "../services/investerRegister.service.js";

const service = new InvestorRegistrationService();

export class InvestorRegistrationController {

  async requestOtp(req, res) {
    try {
      const result = await service.requestOtp(req.body);
      res.json(result);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async verifyOtp(req, res) {
    try {
      const { email, otp } = req.body;
      const result = await service.verifyOtp(email, otp);
      res.json(result);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async register(req, res) {
    try {
      const { email } = req.body;
      const result = await service.register(email);
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
