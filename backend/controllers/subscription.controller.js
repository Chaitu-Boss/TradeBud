// controllers/subscription.controller.js
import { SubscriptionService } from "../services/subscription.service.js";

const service = new SubscriptionService();

export class SubscriptionController {

  async createOrder(req, res) {
    try {
      const result = await service.createSubscriptionOrder(req.body);
      res.json(result);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async verifyPayment(req, res) {
    try {
      const result = await service.verifyAndSubscribe(req.body);
      res.json(result);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
