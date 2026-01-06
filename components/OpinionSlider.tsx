"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const opinions = [
  {
    id: 1,
    desc: "ভোগান্তি ও দুর্নীতি প্রতিরোধে আমরা প্রতিশ্রুতিবদ্ধ।ভোগান্তি ও দুর্নীতি প্রতিরোধে আমরা প্রতিশ্রুতিবদ্ধ। সেবা সহজ, দ্রুত ও স্বচ্ছ করার জন্য সক্রিয়ভাবে কাজ করবো আপনার সমস্যা সমাধান আমাদের অগ্রাধিকার",
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
    desc: "স্বাস্থ্যসেবা ও পরিচ্ছন্নতা নিশ্চিত করা রাষ্ট্রের মৌলিক দায়িত্ব — জনগণের প্রত্যাশা পূরণে আপনার জানানোর সঙ্গে সঙ্গেই ব্যবস্থা নেওয়া হবে",
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
    desc: "পরিবার ও সামাজিক সমস্যার সমাধানে আমরা সক্রিয়। সকলের জন্য সুস্থ, শান্তিপূর্ণ ও সমন্বিত সমাজ গড়তে আপনার পাশে থাকবো, সমাধান নিশ্চিত করবো",
    icon: "/image/opinion/img7.png",
    btn: "পরিবার/সামাজিক সমস্যা",
  },
  {
    id: 8,
    desc: "ব্যক্তিগত ও গোপন অভিযোগ নিরাপদে গ্রহণ করা হবে। আমরা সম্পূর্ণ গোপনীয়তা বজায় রেখে দ্রুত, সঠিক সমাধান নিশ্চিত করবো, যাতে আপনার বিশ্বাস অটুট থাকে",
    icon: "/image/opinion/img8.png",
    btn: "ব্যক্তিগত গোপন অভিযোগ",
  },
];

export default function OpinionSlider() {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("");

  return (
    <>
      {/* ================= SLIDER SECTION ================= */}
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
              <SwiperSlide key={item.id} className="flex">
                <div className="w-full bg-white h-[280px] border rounded-md p-6 flex flex-col text-center">
                  <Image
                    src={item.icon}
                    alt={item.btn}
                    width={48}
                    height={48}
                    className="mx-auto mb-4"
                  />

                  <p className="text-sm text-gray-600 flex-grow">
                    {item.desc}
                  </p>

                  <button
                    onClick={() => {
                      setLabel(item.btn);
                      setOpen(true);
                    }}
                    className="mt-6 bg-[#31A3EA] text-white py-2 font-semibold rounded"
                  >
                    {item.btn}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pagination color */}
        <style jsx global>{`
          .opinion-swiper .swiper-pagination-bullet {
            background: #31a3ea;
            opacity: 0.4;
          }
          .opinion-swiper .swiper-pagination-bullet-active {
            opacity: 1;
          }
        `}</style>
      </section>

      {/* ================= MODAL ================= */}
      {open && (
        <OpinionModal
          label={label}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

/* ================= MODAL COMPONENT ================= */

function OpinionModal({
  label,
  onClose,
}: {
  label: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-5xl rounded-2xl bg-[#0b1f1f] relative overflow-hidden">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          ✕
        </button>

        {/* Header */}
        <div className="bg-green-700 py-4 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-yellow-300">
            আপনার মতামত
          </h2>
        </div>

        {/* Form */}
        <form className="p-6 md:p-10 flex flex-col gap-6 text-white">
          {/* Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <label className="md:w-1/4">পূর্ণ নাম</label>
            <input className="md:flex-1 bg-transparent border rounded-lg px-4 py-3" />
          </div>

          {/* Mobile */}
          <div className="flex flex-col md:flex-row gap-4">
            <label className="md:w-1/4">মোবাইল নম্বর</label>
            <input className="md:flex-1 bg-transparent border rounded-lg px-4 py-3" />
          </div>

          {/* Area */}
          <div className="flex flex-col md:flex-row gap-4">
            <label className="md:w-1/4">এরিয়া / ওয়ার্ড</label>
            <input className="md:flex-1 bg-transparent border rounded-lg px-4 py-3" />
          </div>

          {/* Dynamic Textarea */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <label className="md:w-1/4 pt-2">{label}</label>
            <textarea
              rows={6}
              placeholder={`${label} সম্পর্কে লিখুন`}
              className="md:flex-1 bg-transparent border rounded-lg px-4 py-3 resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-6">
            <button className="bg-yellow-400 text-black font-semibold px-10 py-3 rounded-xl">
              জমা দিন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
