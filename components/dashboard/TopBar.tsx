"use client";
import { getDashboardOverview } from "@/app/actions/dashboard";
import {
  AlertCircle,
  Key,
  Mail,
  MapPin,
  MessageSquare,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

// Type for dashboard overview data
interface DashboardOverviewData {
  totalVolunteers: number;
  totalOpinions: number;
  totalSuggestions: number;
  generalSuggestions: number;
  emergencySuggestions: number;
  totalDevelopmentIdeas: number;
  totalSubmissions: number;
}

interface DashboardOverviewResponse {
  success: boolean;
  data: DashboardOverviewData;
}

const TopBar = () => {
  const [overview, setOverview] = useState<DashboardOverviewData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadOverview() {
      try {
        setLoading(true);
        setError(null);
        
        // Use the dashboard action instead of direct fetch
        const response: DashboardOverviewResponse = await getDashboardOverview();
        
        if (mounted && response.success) {
          setOverview(response.data);
        }
      } catch (err) {
        console.error("Failed to fetch dashboard overview:", err);
        if (mounted) {
          setError(err instanceof Error ? err.message : "Failed to load dashboard data");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadOverview();

    return () => {
      mounted = false;
    };
  }, []);

  const stats = [
    {
      label: "সকল আবেদন",
      value: loading ? "..." : (overview?.totalSubmissions ?? 0),
      icon: Mail,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "মতামত",
      value: loading ? "..." : (overview?.totalOpinions ?? 0),
      icon: MessageSquare,
      color: "bg-purple-50 text-purple-600",
    },
    {
      label: "সাধারণ পরামর্শ",
      value: loading ? "..." : (overview?.generalSuggestions ?? 0),
      icon: Key,
      color: "bg-green-50 text-green-600",
    },
    {
      label: "জরুরি পরামর্শ",
      value: loading ? "..." : (overview?.emergencySuggestions ?? 0),
      icon: AlertCircle,
      color: "bg-red-50 text-red-600",
    },
    {
      label: "উন্নয়ন আইডিয়া",
      value: loading ? "..." : (overview?.totalDevelopmentIdeas ?? 0),
      icon: MapPin,
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "স্বেচ্ছাসেবক আবেদন",
      value: loading ? "..." : (overview?.totalVolunteers ?? 0),
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

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <p className="font-semibold">Error loading dashboard data:</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-6 gap-4">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-lg p-6 shadow-sm transition-opacity ${
                loading ? "opacity-60" : "opacity-100"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center shrink-0`}
                >
                  <stat.icon size={20} />
                </div>
                <div className="text-base text-gray-600">{stat.label}</div>
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
