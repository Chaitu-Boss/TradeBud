const store = new Map();

export function savePendingInvestor(email, otp, data, ttlMs) {
  const expiresAt = Date.now() + ttlMs;

  store.set(email, {
    otp,
    data,
    expiresAt,
    verified: false
  });

  setTimeout(() => store.delete(email), ttlMs);
}

export function verifyInvestorOtp(email, otp) {
  const record = store.get(email);

  if (!record) return false;
  console.log(record);

  if (Date.now() > record.expiresAt) {
    store.delete(email);
    return false;
  }

  console.log(record.otp, otp);
  
  if (record.otp !== otp) return false;

  record.verified = true;
  return true;
}

export function getVerifiedInvestorData(email) {
  const record = store.get(email);
  if (!record || !record.verified) return null;
  return record.data;
}

export function clearInvestor(email) {
  store.delete(email);
}
