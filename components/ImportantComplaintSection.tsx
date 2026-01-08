"use client";

import { useState, useEffect } from "react";
import CustomModal from "./CustomModal";
import toast, { Toaster } from "react-hot-toast";

export default function ImportantComplaintSection() {
  const [open, setOpen] = useState(false);
  const [typeOfSuggest, setTypeOfSuggest] = useState(""); // type of complaint
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filePreview, setFilePreview] = useState<string | null>(null); // file preview

  const [formData, setFormData] = useState({
    fullname: "",
    mobile: "",
    area: "",
    comment: "",
    file: null as File | null,
    anonymous: false,
  });

  // Auto-close success popup after 3 seconds
  useEffect(() => {
    if (successOpen) {
      const timer = setTimeout(() => setSuccessOpen(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [successOpen]);

  const handleOpen = (text: string) => {
    setTypeOfSuggest(text);
    setOpen(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, file });

    // Preview for images and videos
    if (file) {
      const url = URL.createObjectURL(file);
      setFilePreview(url);
    } else {
      setFilePreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.anonymous && !formData.fullname.trim())
      return toast.error("পূর্ণ নাম লিখুন");
    if (!formData.anonymous && !formData.mobile.trim())
      return toast.error("মোবাইল নম্বর লিখুন");
    if (!formData.area.trim()) return toast.error("এরিয়া/ওয়ার্ড লিখুন");
    if (!typeOfSuggest.trim()) return toast.error("আপনার অভিযোগ নির্বাচন করুন");
    if (!formData.comment.trim()) return toast.error("মন্তব্য লিখুন");

    setLoading(true);

    try {
      const data = new FormData();
      data.append(
        "fullname",
        formData.anonymous ? "Anonymous" : formData.fullname
      );
      data.append("mobile", formData.anonymous ? "Anonymous" : formData.mobile);
      data.append("area", formData.area);
      data.append("comment", formData.comment);
      data.append("typeOfSuggest", typeOfSuggest);
      if (formData.file) data.append("media", formData.file);

      const res = await fetch(
        "https://hello-babul-backend.vercel.app/api/your-suggests",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "সমস্যা হয়েছে");

      // Reset form
      setFormData({
        fullname: "",
        mobile: "",
        area: "",
        comment: "",
        file: null,
        anonymous: false,
      });
      setFilePreview(null);
      setTypeOfSuggest("");
      setOpen(false);
      setSuccessOpen(true);
      toast.success("আপনার আবেদন সফলভাবে জমা হয়েছে");
    } catch (err: any) {
      toast.error(err.message || "সমস্যা হয়েছে, আবার চেষ্টা করুন");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      {/* ================= IMPORTANT COMPLAINT SECTION ================= */}
      <section className="w-full bg-[#FFFDEA] px-8 py-8 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-2xl border border-orange-300 bg-[#FDF5E2] px-6 py-10 md:px-12 md:py-14 text-center">
            <h2 className="text-2xl md:text-[40px] font-semibold text-gray-900">
              জরুরি অভিযোগ
            </h2>
            <p className="mt-2 text-sm md:text-[20px] text-gray-700">
              জরুরি অভিযোগের জন্য নিচের বাটনে ক্লিক করুন
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:text-[20px]">
              {["নারী নির্যাতন", "অসুস্থ রোগী", "রাতের জরুরি সমস্যা"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => handleOpen(item)}
                    className="rounded-md bg-[#D13212] px-6 py-3 text-white font-medium hover:bg-orange-700 transition"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FORM MODAL ================= */}
      {open && (
        <CustomModal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="আপনার অভিযোগ"
        >
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-10 flex flex-col gap-6 text-white"
          >
            {/* Full Name */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="w-full md:w-1/4 text-lg font-medium">
                পূর্ণ নাম
              </label>
              <input
                type="text"
                value={formData.fullname}
                onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
                disabled={formData.anonymous}
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
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                disabled={formData.anonymous}
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
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
                className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Comment */}
            {/* Comment */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <label className="w-full md:w-1/4 text-lg font-medium">
                {typeOfSuggest}
              </label>

              <textarea
                rows={6}
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
                placeholder={`${typeOfSuggest} সংক্রান্ত বিস্তারিত লিখুন`}
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
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*,video/*"
                />
              </label>
            </div>

            {/* File Preview */}
            {filePreview && (
              <div className="mt-2 md:ml-1 text-left">
                {formData.file?.type.startsWith("image/") && (
                  <img
                    src={filePreview}
                    alt="preview"
                    className="mt-1 w-32 h-32 object-cover rounded-lg border border-white/50"
                  />
                )}
                {formData.file?.type.startsWith("video/") && (
                  <video
                    src={filePreview}
                    className="mt-1 w-64 h-40 rounded-lg border border-white/50"
                    controls
                  />
                )}
              </div>
            )}

            {/* Anonymous */}
            <div className="flex items-center gap-3 mt-2">
              <input
                type="checkbox"
                checked={formData.anonymous}
                onChange={(e) =>
                  setFormData({ ...formData, anonymous: e.target.checked })
                }
              />
              <span className="text-white">নাম গোপন রেখে আবেদন</span>
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
