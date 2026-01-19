import React from "react";
import {
  ShieldCheck,
  Lock,
  TrendingUp,
  Eye,
  BarChart3,
  Users,
} from "lucide-react";

export default function Home() {
  const userType = localStorage.getItem("type");
  const isLoggedIn = userType === "advisor" || userType === "investor";

  return (
    <div className="bg-[#0b0f14] text-white">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-5 border-b border-white/5">
        <h1 className="text-xl font-bold text-yellow-400">TradeBud</h1>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="/advisors">Browse Advisors</a>
          <a href="#">How It Works</a>
        </div>

        {!isLoggedIn ? (
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-medium">
            <a href="/login">Get Started</a>
          </button>
        ) : (
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-medium">
            <a href="/dashboard">Go to Dashboard</a>
          </button>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="text-center px-6 py-28">
        <div className="flex justify-center gap-3 mb-8">
          <Badge icon={<ShieldCheck size={16} />} text="SEBI Verified Advisors" />
          <Badge icon={<Lock size={16} />} text="Immutable Records" />
          <Badge icon={<TrendingUp size={16} />} text="Real Performance" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Discover <span className="text-yellow-400">Verified</span> Trading
          <br /> Advisors
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          India's most transparent platform to find SEBI-registered advisors
          with <span className="text-white">proven track records</span> and{" "}
          <span className="text-white">immutable trade history</span>.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          {!isLoggedIn ? (
            <>
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold">
                <a href="/login">Get Started →</a>
              </button>
              <button className="border border-white/10 px-6 py-3 rounded-lg">
                <a href="/advisors">Browse Advisors</a>
              </button>
            </>
          ) : (
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold">
              <a href="/dashboard">Go to Dashboard →</a>
            </button>
          )}
        </div>

        <div className="mt-20 flex justify-center gap-16 text-center">
          <Stat value="500+" label="Verified Advisors" />
          <Stat value="50K+" label="Active Investors" />
          <Stat value="₹10Cr+" label="Trades Tracked" />
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-8 py-24 bg-[#0e131a]">
        <h2 className="text-4xl font-bold text-center">
          Why Choose <span className="text-yellow-400">TradeBud?</span>
        </h2>

        <p className="text-gray-400 text-center mt-4 max-w-xl mx-auto">
          We've built the most transparent trading advisor platform in India.
          No fake track records, no hidden trades.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          <Feature
            icon={<ShieldCheck />}
            title="SEBI Verified Only"
            desc="Every advisor is verified against SEBI records before publishing trades."
          />
          <Feature
            icon={<Lock />}
            title="Immutable Records"
            desc="Once published, trades cannot be modified or deleted."
          />
          <Feature
            icon={<TrendingUp />}
            title="Real Performance"
            desc="Trust scores calculated from real trade outcomes."
          />
          <Feature
            icon={<Eye />}
            title="Full Transparency"
            desc="View every trade including entry, target, and result."
          />
          <Feature
            icon={<BarChart3 />}
            title="Advanced Analytics"
            desc="Compare advisors by risk, style, and performance."
          />
          <Feature
            icon={<Users />}
            title="Community Trust"
            desc="See subscriber counts and verified feedback."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24">
        <h2 className="text-4xl font-bold">
          Ready to Start Your{" "}
          <span className="text-yellow-400">Transparent</span> Journey?
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Join thousands of investors who trust TradeBud to find verified trading
          advisors with proven track records.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          {!isLoggedIn ? (
            <>
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold">
                <a href="/register-investor">Join as Investor →</a>
              </button>
              <button className="border border-white/10 px-6 py-3 rounded-lg">
                <a href="/register-advisor">Register as Advisor</a>
              </button>
            </>
          ) : (
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold">
              <a href="/dashboard">Go to Dashboard →</a>
            </button>
          )}
        </div>

        <div className="mt-6 flex justify-center gap-6 text-sm text-gray-400">
          <span className="text-green-400">●</span> Free to join
          <span className="text-green-400">●</span> No hidden fees
          <span className="text-green-400">●</span> Cancel anytime
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0e131a] px-10 py-16">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold text-yellow-400">TradeBud</h3>
            <p className="text-gray-400 mt-4 text-sm">
              India's most transparent trading advisor discovery platform.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Browse Advisors</li>
              <li>How It Works</li>
              <li>Register as Advisor</li>
              <li>Join as Investor</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Disclaimer</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

const Badge = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-sm text-gray-300">
    {icon}
    {text}
  </div>
);

const Stat = ({ value, label }) => (
  <div>
    <p className="text-3xl font-bold text-yellow-400">{value}</p>
    <p className="text-gray-400 text-sm mt-1">{label}</p>
  </div>
);

const Feature = ({ icon, title, desc }) => (
  <div className="bg-[#111722] rounded-2xl p-6 border border-white/5">
    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mt-4">{title}</h3>
    <p className="text-gray-400 text-sm mt-2">{desc}</p>
  </div>
);
