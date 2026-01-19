// services/subscription.service.js
import crypto from "crypto";
import { supabaseClient } from "../db/supabase.client.js";
import { razorpay } from "../util/razorpay.js";
import dotenv from "dotenv";

dotenv.config();

export class SubscriptionService {

  // STEP 1️⃣ Create payment order
  async createSubscriptionOrder({ investorId, advisorId, amount }) {

    // Check duplicate subscription
    const { data: existing } = await supabaseClient
      .from("investor_advisor_join")
      .select("id")
      .eq("investor_id", investorId)
      .eq("advisor_id", advisorId)
      .single();

    if (existing) {
      throw new Error("Already subscribed to this advisor");
    }

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: amount * 100, // INR → paise
      currency: "INR",
      receipt: crypto.randomUUID()
    });

    // Store payment intent
    await supabaseClient.from("payments").insert({
      investor_id: investorId,
      advisor_id: advisorId,
      razorpay_order_id: order.id,
      amount,
      status: "created"
    });

    return {
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      razorpayKey: process.env.RAZORPAY_KEY_ID
    };
  }

  // STEP 2️⃣ Verify payment & activate subscription
  async verifyAndSubscribe({
    investorId,
    advisorId,
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature
  }) {

    // Signature verification
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      throw new Error("Payment verification failed");
    }

    // Update payment status
    await supabaseClient
      .from("payments")
      .update({
        razorpay_payment_id,
        status: "paid"
      })
      .eq("razorpay_order_id", razorpay_order_id);

    // Create subscription
    await supabaseClient
      .from("investor_advisor_subscriptions")
      .insert({
        investor_id: investorId,
        advisor_id: advisorId
      });

    return { message: "Subscription activated successfully" };
  }
}
