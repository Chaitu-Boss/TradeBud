import React, { useEffect, useState } from "react";
import supabase from "../../utils/supabase";

const PAGE_SIZE = 24;

const Advisors = () => {
  const [advisors, setAdvisors] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH ADVISORS ================= */

  const fetchAdvisors = async () => {
    setLoading(true);

    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    let query = supabase
      .from("advisors_react")
      .select("*", { count: "exact" })
      .range(from, to)
      .order("created_at", { ascending: false });

    if (search) {
      query = query.ilike("name", `%${search}%`);
    }

    const { data, error, count } = await query;

    if (error) {
      console.error("Error fetching advisors:", error);
    } else {
      setAdvisors(data || []);
      setTotal(count || 0);
    }

    setLoading(false);
  };

  /* ================= EFFECTS ================= */

  useEffect(() => {
    fetchAdvisors();
  }, [page, search]);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      {/* TOP BAR */}
      <header className="flex items-center justify-between px-10 py-5 border-b border-white/10">
        <h1 className="text-xl font-bold text-yellow-400">
          Explore Advisors
        </h1>
        <h1 className="text-xl font-bold text-yellow-400 pr-280"><a href="/">Home</a></h1>
        <button className="text-sm text-red-500 hover:underline cursor-pointer" onClick={() => {
          localStorage.removeItem("id");
          localStorage.removeItem("type");
          navigate("/login");
        }}>
          Sign Out
        </button>
      </header>

      {/* SEARCH */}
      <div className="px-10 py-5">
        <input
          type="text"
          placeholder="Search advisors by name or company..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          className="w-full bg-transparent border border-white/10 rounded-xl px-5 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-yellow-400"
        />
      </div>

      {/* CONTENT */}
      <div className="px-10 pb-6">
        {loading && (
          <p className="text-gray-400 text-sm">Loading advisors...</p>
        )}

        {!loading && advisors.length === 0 && (
          <p className="text-gray-400 text-sm">No advisors found.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {advisors.map((advisor) => (
            <AdvisorCard key={advisor.id} advisor={advisor} />
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-4 py-2 border border-white/10 rounded-lg disabled:opacity-40"
            >
              Prev
            </button>

            <span className="text-sm text-gray-300">
              Page {page} of {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 border border-white/10 rounded-lg disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Advisors;

/* ================= COMPONENT ================= */

const AdvisorCard = ({ advisor }) => {
  return (
    <div className="bg-[#0f1622] border border-white/10 rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-yellow-400">
        {advisor.name}
      </h2>

      <p className="text-gray-300 mt-1">
        {advisor.contact_person || "Registered Advisor"}
      </p>

      <p className="text-sm text-gray-400 mt-2">
        SEBI: {advisor.sebi_number}
      </p>

      <p className="text-sm text-gray-400 mt-2">
        Validity: {advisor.validity}
      </p>

    </div>
  );
};
