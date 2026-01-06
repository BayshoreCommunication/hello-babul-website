"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="w-full">
        {/* Top red section */}
        <div className="bg-[#D13212] text-white">
          <div className="max-w-[1640px] mx-auto md:flex flex-col md:flex-row items-center justify-evenly pt-8 pb-8 md:pb-0 md:pt-16 px-8 gap-6 hidden ">
            {/* Image */}
            <Image
              src="/image/hero/babul.png"
              alt="Babul"
              width={1000}
              height={800}
              className="rounded-lg object-cover w-[500px] h-auto"
            />

            {/* Text */}
            <div className="flex flex-col items-center text-center">
              <h1 className="text-[48px] md:text-[64px] font-bold flex items-center gap-2">
                <Image
                  src="/image/hero/icon.png"
                  alt="icon"
                  width={48}
                  height={48}
                />
                Hello Babul
              </h1>

              <p className="mt-4 text-lg md:text-[48px] leading-none">
                আপনার কথা—সরাসরি বাবুল ভাইয়ের কাছে
              </p>

              <p className="mt-4 md:text-[32px] text-[#FED525]">
                -- শহিদুল ইসলাম বাবুল
              </p>
            </div>
          </div>
          <div className="max-w-[1640px] mx-auto md:hidden flex-col md:flex-row items-center justify-evenly pt-8 pb-8 md:pb-0 md:pt-16 px-8 gap-6 ">
            {/* Image */}
            <Image
              src="/image/hero/babul-phone.png"
              alt="Babul"
              width={1000}
              height={800}
              className="rounded-lg object-cover w-[500px] h-auto"
            />

            {/* Text */}
            <div className="flex flex-col items-center text-center">
              

              <p className="mt-8 text-lg md:text-[48px] leading-tight">
                অভিযোগ করুন, পরামর্শ দিন - পরিবর্তনে আপনার অংশগ্রহণই সবচেয়ে শক্তিশালী শক্তি।আপনার কথা—সরাসরি বাবুল ভাইয়ের কাছে
              </p>

              <p className="mt-4 md:text-[32px] text-[#FED525]">
                -- শহিদুল ইসলাম বাবুল
              </p>
            </div>
          </div>
        </div>

        {/* Bottom green section */}
        <div className="bg-[#018635] text-center px-6 py-8 md:py-12">
          <p className="text-lg md:text-[40px] leading-none max-w-6xl mx-auto text-[#FED525]">
            আপনার মতামত সরাসরি আমার টিমের কাছে পৌঁছাবে, প্রয়োজন হলে আমরা যোগাযোগ করব
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-6 bg-[#FED525] text-black md:text-[20px] font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
          >
            অভিযোগ/পরামর্শ জানান
          </button>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {open && <ComplaintModal onClose={() => setOpen(false)} />}
    </>
  );
}

/* ================= MODAL COMPONENT ================= */

function ComplaintModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-5xl rounded-2xl bg-[#0b1f1f] overflow-hidden relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-red-400"
        >
          ✕
        </button>

        {/* Header */}
        <div className="bg-green-700 py-4 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-yellow-300">
            আপনার অভিযোগ/পরামর্শ
          </h2>
        </div>

        {/* Form */}
        <form className="p-6 md:p-10 flex flex-col gap-6 text-white">
          {/* Full Name */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <label className="w-full md:w-1/4 text-lg font-medium">
              পূর্ণ নাম
            </label>
            <input
              type="text"
              className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Mobile */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <label className="w-full md:w-1/4 text-lg font-medium">
              মোবাইল নম্বর
            </label>
            <input
              type="tel"
              className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Area */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <label className="w-full md:w-1/4 text-lg font-medium">
              এরিয়া / ওয়ার্ড
            </label>
            <input
              type="text"
              className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Complaint */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <label className="w-full md:w-1/4 text-lg font-medium pt-2">
              আপনার অভিযোগ
            </label>
            <textarea
              rows={6}
              className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
      </div>
    </div>
  );
}
