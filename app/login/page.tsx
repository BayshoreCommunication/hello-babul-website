"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ✅ Auto-redirect if already logged in, unless forced
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const urlParams = new URLSearchParams(window.location.search);
    const forceLogin = urlParams.get("force");

    if (isLoggedIn === "true" && !forceLogin) {
      router.replace("/dashboard");
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid email or password");
        return;
      }

      // ✅ Save login state
      localStorage.setItem("isLoggedIn", "true");

      router.replace("/dashboard");
    } catch (err) {
      setError("Server error, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1d1f] px-4">
      <div className="w-full max-w-2xl rounded-lg border border-gray-600 overflow-hidden shadow-lg">
        <div className="bg-green-700 py-3 text-center">
          <h2 className="text-yellow-300 text-xl font-semibold">ইউজার লগইন</h2>
        </div>

        <form onSubmit={handleLogin} className="p-8 space-y-6">
          {error && (
            <div className="border border-red-500 bg-red-500/10 text-red-400 px-4 py-2 rounded text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-4 items-center gap-4">
            <label className="col-span-1 text-white text-sm font-medium">ইমেইল</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="আপনার ইমেইল লিখুন"
              className="col-span-3 w-full rounded-md border border-gray-400 bg-transparent px-4 py-2 text-white outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <label className="col-span-1 text-white text-sm font-medium">পাসওয়ার্ড</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              className="col-span-3 w-full rounded-md border border-gray-400 bg-transparent px-4 py-2 text-white outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
            />
          </div>

          <div className="flex justify-center pt-6">
            <button
              type="submit"
              disabled={loading}
              className="rounded-md bg-yellow-400 px-10 py-2 font-semibold text-black hover:bg-yellow-500 transition disabled:opacity-60"
            >
              {loading ? "লগইন হচ্ছে..." : "লগইন"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
