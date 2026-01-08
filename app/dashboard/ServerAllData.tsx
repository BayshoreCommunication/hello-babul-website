"use client";

import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import DeleteModal from "@/components/dashboard/DeleteModal";

// Example type
interface Application {
  name: string;
  phone: string;
  address: string;
  status: string;
}

interface ServerAllDataProps {
  applications?: Application[];
}

const ServerAllData: React.FC<ServerAllDataProps> = ({ applications }) => {
  const [data, setData] = useState<Application[]>([]);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    // Use passed prop or sample data
    if (applications && applications.length) {
      setData(applications);
    } else {
      setData([
        {
          name: "Hamid Hasan",
          phone: "(308) 555-0121",
          address: "3605 Parker Rd.",
          status: "Unread",
        },
        {
          name: "নাহিদ খান",
          phone: "(302) 555-0107",
          address: "8558 Green Rd.",
          status: "Unread",
        },
        {
          name: "হোসেন রহমান",
          phone: "(201) 555-0124",
          address: "7529 E. Pecan St.",
          status: "Read",
        },
      ]);
    }
  }, [applications]);

  const handleDelete = () => {
    if (selectedItem !== null) {
      const deletedName = data[selectedItem].name;
      console.log("Deleted:", deletedName);
      // Remove from state (UI)
      setData((prev) => prev.filter((_, idx) => idx !== selectedItem));
      setSelectedItem(null);
    }
  };

  return (
    <div className=" max-h-[68vh] h-full overflow-auto ">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold text-black">অভিযোগ</h2>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 text-left">
              <th className="pb-3 text-sm font-medium text-[#949494]">
                আবেদনকারীর নাম
              </th>
              <th className="pb-3 text-sm font-medium text-[#949494]">
                আবেদনকারীর নম্বর
              </th>
              <th className="pb-3 text-sm font-medium text-[#949494]">
                এলাকা / ওয়ার্ড
              </th>
              <th className="pb-3 text-sm font-medium text-[#949494]">ধরণ</th>
              <th className="pb-3 text-sm font-medium text-[#949494] text-center">
                একশন
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((app, idx) => (
              <tr key={idx} className="border-b border-gray-100">
                <td className="py-4 text-black">{app.name}</td>
                <td className="py-4 text-black">{app.phone}</td>
                <td className="py-4 text-black">{app.address}</td>

                <td className="py-4">
                  <span
                    className={`cursor-pointer font-semibold ${
                      app.status === "Unread"
                        ? "text-green-600"
                        : "text-gray-600"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="py-4 text-center space-x-3">
                  <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 ">
                    <LuEye size={16} />
                  </button>
                  <button
                    className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50 "
                    onClick={() => {
                      setSelectedItem(idx);
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

        {/* Delete Modal */}
        <DeleteModal
          open={openDelete}
          onClose={() => setOpenDelete(false)}
          onConfirm={handleDelete}
          confirmMessage="আপনি কি নিশ্চিত এই আইটেমটি মুছে ফেলতে চান?"
        />
      </div>
    </div>
  );
};

export default ServerAllData;
