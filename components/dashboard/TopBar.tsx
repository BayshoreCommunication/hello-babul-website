"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Key,
  AlertCircle,
  MapPin,
  MessageSquare,
  User,
  Settings,
} from "lucide-react";
const TopBar = () => {
  const [overview, setOverview] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch(
          "https://hello-babul-backend.vercel.app/api/dashboard/overview"
        );
        if (!res.ok) throw new Error(String(res.status));
        const json = await res.json();

        if (mounted) setOverview(json);
      } catch (err) {
        console.error("Failed to fetch overview:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  console.log("Overview datvcbvcbcbvcba:", overview?.data?.totalSubmissions);

  const stats = [
    {
      label: "সকল আবেদন",
      value:
        overview?.data?.totalSubmissions ??
        overview?.data?.totalSubmissions ??
        "১২০০",
      icon: Mail,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "অভিযোগ",
      value:
        overview?.data?.totalComplaints ??
        overview?.data?.total_complaints ??
        overview?.data?.complaintsCount ??
        "৪০০",
      icon: Key,
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      label: "জরুরি অভিযোগ",
      value:
        overview?.fid ?? overview?.urgent ?? overview?.urgent_count ?? "২২২",
      icon: AlertCircle,
      color: "bg-red-50 text-red-600",
    },
    {
      label: "উন্নয়ন আইডিয়া",
      value:
        overview?.data?.totalDevelopmentIdeas ??
        overview?.data?.total_development_ideas ??
        overview?.data?.totalDevelopmentIdeas ??
        "৬২",
      icon: MapPin,
      color: "bg-green-50 text-green-600",
    },
    {
      label: "মতামত / পরামর্শ",
      value:
        overview?.data?.totalOpinions ??
        overview?.data?.total_opinions ??
        overview?.data?.totalSuggestions ??
        overview?.data?.total_suggestions ??
        "৪১",
      icon: MessageSquare,
      color: "bg-purple-50 text-purple-600",
    },
    {
      label: "স্বেচ্ছাসেবক আবেদন",
      value:
        overview?.data?.totalVolunteers ??
        overview?.data?.total_volunteers ??
        "২২",
      icon: User,
      color: "bg-indigo-50 text-indigo-600",
    },
  ];

  return (
    <div className="flex-1 overflow-auto">
      <div className="">
        <h1 className="text-4xl font-bold pb-3 border-b border-gray-300 mb-6 text-black">
          ড্যাশবোর্ড
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-6 gap-4 ">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center shrink-0`}
                >
                  <stat.icon size={20} />
                </div>
                <div className="text-base text-gray-600 ">{stat.label}</div>
              </div>
              <div className="text-3xl font-bold text-black text-center">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
