import crypto from "crypto";
import bcrypt from "bcrypt";
import { supabaseClient } from "../db/supabase.client.js";
import { transporter } from "../util/mailer.js";
import dotenv from "dotenv";

dotenv.config();

const OTP_EXPIRY_MIN = 10;
const SALT_ROUNDS = 10;

/**
 * In-memory OTP store
 * key   -> sebiNumber
 * value -> { otp, expiresAt }
 */
const otpStore = new Map();

export class AdvisorRegistrationService {

    // STEP 1: check SEBI number & send OTP
    async requestOtp(sebiNumber) {
        const { data: advisor } = await supabaseClient
            .from("advisors_react")
            .select("id, email")
            .eq("sebi_number", sebiNumber)
            .single();

        if (!advisor) {
            throw new Error("SEBI number not found");
        }

        const { data: existingAccount } = await supabaseClient
            .from("advisor_accounts")
            .select("id")
            .eq("advisor_id", advisor.id)
            .single();

        if (existingAccount) {
            throw new Error("Advisor already registered");
        }

        // 🔐 Generate OTP
        const otp = crypto.randomInt(100000, 999999).toString();
        const expiresAt = Date.now() + OTP_EXPIRY_MIN * 60 * 1000;

        // 🧠 Store OTP in memory
        otpStore.set(sebiNumber, { otp, expiresAt });

        // Auto-delete OTP after expiry
        setTimeout(() => {
            otpStore.delete(sebiNumber);
        }, OTP_EXPIRY_MIN * 60 * 1000);

        await transporter.sendMail({
            from: `"Advisor Portal" <${process.env.EMAIL_USER}>`,
            to: advisor.email,
            subject: "Your OTP for Advisor Registration",
            html: `
                <h2>OTP Verification</h2>
                <p>Your OTP is <b>${otp}</b></p>
                <p>This OTP is valid for ${OTP_EXPIRY_MIN} minutes.</p>
            `
        });

        console.log(`OTP sent to ${advisor.email}`);

        return { message: "OTP sent to SEBI registered email" };
    }

    // STEP 2: verify OTP
    async verifyOtp(sebiNumber, otp) {
        const record = otpStore.get(sebiNumber);

        if (!record) {
            throw new Error("Invalid or expired OTP");
        }

        if (Date.now() > record.expiresAt) {
            otpStore.delete(sebiNumber);
            throw new Error("OTP expired");
        }

        if (record.otp !== otp) {
            throw new Error("Invalid OTP");
        }

        // ✅ One-time use
        otpStore.delete(sebiNumber);

        return { message: "OTP verified" };
    }

    // STEP 3: create username-password account (UNCHANGED)
    async createAccount({ sebiNumber, username, password }) {
        const { data: advisor } = await supabaseClient
            .from("advisors_react")
            .select("id")
            .eq("sebi_number", sebiNumber)
            .single();

        if (!advisor) {
            throw new Error("Invalid SEBI number");
        }

        const { data: account, error } = await supabaseClient
            .from("advisors_accounts")
            .insert({
                id: advisor.id,
                username,
                password:password,
            })
            .select()
            .single();

        if (error) throw error;

        return {
            message: "Advisor account created",
            advisor_account_id: account.id,
        };
    }
}
