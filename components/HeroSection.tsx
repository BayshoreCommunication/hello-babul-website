"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import CustomModal from "./CustomModal";
import toast, { Toaster } from "react-hot-toast";

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    mobile: "",
    area: "",
    comment: "",
    file: null as File | null,
  });

  // ================= SUBMIT =================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("fullname", formData.fullname);
    data.append("mobile", formData.mobile);
    data.append("area", formData.area);
    data.append("comment", formData.comment);

    if (formData.file) {
      data.append("media", formData.file);
    }

    try {
      const res = await fetch(
        "https://hello-babul-backend.vercel.app/api/your-suggests",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();
      if (!res.ok) throw new Error(result.message);

      setOpen(false);
      setSuccessOpen(true);
      toast.success("আপনার আবেদন সফলভাবে জমা হয়েছে");

      setFormData({
        fullname: "",
        mobile: "",
        area: "",
        comment: "",
        file: null,
      });
    } catch (err: any) {
      toast.error(err.message || "সমস্যা হয়েছে, আবার চেষ্টা করুন");
    } finally {
      setLoading(false);
    }
  };

  // Auto-close success modal after 3 seconds
  useEffect(() => {
    if (successOpen) {
      const timer = setTimeout(() => setSuccessOpen(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [successOpen]);

  return (
    <>
      <Toaster position="top-right" />

      {/* ================= HERO SECTION ================= */}
      <section className="w-full">
        <div className="bg-[#D13212] text-white">
          <div className="max-w-[1640px] mx-auto hidden md:flex items-center justify-evenly pt-16 px-8 gap-6">
            <Image
              src="/image/hero/babul.png"
              alt="Babul"
              width={1000}
              height={800}
              className="w-[500px] h-auto rounded-lg"
            />

            <div className="text-center">
              <h1 className="text-[64px] font-bold flex items-center gap-2 justify-center">
                <Image
                  src="/image/hero/icon.png"
                  alt="icon"
                  width={48}
                  height={48}
                />
                Hello Babul
              </h1>
              <p className="mt-4 text-[48px] leading-none max-w-2xl">
                আপনার কথা—সরাসরি বাবুল ভাইয়ের কাছে
              </p>
              <p className="mt-4 text-[32px] text-[#FED525]">
                -- শহিদুল ইসলাম বাবুল
              </p>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden px-8 py-8 text-center">
            <Image
              src="/image/hero/babul-phone.png"
              alt="Babul"
              width={800}
              height={600}
              className="w-full rounded-lg"
            />
            <p className="mt-6 text-lg">
              অভিযোগ করুন, পরামর্শ দিন — পরিবর্তনে আপনার অংশগ্রহণই সবচেয়ে
              শক্তিশালী শক্তি।
            </p>
            <p className="mt-4 text-[#FED525]">-- শহিদুল ইসলাম বাবুল</p>
          </div>
        </div>

        <div className="bg-[#018635] text-center px-6 py-10">
          <p className="text-lg md:text-[40px] text-[#FED525] max-w-6xl mx-auto leading-none">
            আপনার মতামত সরাসরি আমার টিমের কাছে পৌঁছাবে, প্রয়োজন হলে আমরা যোগাযোগ
            করব
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-6 bg-[#FED525] text-black font-semibold px-8 py-3 rounded-md hover:bg-yellow-300 transition"
          >
            অভিযোগ/পরামর্শ জানান
          </button>
        </div>
      </section>

      {/* ================= FORM MODAL ================= */}
      {open && (
        <CustomModal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="আপনার অভিযোগ/পরামর্শ"
        >
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-10 bg-black text-white flex flex-col gap-6"
          >
            {/* Fullname */}
            <div className="flex flex-col md:flex-row gap-4">
              <label className="md:w-1/4">পূর্ণ নাম</label>
              <input
                type="text"
                value={formData.fullname}
                onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
                required
                className="flex-1 bg-transparent border border-white/60 rounded-lg px-4 py-3"
              />
            </div>

            {/* Mobile */}
            <div className="flex flex-col md:flex-row gap-4">
              <label className="md:w-1/4">মোবাইল নম্বর</label>
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                required
                className="flex-1 bg-transparent border border-white/60 rounded-lg px-4 py-3"
              />
            </div>

            {/* Area */}
            <div className="flex flex-col md:flex-row gap-4">
              <label className="md:w-1/4">এরিয়া / ওয়ার্ড</label>
              <input
                type="text"
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
                required
                className="flex-1 bg-transparent border border-white/60 rounded-lg px-4 py-3"
              />
            </div>

            {/* Comment */}
            <div className="flex flex-col md:flex-row gap-4">
              <label className="md:w-1/4">আপনার অভিযোগ</label>
              <textarea
                rows={5}
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
                required
                className="flex-1 bg-transparent border border-white/60 rounded-lg px-4 py-3"
              />
            </div>

            {/* File */}
            <label className="cursor-pointer bg-gray-200 text-black px-6 py-3 rounded-lg w-fit">
              Upload file
              <input
                type="file"
                className="hidden"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    file: e.target.files?.[0] || null,
                  })
                }
              />
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-400 text-black font-semibold px-10 py-3 rounded-xl hover:bg-yellow-300 transition"
            >
              {loading ? "জমা হচ্ছে..." : "জমা দিন"}
            </button>
          </form>
        </CustomModal>
      )}

      {/* ================= SUCCESS POPUP ================= */}
      {successOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="w-full max-w-2xl rounded-xl border border-white/20 bg-[#0b1f1f] p-10 text-center shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2 className="mt-6 text-xl md:text-2xl font-semibold text-[#FED525]">
              আপনার আবেদন সফলভাবে গ্রহণ করা হয়েছে
            </h2>

            <p className="mt-3 text-sm md:text-base text-gray-200">
              জনগণের সেবায় আপনাদের সহযোগিতাই আমাদের শক্তি হিসেবে কাজ করে
            </p>
          </div>
        </div>
      )}
    </>
  );
}
