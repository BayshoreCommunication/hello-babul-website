"use client";

import { useState } from "react";

export default function Team() {
  const [open, setOpen] = useState(false);

  const team = [
    {
      name: "মোঃ আরিফুল ইসলাম",
      role: "কমিউনিটি কো-অর্ডিনেটর",
      desc: "স্বেচ্ছাসেবী কার্যক্রম পরিচালনা ও জনগণের সমস্যা দ্রুত সমাধানে কাজ করেন",
      img: "/image/team/img1.png",
    },
    {
      name: "সাবিনা আক্তার",
      role: "স্বাস্থ্য কর্মী",
      desc: "স্বাস্থ্য ও পরিচ্ছন্নতা সংক্রান্ত অভিযোগ যাচাই ও উদ্যোগ নেন",
      img: "/image/team/img2.png",
    },
    {
      name: "মোঃ মাসুদুল ইসলাম",
      role: "নিরাপত্তা/তথ্য সেবা কর্মী",
      desc: "এলাকার নিরাপত্তা ও জরুরি পরিস্থিতিতে সহযোগিতামূলক ভূমিকা পালন করেন",
      img: "/image/team/img3.png",
    },
    {
      name: "মাহমুদ হাসান",
      role: "অভিযোগ ডেস্ক প্রধান",
      desc: "নাগরিক অভিযোগ গ্রহণ, ফলো-আপ ও সমাধান নিশ্চিত করেন",
      img: "/image/team/img4.png",
    },
  ];

  return (
    <>
      {/* ================= TEAM SECTION ================= */}
      <main className="bg-[#FFFDEA] px-8 py-8 md:py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            আমাদের সাপোর্ট টিম
          </h2>

          <p className="mt-3 text-gray-600">
            জনগণের সেবা নিশ্চিত করতে আমাদের নিবেদিত কর্মীরা সর্বদা প্রস্তুত
          </p>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="border border-green-200 rounded-lg overflow-hidden bg-[#FFFDEA]"
              >
                <img src={member.img} alt={member.name} className="p-8 pb-0" />

                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {member.name}
                  </h3>
                </div>

                <div className="bg-[#018635] text-white p-4">
                  <p className="font-semibold text-[20px]">{member.role}</p>
                  <p className="text-sm mt-2">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16">
            <h3 className="font-bold text-[28px] md:text-[40px] text-black">
              আমাদের স্বেচ্ছাসেবক হিসেবে যোগ দিন
            </h3>

            <p className="mt-4 text-gray-600 md:text-[20px] max-w-3xl mx-auto">
              নিবন্ধন করে আজই আমাদের টিমের একজন হয়ে উঠুন।
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-6 bg-[#FED525] hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition md:text-[20px]"
            >
              ফর্মটি সঠিকভাবে পূরণ করুন
            </button>
          </div>
        </div>
      </main>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-[#0b1f1f]">

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>

            {/* Header */}
            <div className="bg-[#0a4d3a] py-4 text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-yellow-300">
                স্বেচ্ছাসেবক আবেদন ফর্ম
              </h2>
            </div>

            {/* ================= FORM ================= */}
            <form className="p-6 md:p-10 flex flex-col gap-6 text-white max-h-[80vh] overflow-y-auto">

              {[
                "পূর্ণ নাম",
                "পিতার নাম",
                "মাতার নাম",
                "জন্মতারিখ",
                "মোবাইল নম্বর",
                "শিক্ষাগত যোগ্যতা",
                "এরিয়া / ওয়ার্ড",
              ].map((label, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-4 items-center">
                  <label className="md:w-1/4 text-lg">{label}</label>
                  <input
                    type="text"
                    className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              ))}

              {/* Image Upload */}
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <label className="md:w-1/4 text-lg">ছবি</label>
                <label className="cursor-pointer bg-gray-200 text-black px-6 py-3 rounded-lg">
                  Upload Image
                  <input type="file" className="hidden" />
                </label>
              </div>

              {/* Declaration */}
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-5 w-5 accent-yellow-400" />
                <p>
                  আমি স্বেচ্ছাসেবক হিসেবে দায়িত্বশীলভাবে কাজ করার অঙ্গীকার করছি
                </p>
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-6">
                <button className="bg-yellow-400 text-black font-semibold px-16 py-3 rounded-xl hover:bg-yellow-300 transition">
                  জমা দিন
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}
