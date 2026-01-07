"use client";

import { useState } from "react";
import CustomModal from "./CustomModal";
import toast, { Toaster } from "react-hot-toast";

const options = [
  "স্কুল বানানোর দাবি",
  "রাস্তা সংস্কার",
  "কৃষকের সহায়তা",
  "বাজার ব্যবস্থা উন্নয়ন",
  "যুবদের খেলাধুলা / IT প্রশিক্ষণ",
  "আমার মতামত",
];

export default function OpinionSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) {
      toast.error("অনুগ্রহ করে একটি অপশন নির্বাচন করুন!");
      return;
    }
    setOpen(true);
  };

  return (
    <>
      {/* Toaster */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* ================= OPINION SECTION ================= */}
      <section className="w-full bg-[#F0F6DA] px-8 py-8 md:py-16">
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="text-2xl md:text-[40px] font-semibold text-gray-900">
            আপনার উন্নয়ন আইডিয়া দিন
          </h2>

          <p className="mt-4 text-sm md:text-[20px] text-gray-700">
            আপনার মতামত সমাজ পরিবর্তনে সবচেয়ে গুরুত্বপূর্ণ
          </p>

          <form onSubmit={handleSubmit} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {options.map((option) => {
                const isActive = selected === option;

                return (
                  <label
                    key={option}
                    className={`flex items-center gap-4 rounded-xl border px-6 py-4 cursor-pointer transition
                      ${
                        isActive
                          ? "border-green-600 bg-[#E2F1D2]"
                          : "border-green-500 bg-[#E7F2D9] hover:bg-[#DDF0C8]"
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="opinion"
                      checked={isActive}
                      onChange={() => setSelected(option)}
                      className="hidden"
                    />

                    <span
                      className={`h-5 w-5 rounded-full border-2 flex items-center justify-center
                        ${isActive ? "border-green-700" : "border-green-600"}
                      `}
                    >
                      {isActive && (
                        <span className="h-3 w-3 rounded-full bg-green-700" />
                      )}
                    </span>

                    <span className="text-[#018635] font-medium">{option}</span>
                  </label>
                );
              })}
            </div>

            <button
              type="submit"
              className="mt-10 inline-flex items-center justify-center rounded-md bg-[#FED525] px-10 py-3 font-semibold text-black hover:bg-yellow-500 transition md:text-[20px]"
            >
              সাবমিট করুন
            </button>
          </form>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {open && (
        <CustomModal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="আপনার মতামত"
        >
          {/* Form */}
          <form className="p-6 md:p-10 flex flex-col gap-6 text-white">
            {/* Name */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="md:w-1/4 text-lg">পূর্ণ নাম</label>
              <input
                type="text"
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Mobile */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="md:w-1/4 text-lg">মোবাইল নম্বর</label>
              <input
                type="tel"
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Area */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="md:w-1/4 text-lg">এরিয়া / ওয়ার্ড</label>
              <input
                type="text"
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* TEXTAREA */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <label className="md:w-1/4 text-lg pt-2">{selected}</label>
              <textarea
                rows={6}
                placeholder={`${selected} সম্পর্কে বিস্তারিত লিখুন`}
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-6">
              <button className="bg-yellow-400 text-black font-semibold px-10 py-3 rounded-xl hover:bg-yellow-300 transition">
                জমা দিন
              </button>
            </div>
          </form>
        </CustomModal>
      )}
    </>
  );
}
