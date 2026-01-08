"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import CustomModal from "./CustomModal";
import toast, { Toaster } from "react-hot-toast";

const opinions = [
  {
    id: 1,
    desc: "ভোগান্তি ও দুর্নীতি প্রতিরোধে আমরা প্রতিশ্রুতিবদ্ধ। সেবা সহজ, দ্রুত ও স্বচ্ছ করার জন্য সক্রিয়ভাবে কাজ করবো।",
    icon: "/image/opinion/img1.png",
    btn: "ভোগান্তি/ দুর্নীতি",
  },
  {
    id: 2,
    desc: "ভাঙা রাস্তা, অসম্পূর্ণ ব্রিজ, জলাবদ্ধতা, রক্ষণাবেক্ষণের অভাব ও যোগাযোগব্যবস্থার দুর্বলতা মানুষের চলাচল, ব্যবসা-বাণিজ্য ও জরুরি সেবায় বড় ধরনের বাধা সৃষ্টি করছে",
    icon: "/image/opinion/img2.png",
    btn: "রাস্তা/ব্রীজ সমস্যা",
  },
  {
    id: 3,
    desc: "স্বাস্থ্যসেবা ও পরিচ্ছন্নতা নিশ্চিত করা রাষ্ট্রের মৌলিক দায়িত্ব — জনগণের প্রত্যাশা পূরণে ব্যবস্থা নেওয়া হবে",
    icon: "/image/opinion/img3.png",
    btn: "স্বাস্থ্যসেবা",
  },
  {
    id: 4,
    desc: "স্কুল–কলেজে মানসম্মত শিক্ষা ও প্রয়োজনীয় সুবিধা নিশ্চিত করা আমাদের অঙ্গীকার",
    icon: "/image/opinion/img4.png",
    btn: "স্কুল/কলেজ",
  },
  {
    id: 5,
    desc: "কৃষকদের ন্যায্য দাম, আধুনিক প্রযুক্তি, মানসম্মত বীজ–সার, সেচ সুবিধা ও স্বচ্ছ বাজার ব্যবস্থা নিশ্চিত করে কৃষি খাতের মূল সমস্যাগুলো সমাধানের প্রতিশ্রুতি দিচ্ছি",
    icon: "/image/opinion/img5.png",
    btn: "কৃষি সমস্যা",
  },
  {
    id: 6,
    desc: "দক্ষতা উন্নয়ন, উদ্যোক্তা সহায়তা, আইটি প্রশিক্ষণ, স্টার্টআপ ফান্ড ও স্থানীয় শিল্পে কর্মসংস্থান সৃষ্টি করে যুবকদের জন্য টেকসই চাকরি ও আয়ের সুযোগ নিশ্চিত করবো",
    icon: "/image/opinion/img6.png",
    btn: "যুব কর্মসংস্থান",
  },
  {
    id: 7,
    desc: "পরিবার ও সামাজিক সমস্যার সমাধানে আমরা সক্রিয়। সকলের জন্য সুস্থ, শান্তিপূর্ণ ও সমন্বিত সমাজ গড়তে আপনার পাশে থাকবো",
    icon: "/image/opinion/img7.png",
    btn: "পরিবার/সামাজিক সমস্যা",
  },
  {
    id: 8,
    desc: "ব্যক্তিগত ও গোপন অভিযোগ নিরাপদে গ্রহণ করা হবে। আমরা সম্পূর্ণ গোপনীয়তা বজায় রেখে দ্রুত, সঠিক সমাধান নিশ্চিত করবো",
    icon: "/image/opinion/img8.png",
    btn: "ব্যক্তিগত গোপন অভিযোগ",
  },
];

export default function OpinionSlider() {
  const [open, setOpen] = useState(false);
  const [typeOfOpinion, setTypeOfOpinion] = useState(""); // fixed name
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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

    if (!formData.fullname.trim()) return toast.error("পূর্ণ নাম লিখুন");
    if (!formData.mobile.trim()) return toast.error("মোবাইল নম্বর লিখুন");
    if (!formData.area.trim()) return toast.error("এরিয়া/ওয়ার্ড লিখুন");
    if (!typeOfOpinion.trim()) return toast.error("আপনার মতামত নির্বাচন করুন");
    if (!formData.comment.trim()) return toast.error("মন্তব্য লিখুন");

    setLoading(true);
    try {
      const res = await fetch(
        "https://hello-babul-backend.vercel.app/api/your-opinions",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, typeOfOpinion }),
        }
      );

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "সমস্যা হয়েছে");

      setFormData({ fullname: "", mobile: "", area: "", comment: "" });
      setTypeOfOpinion(""); // reset
      setOpen(false);
      setSuccessOpen(true);
    } catch (err: any) {
      toast.error(err.message || "সমস্যা হয়েছে, আবার চেষ্টা করুন");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      {/* ================= SLIDER ================= */}
      <section className="w-full bg-[#F4F4F4] px-8 py-8 md:py-16">
        <div className="max-w-[1640px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-[40px] font-bold text-black">
              আপনার মতামত নির্বাচন করুন
            </h2>
            <p className="text-gray-600 mt-4 md:text-[20px]">
              আপনার মতামত দিন — পরিচ্ছন্ন রাজনীতি আমাদের লক্ষ্য
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="opinion-swiper !pb-10"
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {opinions.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="w-full bg-white h-[280px] border rounded-md p-6 flex flex-col text-center">
                  <Image
                    src={item.icon}
                    alt={item.btn}
                    width={48}
                    height={48}
                    className="mx-auto mb-4"
                  />
                  <p className="text-sm text-gray-600 flex-grow">{item.desc}</p>
                  <button
                    onClick={() => {
                      setTypeOfOpinion(item.btn); // set typeOfOpinion
                      setOpen(true);
                    }}
                    className="mt-6 py-2 font-semibold rounded text-white bg-[#31A3EA] hover:bg-blue-700 transition"
                  >
                    {item.btn}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= FORM MODAL ================= */}
      {open && (
        <CustomModal
          isOpen={open}
          onClose={() => setOpen(false)}
          title={`আপনার মতামত: ${typeOfOpinion}`}
        >
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-10 flex flex-col gap-6 text-white"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="md:w-1/4 text-lg font-medium">পূর্ণ নাম</label>
              <input
                type="text"
                value={formData.fullname}
                onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
                className="md:flex-1 bg-transparent border border-white/60 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="md:w-1/4 text-lg font-medium">
                মোবাইল নম্বর
              </label>
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                className="md:flex-1 bg-transparent border border-white/60 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="md:w-1/4 text-lg font-medium">
                এরিয়া / ওয়ার্ড
              </label>
              <input
                type="text"
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
                className="md:flex-1 bg-transparent border border-white/60 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Comment with label ABOVE textarea */}

            <div className="flex flex-col md:flex-row gap-4 items-start">
              <label className="md:w-1/4 text-lg font-medium">
                {typeOfOpinion}
              </label>

              <textarea
                rows={6}
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
                placeholder={`${typeOfOpinion} সম্পর্কে লিখুন`}
                className="md:flex-1 w-full bg-transparent border border-white/60 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

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
