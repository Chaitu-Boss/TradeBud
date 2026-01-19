// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import advisorRegistrationRoutes from "./routes/advisor_auth.route.js";
// import investorRegistrationRoutes from "./routes/invester_auth.route.js";
// import tradePublishRoutes from "./routes/tradePublish.route.js";
// import subscriptionRoutes from "./routes/subscription.route.js";
// import { or } from "sequelize";

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());



// // Health check
// app.get("/health", (req, res) => {
//   res.json({ status: "ok" });
// });

// // Routes
// app.use("/api/advisor", advisorRegistrationRoutes, tradePublishRoutes);
// app.use("/api/investor", investorRegistrationRoutes, subscriptionRoutes);

// // Start server
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import advisorRegistrationRoutes from "./routes/advisor_auth.route.js";
import investorRegistrationRoutes from "./routes/invester_auth.route.js";
import tradePublishRoutes from "./routes/tradePublish.route.js";
import subscriptionRoutes from "./routes/subscription.route.js";
import performanceRoutes from "./routes/performance.route.js";
import trustRoutes from "./routes/trust.route.js";
import { initMarketWS } from "./ws/marketData.ws.js";
import markedataroutes from "./routes/marketData.route.js";
import rankingRoutes from "./routes/ranking.route.js";
import http from "http";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Routes
app.use("/api/advisor", advisorRegistrationRoutes, tradePublishRoutes, performanceRoutes, trustRoutes, rankingRoutes);
app.use("/api/investor", investorRegistrationRoutes, subscriptionRoutes);
app.use("/api/market-data", markedataroutes);


const server = http.createServer(app);

initMarketWS(server);

server.listen(process.env.PORT, () => {
  console.log(`🚀 REST + WS server running on port ${process.env.PORT}`);
});