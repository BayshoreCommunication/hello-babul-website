"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import CustomModal from "./CustomModal";
import toast, { Toaster } from "react-hot-toast";
import { Phone } from "lucide-react";

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filePreview, setFilePreview] = useState<string | null>(null);

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

    if (
      !formData.fullname ||
      !formData.mobile ||
      !formData.area ||
      !formData.comment
    ) {
      toast.error("Please fill all required fields!");
      return;
    }

    setLoading(true);

    const data = new FormData();
    data.append("fullname", formData.fullname);
    data.append("mobile", formData.mobile);
    data.append("area", formData.area);
    data.append("comment", formData.comment);

    // 🔒 always send general
    data.append("typeOfSuggest", "general");

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
      setFilePreview(null);
    } catch (err: any) {
      toast.error(err.message || "সমস্যা হয়েছে, আবার চেষ্টা করুন");
    } finally {
      setLoading(false);
    }
  };

  // Auto-close success modal after 3 seconds (UNCHANGED)
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
          {/* Desktop View */}
          <div className="max-w-[1640px] mx-auto md:flex flex-col md:flex-row items-center justify-evenly pt-8 pb-8 md:pb-0 md:pt-16 px-8 gap-6 hidden">
            <Image
              src="/image/hero/babul.png"
              alt="Babul"
              width={500}
              height={500}
              className="rounded-lg object-cover w-[500px] h-auto"
            />
            <div className="flex flex-col items-center text-center">
              <h1 className="text-[48px] md:text-[64px] font-bold flex items-center  gap-2">
                <Image
                  src="/image/hero/icon.png"
                  alt="icon"
                  width={60}
                  height={60}
                  className="w-12 h-12"
                />
                Hello Babul
              </h1>
              <p className="mt-4 text-lg md:text-[48px] leading-none max-w-2xl">
                আপনার কথা—সরাসরি শহিদুল ইসলাম বাবুলের কাছে
              </p>

              {/* Helpline Numbers */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:01811405823"
                  className="flex items-center bg-[#018635] hover:text-black gap-2 px-6 py-3 rounded-lg text-lg md:text-xl font-semibold text-white hover:bg-[#FDE047] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  01811-405823
                </a>
                <a
                  href="tel:01711756610"
                  className="flex items-center bg-[#018635] hover:text-black gap-2 px-6 py-3 rounded-lg text-lg md:text-xl font-semibold text-white hover:bg-[#FDE047] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  01711-756610
                </a>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="max-w-[1640px] mx-auto md:hidden flex flex-col items-center justify-evenly pt-8 pb-8 px-8 gap-6">
            <Image
              src="/image/hero/babul-phone.png"
              alt="Babul"
              width={300}
              height={300}
              className="rounded-lg object-cover w-[100%] h-auto"
            />
            <div className="flex flex-col items-center text-center">
              <p className="mt-4 text-white text-xl">
                আপনার কথা—সরাসরি শহিদুল ইসলাম বাবুলের কাছে
              </p>

              {/* Helpline Numbers - Mobile */}
              <div className="mt-6 flex flex-col items-center gap-3 w-full">
                <a
                  href="tel:01811405823"
                  className="flex items-center bg-[#018635] hover:text-black gap-2 px-5 py-2.5 rounded-lg w-fit text-base font-semibold text-white hover:bg-[#FDE047] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  01811-405823
                </a>
                <a
                  href="tel:01711756610"
                  className="flex items-center bg-[#018635] hover:text-black gap-2 px-5 py-2.5 rounded-lg w-fit text-base font-semibold text-white hover:bg-[#FDE047] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  01711-756610
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#018635] text-center px-6 py-10">
          <p className="text-lg md:text-[40px] text-[#FDE047] max-w-6xl mx-auto leading-none">
            আপনার মতামত সরাসরি আমার টিমের কাছে পৌঁছাবে, প্রয়োজন হলে আমরা যোগাযোগ
            করব
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-6 bg-[#FDE047] text-black font-semibold px-8 py-3 rounded-md hover:bg-yellow-300 transition"
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
            <input
              type="text"
              placeholder="পূর্ণ নাম"
              value={formData.fullname}
              onChange={(e) =>
                setFormData({ ...formData, fullname: e.target.value })
              }
              required
              className="bg-transparent border border-white/60 rounded-lg px-4 py-3 text-white placeholder-white/50"
            />

            <input
              type="tel"
              placeholder="মোবাইল নম্বর"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              required
              className="bg-transparent border border-white/60 rounded-lg px-4 py-3 text-white placeholder-white/50"
            />

            <input
              type="text"
              placeholder="এরিয়া / ওয়ার্ড"
              value={formData.area}
              onChange={(e) =>
                setFormData({ ...formData, area: e.target.value })
              }
              required
              className="bg-transparent border border-white/60 rounded-lg px-4 py-3 text-white placeholder-white/50"
            />

            <textarea
              rows={5}
              placeholder="আপনার অভিযোগ/পরামর্শ লিখুন"
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
              required
              className="bg-transparent border border-white/60 rounded-lg px-4 py-3 text-white placeholder-white/50"
            />

            <label className="cursor-pointer bg-gray-200 text-black px-6 py-3 rounded-lg w-fit">
              Upload file
              <input
                type="file"
                accept="image/*,.pdf"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setFormData({ ...formData, file });
                  setFilePreview(file ? URL.createObjectURL(file) : null);
                }}
              />
            </label>

            {filePreview && (
              <Image
                src={filePreview}
                alt="preview"
                width={500}
                height={500}
                className="w-32 h-32 object-cover rounded-lg border border-white/50"
              />
            )}

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
        <div className="fixed inset-0 z-50 flex items-center bg-green-600 hover:text-black justify-center px-4">
          <div className="w-full max-w-2xl rounded-xl border border-white/20 bg-[#0b1f1f] p-10 text-center shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-green-700">
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

            <h2 className="mt-6 text-xl md:text-2xl font-semibold text-[#FDE047]">
              ধন্যবাদ! আপনার অভিযোগ/পরামর্শ আমরা গ্রহণ করেছি।
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-200">
              জনগণের সমস্যার দ্রুত সমাধানে সংশ্লিষ্ট বিভাগ ইতোমধ্যে পদক্ষেপ
              নিচ্ছে প্রয়োজন হলে আমরা আপনার সঙ্গে যোগাযোগ করব।
            </p>
          </div>
        </div>
      )}
    </>
  );
}
