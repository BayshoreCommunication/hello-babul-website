"use client";

import React from "react";

const Page = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#0b1f1f] p-4">
        <div className="w-full max-w-5xl rounded-2xl border border-white/30 overflow-hidden bg-[#0b1f1f]">
          {/* Header */}
          <div className="bg-green-700 py-4 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-yellow-300">
              আপনার মতামত
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

            {/* Area / Ward */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="w-full md:w-1/4 text-lg font-medium">
                এরিয়া / ওয়ার্ড
              </label>
              <input
                type="text"
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Feedback */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <label className="w-full md:w-1/4 text-lg font-medium pt-2">
                আপনার মতামত
              </label>
              <textarea
                rows={6}
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold px-10 py-3 rounded-xl hover:bg-yellow-300 transition"
              >
                জমা দিন
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-[#ffffff] p-4">
        <div className="w-full max-w-5xl rounded-2xl border border-white/30 overflow-hidden bg-[#0b1f1f]">
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

            {/* Area / Ward */}
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
                rows={8}
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Image / Video Upload */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="w-full md:w-1/4 text-lg font-medium">
                ছবি/ভিডিও
              </label>

              <label className="cursor-pointer inline-flex items-center gap-3 bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm6 3a3 3 0 110 6 3 3 0 010-6zm-5 9l3-4 2 3 3-4 4 5H5z" />
                </svg>
                Upload your image
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

      <div className="min-h-screen flex items-center justify-center bg-[#0b1f1f] p-4">
        <div className="w-full max-w-5xl rounded-2xl border border-white/30 overflow-hidden bg-[#0b1f1f]">
          {/* Header */}
          <div className="bg-[#0a4d3a] py-4 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-yellow-300">
              স্বেচ্ছাসেবক আবেদন ফর্ম
            </h2>
          </div>

          {/* Form */}
          <form className="p-6 md:p-10 flex flex-col gap-6 text-white">
            {/* পূর্ণ নাম */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="w-full md:w-1/4 text-lg font-medium">
                পূর্ণ নাম
              </label>
              <input
                type="text"
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* পিতার নাম */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="w-full md:w-1/4 text-lg font-medium">
                পিতার নাম
              </label>
              <input
                type="text"
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* মাতার নাম */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="w-full md:w-1/4 text-lg font-medium">
                মাতার নাম
              </label>
              <input
                type="text"
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* জন্মতারিখ */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="w-full md:w-1/4 text-lg font-medium">
                জন্মতারিখ
              </label>
              <input
                type="date"
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* মোবাইল নম্বর */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="w-full md:w-1/4 text-lg font-medium">
                মোবাইল নম্বর
              </label>
              <input
                type="tel"
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* শিক্ষাগত যোগ্যতা */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="w-full md:w-1/4 text-lg font-medium">
                শিক্ষাগত যোগ্যতা
              </label>
              <input
                type="text"
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* এরিয়া / ওয়ার্ড */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="w-full md:w-1/4 text-lg font-medium">
                এরিয়া / ওয়ার্ড
              </label>
              <input
                type="text"
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* ছবি */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="w-full md:w-1/4 text-lg font-medium">ছবি</label>
              <label className="cursor-pointer inline-flex items-center gap-3 bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm6 3a3 3 0 110 6 3 3 0 010-6zm-5 9l3-4 2 3 3-4 4 5H5z" />
                </svg>
                Upload your image
                <input type="file" className="hidden" />
              </label>
            </div>

            {/* Declaration */}
            <div className="flex items-start gap-3 text-base leading-relaxed">
              <input
                type="checkbox"
                className="mt-1 h-5 w-5 accent-yellow-400"
              />
              <p>
                আমি স্বেচ্ছাসেবক হিসেবে দায়িত্বশীলভাবে কাজ করার অঙ্গীকার করছি
                এবং যে কোনো সময় টিমের নির্দেশনা অনুযায়ী সেবা প্রদান করব
              </p>
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold px-16 py-3 rounded-xl hover:bg-yellow-300 transition"
              >
                জমা দিন
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto rounded-2xl border border-white/80 bg-[#0b1f1f] px-6 py-16 md:px-12 md:py-24 text-center shadow-xl">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-400">
          ধন্যবাদ! আপনার অভিযোগ/পরামর্শ আমরা গ্রহণ করেছি
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-white/90 leading-relaxed">
          জনগণের সমস্যার দ্রুত সমাধানে সংশ্লিষ্ট বিভাগ ইতোমধ্যে পদক্ষেপ নিয়েছে।
          প্রয়োজন হলে আমরা আপনার সাথে যোগাযোগ করব।
        </p>
      </div>
    </>
  );
};

export default Page;
