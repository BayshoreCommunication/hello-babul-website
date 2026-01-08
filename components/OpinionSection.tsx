"use client";

import { useState, useEffect } from "react";
import CustomModal from "./CustomModal";
import toast, { Toaster } from "react-hot-toast";

const options = [
  "স্কুল বানানোর দাবি",
  "রাস্তা সংস্কার",
  "কৃষকের সহায়তা",
  "বাজার ব্যবস্থা উন্নয়ন",
  "যুবদের খেলাধুলা / IT প্রশিক্ষণ",
  "আমার মতামত",
  "মাদক নির্মূল",
  "নদী ভাঙ্গন",
];

export default function OpinionSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    mobile: "",
    area: "",
    comment: "",
  });

  useEffect(() => {
    if (successOpen) {
      const timer = setTimeout(() => setSuccessOpen(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [successOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.fullname.trim()) return toast.error("পূর্ণ নাম লিখুন");
    if (!formData.mobile.trim()) return toast.error("মোবাইল নম্বর লিখুন");
    if (!formData.area.trim()) return toast.error("এরিয়া/ওয়ার্ড লিখুন");
    if (!selected) return toast.error("অনুগ্রহ করে একটি অপশন নির্বাচন করুন");
    if (!formData.comment.trim()) return toast.error("মন্তব্য লিখুন");

    setLoading(true);
    try {
      const res = await fetch(
        "https://hello-babul-backend.vercel.app/api/development-ideas",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, typeOfIdea: selected }),
        }
      );

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "সমস্যা হয়েছে");

      setFormData({ fullname: "", mobile: "", area: "", comment: "" });
      setSelected(null);
      setOpen(false);
      setSuccessOpen(true);
      toast.success("আপনার মতামত সফলভাবে জমা হয়েছে");
    } catch (err: any) {
      toast.error(err.message || "সমস্যা হয়েছে, আবার চেষ্টা করুন");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      {/* ================= OPINION SECTION ================= */}
      <section className="w-full bg-[#F0F6DA] px-8 py-8 md:py-16">
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="text-2xl md:text-[40px] font-semibold text-gray-900">
            আপনার উন্নয়ন আইডিয়া দিন
          </h2>

          <p className="mt-4 text-sm md:text-[20px] text-gray-700">
            আপনার মতামত সমাজ পরিবর্তনে সবচেয়ে গুরুত্বপূর্ণ
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!selected) {
                toast.error("অনুগ্রহ করে একটি অপশন নির্বাচন করুন!");
                return;
              }
              setOpen(true);
            }}
            className="mt-10"
          >
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
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-10 flex flex-col gap-6 text-white"
          >
            {/* Full Name */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="md:w-1/4 text-lg">পূর্ণ নাম</label>
              <input
                type="text"
                value={formData.fullname}
                onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Mobile */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="md:w-1/4 text-lg">মোবাইল নম্বর</label>
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Area */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="md:w-1/4 text-lg">এরিয়া / ওয়ার্ড</label>
              <input
                type="text"
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Comment */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <label className="md:w-1/4 text-lg pt-2">{selected}</label>
              <textarea
                rows={6}
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
                placeholder={`${selected} সম্পর্কে বিস্তারিত লিখুন`}
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={loading}
                className="bg-yellow-400 text-black font-semibold px-10 py-3 rounded-xl hover:bg-yellow-300 transition"
              >
                {loading ? "জমা হচ্ছে..." : "জমা দিন"}
              </button>
            </div>
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
