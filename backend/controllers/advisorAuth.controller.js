import { AdvisorRegistrationService } from "../services/advisorRegister.service.js";

const service = new AdvisorRegistrationService();

export class AdvisorRegistrationController {

  requestOtp = async (req, res) => {
    try {
      const { sebi_number } = req.body;
      const result = await service.requestOtp(sebi_number);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  verifyOtp = async (req, res) => {
    try {
      const { sebi_number, otp } = req.body;
      const result = await service.verifyOtp(sebi_number, otp);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  createAccount = async (req, res) => {
    try {
      const { sebi_number, username, password } = req.body;
      const result = await service.createAccount({
        sebiNumber: sebi_number,
        username,
        password,
      });
      res.status(201).json(result);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: err.message });
    }
  };
}
