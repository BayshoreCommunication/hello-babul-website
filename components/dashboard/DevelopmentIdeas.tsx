// "use client";
// import React, { useState } from "react";
// import { Mail } from "lucide-react";
// import { LuEye } from "react-icons/lu";
// import { RiDeleteBinLine } from "react-icons/ri";
// import DeleteModal from "./DeleteModal";

// const DevelopmentIdeas = () => {
//   const recentApplications = [
//     {
//       name: "Hamid Hasan",
//       phone: "(308) 555-0121",
//       address: "3605 Parker Rd.",
//       status: "Unread",
//     },
//     {
//       name: "নাহিদ খান",
//       phone: "(302) 555-0107",
//       address: "8558 Green Rd.",
//       status: "Unread",
//     },
//     {
//       name: "Urmila Hasan",
//       phone: "(480) 555-0103",
//       address: "3605 Parker Rd.",
//       status: "Unread",
//     },
//     {
//       name: "হোসেন রহমান",
//       phone: "(201) 555-0124",
//       address: "7529 E. Pecan St.",
//       status: "Read",
//     },
//     {
//       name: "Nabila Khan",
//       phone: "(406) 555-0120",
//       address: "8080 Railroad St.",
//       status: "Read",
//     },
//     {
//       name: "আরেফুল মিয়া",
//       phone: "(209) 555-0104",
//       address: "775 Rolling Green Rd.",
//       status: "Read",
//     },
//     {
//       name: "Joly Inn",
//       phone: "(219) 555-0114",
//       address: "7529 E. Pecan St.",
//       status: "Read",
//     },
//     {
//       name: "হামিদ হাসান",
//       phone: "(270) 555-0117",
//       address: "3890 Poplar Dr.",
//       status: "Read",
//     },
//     {
//       name: "Dgaiu Fhgh",
//       phone: "(239) 555-0108",
//       address: "775 Rolling Green Rd.",
//       status: "Read",
//     },
//   ];

//   const [open, setOpen] = useState(false);

//   const handleDelete = () => {
//     // ✅ your delete logic here (API call / state update)
//     console.log("Item deleted!");
//   };

//   return (
//     <div className=" max-h-[68vh] h-full overflow-auto ">
//       <div className="bg-white rounded-lg shadow-sm p-8">
//         <div className="flex items-center gap-3 mb-6">
//           <Mail className="text-blue-600" size={24} />
//           <h2 className="text-2xl font-bold text-black">উন্নয়ন আইডিয়া</h2>
//         </div>

//         <table className="w-full">
//           <thead>
//             <tr className="border-b border-gray-200 text-left">
//               <th className="pb-3 text-sm font-medium text-[#949494]">
//                 আবেদনকারীর নাম
//               </th>
//               <th className="pb-3 text-sm font-medium text-[#949494]">
//                 আবেদনকারীর নম্বর
//               </th>
//               <th className="pb-3 text-sm font-medium text-[#949494]">
//                 এলাকা / ওয়ার্ড
//               </th>
//               <th className="pb-3 text-sm font-medium text-[#949494]">
//                 আবেদনের অবস্থা
//               </th>
//               <th className="pb-3 text-sm font-medium text-[#949494] text-center">
//                 একশন
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {recentApplications.map((app, idx) => (
//               <tr key={idx} className="border-b border-gray-100">
//                 <td className="py-4 text-black">{app.name}</td>
//                 <td className="py-4 text-black">{app.phone}</td>
//                 <td className="py-4 text-black">{app.address}</td>
//                 <td className="py-4">
//                   <span
//                     className={`cursor-pointer font-semibold ${
//                       app.status === "Unread"
//                         ? "text-green-600"
//                         : "text-gray-600"
//                     }`}
//                   >
//                     {app.status}
//                   </span>
//                 </td>
//                 <td className="py-4  text-center space-x-3">
//                   <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 ">
//                     <LuEye size={16} className=" " />
//                   </button>
//                   <button
//                     className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50  "
//                     onClick={() => setOpen(true)}
//                   >
//                     <RiDeleteBinLine size={16} className=" " />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <DeleteModal
//           open={open}
//           onClose={() => setOpen(false)}
//           onConfirm={handleDelete}
//           confirmMessage="আপনি কি নিশ্চিত এই আইটেমটি মুছে ফেলতে চান?"
//         />
//       </div>
//     </div>
//   );
// };

// export default DevelopmentIdeas;
"use client";
import {
  deleteDevelopmentIdea,
  getDevelopmentIdeas,
} from "@/app/actions/submissions";
import { Loader2, Mail, Notebook } from "lucide-react";
import { useEffect, useState } from "react";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import DeleteModal from "./DeleteModal";

// Type for suggestion data
interface Suggestion {
  _id: string;
  fullname: string;
  mobile: string;
  area: string;
  typeOfIdea: string;
  comment: string;
  viewed: boolean;
  createdAt: string;
  updatedAt: string;
}

const DevelopmentIdeas = () => {
  const [data, setData] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Suggestion | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  // Fetch general suggestions
  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const response = await getDevelopmentIdeas({
          limit: 100, // Get more to filter
        });

        console.log("response", response);

        if (mounted && response.success) {
          // Filter to show only general suggestions

          setData(response.data);
        }
      } catch (err) {
        console.error("Failed to fetch development ideas:", err);
        if (mounted) {
          setError(err instanceof Error ? err.message : "Failed to load data");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  // Handle delete
  const handleDelete = async () => {
    if (!selectedItem) return;

    try {
      setActionLoading(selectedItem._id);

      const response = await deleteDevelopmentIdea(selectedItem._id);

      if (response.success) {
        // Remove from local state
        setData((prev) => prev.filter((d) => d._id !== selectedItem._id));

        console.log("Deleted general suggestion:", selectedItem.fullname);
        setOpen(false);
        setSelectedItem(null);
      }
    } catch (err) {
      console.error("Failed to delete:", err);
      setError(err instanceof Error ? err.message : "Failed to delete data");
    } finally {
      setActionLoading(null);
    }
  };
  console.log("development data", data);
  return (
    <div className="max-h-[68vh] h-full overflow-auto">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Notebook className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold text-black">উন্নয়ন আইডিয়া</h2>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <p className="font-semibold">Error:</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin text-blue-600" size={40} />
          </div>
        ) : data.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p>কোন উন্নয়ন আইডিয়া পাওয়া যায়নি</p>
          </div>
        ) : (
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
                <th className="pb-3 text-sm font-medium text-[#949494]">
                  আবেদনের অবস্থা
                </th>
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
                  <td className="py-4 text-black">{item.typeOfIdea}</td>
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
                      onClick={() => {
                        // Navigate to details page or open modal
                        window.location.href = `/dashboard/development-ideas/${item._id}`;
                      }}
                    >
                      <LuEye size={16} />
                    </button>
                    <button
                      className={`px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50 ${
                        actionLoading === item._id
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() => {
                        setSelectedItem(item);
                        setOpen(true);
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
        )}

        <DeleteModal
          open={open}
          onClose={() => {
            setOpen(false);
            setSelectedItem(null);
          }}
          onConfirm={handleDelete}
          confirmMessage={`আপনি কি নিশ্চিত "${selectedItem?.fullname}" এর পরামর্শটি মুছে ফেলতে চান?`}
        />
      </div>
    </div>
  );
};

export default DevelopmentIdeas;
