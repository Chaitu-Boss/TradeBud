import { KiteConnect } from "kiteconnect";

export const kite = new KiteConnect({
  api_key: process.env.API_KEY,
});

kite.setAccessToken(process.env.ACCESS_TOKEN);
