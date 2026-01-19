import crypto from "crypto";
import { supabaseClient } from "../db/supabase.client.js";
import { transporter } from "../util/mailer.js";
import {
    savePendingInvestor,
    verifyInvestorOtp,
    getVerifiedInvestorData,
    clearInvestor
} from "../util/inverstorTempstore.js";

const OTP_EXPIRY_MIN = 10;

export class InvestorRegistrationService {

    // STEP 1️⃣ Request OTP + store ALL registration data
    async requestOtp(data) {
        const { email } = data;

        const { data: existingInvestor } = await supabaseClient
            .from("investors")
            .select("id")
            .eq("email", email)
            .single();

        if (existingInvestor) {
            throw new Error("Investor already registered");
        }

        const otp = crypto.randomInt(100000, 999999).toString();

        savePendingInvestor(
            email,
            otp,
            {
                full_name: data.full_name,
                email: data.email,
                phone: data.phone ?? null,
                username: data.username,
                password: data.password
            },
            OTP_EXPIRY_MIN * 60 * 1000
        );

        try {
            await transporter.sendMail({
                from: `"Investor Portal" <${process.env.EMAIL_USER}>`,
                to: email,
                subject: "Verify your email",
                html: `
        <h2>Email Verification</h2>
        <p>Your OTP is <b>${otp}</b></p>
        <p>Valid for ${OTP_EXPIRY_MIN} minutes.</p>
      `
            });

            console.log("OTP email sent to:", email);
            console.log("OTP:", otp);
        } catch (err) {
            console.error("Error sending email:", err);
            throw new Error("Failed to send OTP email");
        }

        return { message: "OTP sent to email" };
    }

    // STEP 2️⃣ Verify OTP
    async verifyOtp(email, otp) {
        const ok = verifyInvestorOtp(email, otp);
        console.log(ok);

        if (!ok) {
            throw new Error("Invalid or expired OTP");
        }

        return { message: "OTP verified" };
    }

    // STEP 3️⃣ Final registration
    async register(email) {
        const data = getVerifiedInvestorData(email);

        if (!data) {
            throw new Error("OTP verification required");
        }

        const { data: investor, error } = await supabaseClient
            .from("investors_react")
            .insert(data)
            .select()
            .single();

        if (error) throw error;

        clearInvestor(email);

        return {
            message: "Investor registered successfully",
            investor_id: investor.id
        };
    }
}
