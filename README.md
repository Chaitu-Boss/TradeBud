# TradeBud

##  System Visualization

<table style="width: 100%; border-collapse: collapse;">
  <tr>
    <td align="center" style="width: 50%; padding: 10px; border: 1px solid #333;">
      <img src="/images/tradebud-architecture.png width="100%" alt="tradebud-architecture"/>
      <br/>
      <strong>1. Project Architecture</strong>
      <p>The Entire Flow of the Project depicting all the important services.</p>
    </td>
    <td align="center" style="width: 50%; padding: 10px; border: 1px solid #333;">
      <img src="/images/graph-page.png" width="100%" alt="Market Graphs"/>
      <br/>
      <strong>2. Live Monitoring</strong>
      <p>Real-Time Price fetching via Zerodha KiteConnect API for live monitoring of trades.</p>
    </td>
  </tr>
  <tr>
    <td align="center" style="width: 50%; padding: 10px; border: 1px solid #333;">
      <img src="/images/advisor-dashboard.png" width="100%" alt="Publish Trade "/>
      <br/>
      <strong>3.Advisor Dashboard</strong>
      <p>Dashboard contains details for the advisor and the publishing trade mechanism</p>
    </td>
    <td align="center" style="width: 50%; padding: 10px; border: 1px solid #333;">
      <img src="/images/investor-dashboard.png" width="100%" alt="Investor Dashboard"/>
      <br/>
      <strong>4. Investor Dashboard</strong>
      <p>Lets Investor go through the trades published by advisor and be able to subscribe via Razorpay</p>
    </td>
  </tr>
</table>

---

## Overview

TradeBud solves a real problem in Indian retail investing: **fake track records**. Advisors frequently cherry-pick winning trades and hide losing ones. TradeBud fixes this by anchoring every published trade as an immutable hash on the Ethereum blockchain — once a trade is published, it cannot be modified or deleted.

The platform connects two types of users:

- **SEBI-Registered Advisors** — verified against official SEBI records, they publish real-time trades and build a transparent performance history.
- **Investors** — browse advisor profiles, view verified stats (ROI, accuracy, trust score, drawdown), and subscribe to advisors via Razorpay.

---

## How It Works

### For Advisors
1. Enter your SEBI registration number — verified against the SEBI database.
2. Receive an OTP on your SEBI-registered email address.
3. Create your account and start publishing trades.
4. Each trade is hashed and anchored on the Ethereum Sepolia testnet via the `TradeProof` smart contract.

### For Investors
1. Register with your email and OTP verification.
2. Browse verified advisors ranked by a composite trust score.
3. View detailed advisor profiles — full trade history, equity curve, monthly P&L, drawdown.
4. Subscribe to an advisor using Razorpay and receive their live trade signals.

---

## Features

- **SEBI Verification** — Advisors can only register if their SEBI number exists in the official database. OTP is sent exclusively to their SEBI-registered email.
- **Blockchain Trade Anchoring** — Every trade is hashed and recorded on-chain, making the trade history tamper-proof.
- **Trust Score Engine** — A weighted algorithm scores each advisor on accuracy, ROI, max drawdown, trade volume, and win/loss ratio.
- **Advisor Ranking** — Advisors are ranked using a normalised composite score across 5 dimensions.
- **Live Market Data** — Real-time price feeds via Zerodha KiteConnect, streamed to the frontend over WebSockets.
- **Razorpay Subscriptions** — Investors pay to subscribe to advisors; payments are verified on-server via HMAC signature before activating subscriptions.
- **Role-Based Dashboard** — Separate dashboards for advisors (publish trades, view performance) and investors (browse signals, manage subscriptions).
- **Interactive Charts** — Equity curve and monthly P&L visualised using Recharts.

---

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, Vite 7, Tailwind CSS v4, React Router v7, Recharts, Lucide React |
| **Backend** | Node.js, Express 5 (ESM), `ws` WebSocket server |
| **Database** | Supabase (PostgreSQL) |
| **Blockchain** | Solidity ^0.8.20, Hardhat 2, Hardhat Ignition, ethers.js v6 |
| **Auth / OTP** | Nodemailer, bcrypt, in-memory OTP store |
| **Payments** | Razorpay (order creation + HMAC signature verification) |
| **Market Data** | Zerodha KiteConnect v5 |
| **Network** | Ethereum Sepolia Testnet |

---


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MetaMask](https://metamask.io/) browser extension with Sepolia testnet ETH
- A [Supabase](https://supabase.com/) project with the required tables
- A [Razorpay](https://razorpay.com/) account (test mode works)
- Zerodha KiteConnect API key and access token
- An [Alchemy](https://www.alchemy.com/) or [Infura](https://infura.io/) RPC URL for Sepolia

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Chaitu-Boss/TradeBud.git
cd TradeBud
```

**2. Install dependencies for each module**

```bash
# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install

# Blockchain
cd ../blockchain && npm install
```

### Running Locally

**1. Start the backend server**

```bash
cd backend
node server.js
# REST + WebSocket server starts on the PORT defined in .env
```

**2. Start the frontend dev server**

```bash
cd frontend
npm run dev
# App available at http://localhost:5173
```

**3. (Optional) Deploy the smart contract to Sepolia**

```bash
cd blockchain
npx hardhat ignition deploy ignition/modules/TradeProof.js --network sepolia
```

> The contract is already deployed on Sepolia — skip this step unless redeploying.

---

## Environment Variables

### `backend/.env`

```env
PORT=8000

# Supabase
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_KEY=your_supabase_service_role_key

# Blockchain
ETHEREUM_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your_api_key
PRIVATE_KEY=your_wallet_private_key
CONTRACT_ADDRESS=your_deployed_contract_address

# Email (OTP)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

# Razorpay
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Zerodha KiteConnect
API_KEY=your_kite_api_key
ACCESS_TOKEN=your_kite_access_token
```

### `frontend/.env`

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_URL=http://localhost:8000
```
---

## Ranking Algorithm

Advisors are ranked using a **normalised composite score** across five metrics:

| Metric | Weight | Description |
|---|---|---|
| Trust Score | 30% | Weighted composite of accuracy, ROI, drawdown, trade count, win/loss |
| Consistency | 20% | Inverse of monthly P&L standard deviation (lower volatility = higher score) |
| Max Drawdown | 20% | Lower drawdown scores higher (inverted normalisation) |
| ROI | 20% | Total return on invested capital |
| Accuracy | 10% | Percentage of winning trades |

All raw values are **min-max normalised** to a 0–100 scale before weighting, ensuring fair comparison across advisors with different trade volumes and histories.

---

<p align="center">Built with ❤️ by <a href="https://github.com/Chaitu-Boss">Chaitu-Boss</a></p>
