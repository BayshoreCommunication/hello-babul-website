"use client";

import { useState } from "react";
import CustomModal from "./CustomModal";

export default function ImportantComplaintSection() {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("");

  const handleOpen = (text: string) => {
    setLabel(text);
    setOpen(true);
  };

  return (
    <>
      {/* ================= IMPORTANT COMPLAINT SECTION ================= */}
      <section className="w-full bg-[#FFFDEA] px-8 py-8 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-2xl border border-orange-300 bg-[#FDF5E2] px-6 py-10 md:px-12 md:py-14 text-center">
            {/* Title */}
            <h2 className="text-2xl md:text-[40px] font-semibold text-gray-900">
              জরুরি অভিযোগ
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-sm md:text-[20px] text-gray-700">
              জরুরি অভিযোগের জন্য নিচের বাটনে ক্লিক করুন
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:text-[20px]">
              <button
                onClick={() => handleOpen("নারী নির্যাতন")}
                className="rounded-md bg-[#D13212] px-6 py-3 text-white font-medium hover:bg-orange-700 transition"
              >
                নারী নির্যাতন
              </button>

              <button
                onClick={() => handleOpen("অসুস্থ রোগী")}
                className="rounded-md bg-[#D13212] px-6 py-3 text-white font-medium hover:bg-orange-700 transition"
              >
                অসুস্থ রোগী
              </button>

              <button
                onClick={() => handleOpen("রাতের জরুরি সমস্যা")}
                className="rounded-md bg-[#D13212] px-6 py-3 text-white font-medium hover:bg-orange-700 transition"
              >
                রাতের জরুরি সমস্যা
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {open && (
        <CustomModal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="আপনার অভিযোগ/পরামর্শ"
        >
          <form className="p-6 md:p-10 flex flex-col gap-6 text-white">
            {/* Full Name */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="w-full md:w-1/4 text-lg font-medium">
                পূর্ণ নাম
              </label>
              <input
                type="text"
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Mobile */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="w-full md:w-1/4 text-lg font-medium">
                মোবাইল নম্বর
              </label>
              <input
                type="tel"
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Area */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="w-full md:w-1/4 text-lg font-medium">
                এরিয়া / ওয়ার্ড
              </label>
              <input
                type="text"
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Dynamic Complaint */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <label className="w-full md:w-1/4 text-lg font-medium pt-2">
                {label}
              </label>
              <textarea
                rows={8}
                placeholder={`${label} সংক্রান্ত বিস্তারিত লিখুন`}
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Upload */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="w-full md:w-1/4 text-lg font-medium">
                ছবি/ভিডিও
              </label>
              <label className="cursor-pointer inline-flex items-center gap-3 bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition">
                Upload file
                <input type="file" className="hidden" />
              </label>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-4 pt-8">
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold px-10 py-3 rounded-xl hover:bg-yellow-300 transition"
              >
                জমা দিন
              </button>

              <button
                type="button"
                className="bg-yellow-400 text-black font-semibold px-10 py-3 rounded-xl hover:bg-yellow-300 transition"
              >
                নাম গোপন রেখে আবেদন
              </button>
            </div>
          </form>
        </CustomModal>
      )}
    </>
  );
}
