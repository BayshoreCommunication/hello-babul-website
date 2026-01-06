"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

const opinions = [
  {
    id: 1,
    desc: "ভোগান্তি ও দুর্নীতি প্রতিরোধে আমরা প্রতিশ্রুতিবদ্ধ। সেবা সহজ, দ্রুত ও স্বচ্ছ করার জন্য সক্রিয়ভাবে কাজ করবো আপনার সমস্যা সমাধান আমাদের অগ্রাধিকার",
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
  return (
    <section className="w-full bg-[#F4F4F4] px-8 py-8 md:py-16">
      <div className="max-w-[1640px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-[40px] font-bold text-gray-900">
            আপনার মতামত নির্বাচন করুন
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-[20px]">
            আপনার মতামত দিন — পরিচ্ছন্ন রাজনীতি আমাদের লক্ষ্য
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          navigation
          autoplay={{
            delay: 3000,          // 3 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="!pb-4"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {opinions.map((item) => (
            <SwiperSlide key={item.id} className="flex">
              <div className="w-full h-full min-h-[270px] border border-gray-200 bg-white rounded-md p-6 flex flex-col text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <Image
                    src={item.icon}
                    alt={item.btn}
                    width={48}
                    height={48}
                  />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Button */}
                <button className="mt-6 w-full bg-[#31A3EA] text-white py-2 text-sm md:text-[20px] font-semibold rounded">
                  {item.btn}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
