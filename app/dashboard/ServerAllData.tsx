"use client";

import { useState, useEffect } from "react";
import { Loader2, Mail } from "lucide-react";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import DeleteModal from "@/components/dashboard/DeleteModal";
import {
  getAllDashboardData,
  deleteData,
  type DataType,
} from "@/app/actions/dashboard";

/* ---------------- Types ---------------- */

interface DashboardItem {
  _id: string;
  fullname: string;
  mobile: string;
  area: string;
  type: DataType;
  viewed: boolean;
  createdAt: string;
  updatedAt: string;

  // textarea fields
  typeOfOpinion?: string;
  typeOfSuggest?: string;
  typeOfIdea?: string;
}

interface PaginationInfo {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

/* ---------------- Component ---------------- */

const ServerAllData = () => {
  const [data, setData] = useState<DashboardItem[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [openDelete, setOpenDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DashboardItem | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  /* ---------------- Fetch ---------------- */

  const fetchData = async (page = 1, search = "") => {
    try {
      setLoading(true);
      setError(null);

      const res = await getAllDashboardData({
        page,
        limit: 10,
        search: search || undefined,
      });

      if (res.success) {
        setData(res.data);
        setPagination(res.pagination);
      }
    } catch (err) {
      setError("ডেটা লোড করা যায়নি");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage, searchTerm);
  }, [currentPage, searchTerm]);

  /* ---------------- Delete ---------------- */

  const handleDelete = async () => {
    if (!selectedItem) return;

    try {
      setActionLoading(selectedItem._id);
      const res = await deleteData(selectedItem._id, selectedItem.type);

      if (res.success) {
        setData((prev) => prev.filter((d) => d._id !== selectedItem._id));
        setOpenDelete(false);
        setSelectedItem(null);
      }
    } catch {
      setError("ডিলিট করা যায়নি");
    } finally {
      setActionLoading(null);
    }
  };

  /* ---------------- Helpers ---------------- */

  const getDetailsRoute = (item: DashboardItem) => {
    const routes: Record<DataType, string> = {
      opinion: `/dashboard/feedback/${item._id}`,
      suggestion: `/dashboard/complaints/${item._id}`,
      volunteer: `/dashboard/volunteer-application/${item._id}`,
      developmentIdea: `/dashboard/development-ideas/${item._id}`,
    };
    return routes[item.type];
  };

  // 🔥 EXACT FIX (NO UI CHANGE)
  const getTypeText = (item: DashboardItem) => {
    if (item.type === "opinion") {
      return item.typeOfOpinion || "মতামত";
    }

    if (item.type === "suggestion") {
      if (item.typeOfSuggest === "general") return "সাধারণ অভিযোগ";
      if (item.typeOfSuggest === "urgent") return "জরুরি অভিযোগ";
      return "পরামর্শ";
    }

    if (item.type === "developmentIdea") {
      return item.typeOfIdea || "উন্নয়ন আইডিয়া";
    }

    return "স্বেচ্ছাসেবক";
  };

  const formatDate = (date: string) =>
    new Date(date).toISOString().split("T")[0];

  /* ---------------- UI ---------------- */

  return (
    <div className="max-h-[68vh] h-full overflow-auto">
      <div className="bg-white rounded-lg shadow-sm p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Mail className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-black">সকল আবেদন</h2>
          </div>

          <input
            type="text"
            placeholder="অনুসন্ধান করুন..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin text-blue-600" size={40} />
          </div>
        ) : data.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            কোনো ডেটা পাওয়া যায়নি
          </div>
        ) : (
          <>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 text-left">
                  <th className="pb-3 text-sm font-medium text-[#949494]">নাম</th>
                  <th className="pb-3 text-sm font-medium text-[#949494]">মোবাইল</th>
                  <th className="pb-3 text-sm font-medium text-[#949494]">এলাকা</th>
                  <th className="pb-3 text-sm font-medium text-[#949494]">
                    জমা দেওয়ার তারিখ
                  </th>
                  <th className="pb-3 text-sm font-medium text-[#949494]">ধরণ</th>
                  <th className="pb-3 text-sm font-medium text-[#949494]">স্ট্যাটাস</th>
                  <th className="pb-3 text-sm font-medium text-[#949494] text-center">
                    একশন
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.map((item) => (
                  <tr key={item._id} className="border-b border-gray-100">
                    <td className="py-4 text-black">{item.fullname}</td>
                    <td className="py-4 text-black">{item.mobile}</td>
                    <td className="py-4 text-black">{item.area}</td>
                    <td className="py-4 text-black">
                      {formatDate(item.createdAt)}
                    </td>

                    {/* 🔥 ONLY THIS VALUE CHANGED */}
                    <td className="py-4 text-black">
                      {getTypeText(item)}
                    </td>

                    <td className="py-4">
                      <span
                        className={`font-semibold ${
                          item.viewed ? "text-gray-600" : "text-green-600"
                        }`}
                      >
                        {item.viewed ? "দেখা হয়েছে" : "নতুন"}
                      </span>
                    </td>

                    <td className="py-4 text-center space-x-3">
                      <button
                        className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50"
                        onClick={() =>
                          (window.location.href = getDetailsRoute(item))
                        }
                      >
                        <LuEye size={16} />
                      </button>
                      <button
                        className={`px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50 ${
                          actionLoading === item._id
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                        disabled={actionLoading === item._id}
                        onClick={() => {
                          setSelectedItem(item);
                          setOpenDelete(true);
                        }}
                      >
                        <RiDeleteBinLine size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        <DeleteModal
          open={openDelete}
          onClose={() => setOpenDelete(false)}
          onConfirm={handleDelete}
          confirmMessage={`আপনি কি নিশ্চিত "${selectedItem?.fullname}" এর আবেদনটি মুছে ফেলতে চান?`}
        />
      </div>
    </div>
  );
};

export default ServerAllData;
