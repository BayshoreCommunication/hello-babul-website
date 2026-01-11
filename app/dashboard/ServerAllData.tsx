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

// Type for dashboard data item
interface DashboardItem {
  _id: string;
  fullname: string;
  mobile: string;
  area: string;
  type: DataType;
  viewed: boolean;
  dateofbirth?: string;
  createdAt: string;
  updatedAt: string;
  comment?: string;
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

const ServerAllData: React.FC = () => {
  const [data, setData] = useState<DashboardItem[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DashboardItem | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data
  const fetchData = async (page: number = 1, search: string = "") => {
    try {
      setLoading(true);
      setError(null);

      const response = await getAllDashboardData({
        page,
        limit: 10,
        search: search || undefined,
      });

      if (response.success) {
        setData(response.data);
        setPagination(response.pagination);
      }
    } catch (err) {
      console.error("Failed to fetch dashboard data:", err);
      setError(err instanceof Error ? err.message : "Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage, searchTerm);
  }, [currentPage, searchTerm]);

  // Delete handler
  const handleDelete = async () => {
    if (!selectedItem) return;

    try {
      setActionLoading(selectedItem._id);
      const response = await deleteData(selectedItem._id, selectedItem.type);

      if (response.success) {
        setData((prev) => prev.filter((d) => d._id !== selectedItem._id));
        if (pagination) {
          setPagination({ ...pagination, total: pagination.total - 1 });
        }
        setOpenDelete(false);
        setSelectedItem(null);
      }
    } catch (err) {
      console.error("Failed to delete:", err);
      setError(err instanceof Error ? err.message : "Failed to delete data");
    } finally {
      setActionLoading(null);
    }
  };

  const getDetailsRoute = (item: DashboardItem) => {
    const typeRoutes: Record<DataType, string> = {
      opinion: `/dashboard/feedback/${item._id}`,
      suggestion: `/dashboard/complaints/${item._id}`,
      volunteer: `/dashboard/volunteer-application/${item._id}`,
      developmentIdea: `/dashboard/development-ideas/${item._id}`,
    };
    return typeRoutes[item.type] || `/dashboard/${item.type}/${item._id}`;
  };

  const getTypeLabel = (type: DataType, item?: DashboardItem) => {
    if (type === "suggestion" && item?.typeOfSuggest) {
      return item.typeOfSuggest === "general"
        ? "সাধারণ অভিযোগ"
        : "জরুরি অভিযোগ";
    }
    const labels: Record<DataType, string> = {
      volunteer: "স্বেচ্ছাসেবক",
      opinion: "মতামত",
      suggestion: "পরামর্শ",
      developmentIdea: "উন্নয়ন আইডিয়া",
    };
    return labels[type] || type;
  };

  // Format ISO date to YYYY-MM-DD
  const formatDate = (isoDate?: string) => {
    if (!isoDate) return "-";
    const d = new Date(isoDate);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <div className="max-h-[68vh] h-full overflow-auto">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Mail className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-black">সকল আবেদন</h2>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="অনুসন্ধান করুন..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 text-black py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <p className="font-semibold">Error:</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin text-blue-600" size={40} />
          </div>
        ) : data.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p>কোন ডেটা পাওয়া যায়নি</p>
          </div>
        ) : (
          <>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 text-left">
                  <th className="pb-3 text-sm font-medium text-[#949494]">নাম</th>
                  <th className="pb-3 text-sm font-medium text-[#949494]">মোবাইল</th>
                  <th className="pb-3 text-sm font-medium text-[#949494]">এলাকা</th>
                  <th className="pb-3 text-sm font-medium text-[#949494]">জমা দেওয়ার তারিখ</th>
                  <th className="pb-3 text-sm font-medium text-[#949494]">ধরণ</th>
                  <th className="pb-3 text-sm font-medium text-[#949494]">স্ট্যাটাস</th>
                  <th className="pb-3 text-sm font-medium text-[#949494] text-center">একশন</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item._id} className="border-b border-gray-100">
                    <td className="py-4 text-black">{item.fullname}</td>
                    <td className="py-4 text-black">{item.mobile}</td>
                    <td className="py-4 text-black">{item.area}</td>
                    <td className="py-4 text-black">{formatDate(item.createdAt)}</td>
                    <td className="py-4 text-black">{getTypeLabel(item.type, item)}</td>
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
                        className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition-colors"
                        onClick={() => (window.location.href = getDetailsRoute(item))}
                        title="বিস্তারিত দেখুন"
                      >
                        <LuEye size={16} />
                      </button>
                      <button
                        className={`px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50 transition-colors ${
                          actionLoading === item._id ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        onClick={() => {
                          setSelectedItem(item);
                          setOpenDelete(true);
                        }}
                        disabled={actionLoading === item._id}
                      >
                        <RiDeleteBinLine size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {pagination && pagination.totalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <p className="text-sm text-gray-600">
                  মোট {pagination.total} টি আইটেম, পৃষ্ঠা {pagination.page} / {pagination.totalPages}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    disabled={!pagination.hasPrevPage}
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    পূর্ববর্তী
                  </button>
                  <button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    disabled={!pagination.hasNextPage}
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    পরবর্তী
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        <DeleteModal
          open={openDelete}
          onClose={() => {
            setOpenDelete(false);
            setSelectedItem(null);
          }}
          onConfirm={handleDelete}
          confirmMessage={`আপনি কি নিশ্চিত "${selectedItem?.fullname}" এর আবেদনটি মুছে ফেলতে চান?`}
        />
      </div>
    </div>
  );
};

export default ServerAllData;
