const otpStore = new Map();

/**
 * Save OTP
 * @param {string} key - email or phone
 * @param {string} otp
 * @param {number} ttlMs
 */
export function saveOTP(key, otp, ttlMs = 5 * 60 * 1000) {
  const expiresAt = Date.now() + ttlMs;

  otpStore.set(key, { otp, expiresAt });

  // Auto-expire
  setTimeout(() => {
    otpStore.delete(key);
  }, ttlMs);
}

/**
 * Verify OTP
 */
export function verifyOTP(key, otp) {
  const record = otpStore.get(key);

  if (!record) return false;

  if (Date.now() > record.expiresAt) {
    otpStore.delete(key);
    return false;
  }

  const isValid = record.otp === otp;

  if (isValid) {
    otpStore.delete(key); // one-time use
  }

  return isValid;
}
