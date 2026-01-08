"use client";
import React, { useState } from "react";
import { Mail } from "lucide-react";

const Feedback = () => {
  const recentApplications = [
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
      name: "Urmila Hasan",
      phone: "(480) 555-0103",
      address: "3605 Parker Rd.",
      status: "Unread",
    },
    {
      name: "হোসেন রহমান",
      phone: "(201) 555-0124",
      address: "7529 E. Pecan St.",
      status: "Read",
    },
    {
      name: "Nabila Khan",
      phone: "(406) 555-0120",
      address: "8080 Railroad St.",
      status: "Read",
    },
    {
      name: "আরেফুল মিয়া",
      phone: "(209) 555-0104",
      address: "775 Rolling Green Rd.",
      status: "Read",
    },
    {
      name: "Joly Inn",
      phone: "(219) 555-0114",
      address: "7529 E. Pecan St.",
      status: "Read",
    },
    {
      name: "হামিদ হাসান",
      phone: "(270) 555-0117",
      address: "3890 Poplar Dr.",
      status: "Read",
    },
    {
      name: "Dgaiu Fhgh",
      phone: "(239) 555-0108",
      address: "775 Rolling Green Rd.",
      status: "Read",
    },
  ];

  return (
    <div className=" max-h-[68vh] h-full overflow-auto ">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold text-black">মতামত / পরামর্শ</h2>
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
              <th className="pb-3 text-sm font-medium text-[#949494]">
                আবেদনের অবস্থা
              </th>
              <th className="pb-3 text-sm font-medium text-[#949494] text-center">
                একশন
              </th>
            </tr>
          </thead>
          <tbody>
            {recentApplications.map((app, idx) => (
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
                <td className="py-4  text-center">
                  <button className="px-4 py-1 border border-red-500 text-red-500 rounded hover:bg-red-50 text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Feedback;
