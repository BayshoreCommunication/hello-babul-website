import Image from "next/image";

const cards = [
  {
    img: "/image/development/img1.png",
    title: "ড্রেনেজ সমস্যার দ্রুত সমাধান — ওয়ার্ড ৭",
    desc: "সমস্যা: দীর্ঘদিন জলাবদ্ধতা ও নোংরা পানি জমে থাকা। পদক্ষেপ: সঠিক ড্রেনেজ নির্মাণ ও দ্রুত পানি নিষ্কাশনের ব্যবস্থা। ফলাফল: এলাকার বাসিন্দারা স্বস্তি পেয়েছে।",
  },
  {
    img: "/image/development/img2.png",
    title: "রাস্তা সংস্কার ও আলো স্থাপন — ওয়ার্ড ৩",
    desc: "সমস্যা: ভাঙা রাস্তা ও অন্ধকার চলাচলে সমস্যা সৃষ্টি করতো। পদক্ষেপ: রাস্তা মেরামত ও নতুন স্ট্রিট লাইট স্থাপন। ফলাফল: নিরাপদ চলাচল নিশ্চিত।",
  },
  {
    img: "/image/development/img3.png",
    title: "স্বাস্থ্য/পরিচ্ছন্নতা অভিযান — ওয়ার্ড ১২",
    desc: "সমস্যা: অপরিচ্ছন্ন পরিবেশ ও স্বাস্থ্য ঝুঁকি। পদক্ষেপ: পরিষ্কার-পরিচ্ছন্নতা অভিযান ও চিকিৎসা সহায়তা। ফলাফল: জনস্বাস্থ্যের উন্নতি।",
  },
  {
    img: "/image/development/4.png",
    title: "বাঁশের সাঁকো নির্মাণ প্রকল্প",
    desc: "সদরপুর উপজেলার ঢেউখাল, আকজেরচর, ভাষাণচরসহ বিভিন্ন ইউনিয়নের সংযোগস্থলে বাঁশের সাঁকো নির্মাণ।",
  },
  {
    img: "/image/development/5.png",
    title: "বাঁশের সাঁকো নির্মাণ প্রকল্প",
    desc: "ভাঙ্গা উপজেলার ঘারুয়া ইউনিয়নের ৭নং ওয়ার্ডে বাঁশের সাঁকো নির্মাণ।",
  },
  {
    img: "/image/development/6.png",
    title: "বিনামূল্যে চিকিৎসা ও ঔষধ বিতরণ কার্যক্রম",
    desc: "ভাঙ্গা উপজেলার দালালগ্রামে একটি মেডিকেল ক্যাম্প গঠন করা হয় এবং প্রায় পাঁচ শতাধিক রোগীকে বিনামূল্যে চিকিৎসা ও ঔষধ সরবরাহ করা হয়।",
  },
];

export default function DevelopmentProgressSection() {
  return (
    <section className="w-full bg-[#FFFDEA] px-8 py-8 md:py-16">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-[40px] font-semibold text-gray-900 mb-10">
          সমৃদ্ধি ও অগ্রগতির যাত্রায় আমাদের ধারাবাহিক উন্নতি
        </h2>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-xl border  border-[#018635] bg-[#FFFDEA] overflow-hidden shadow-sm hover:shadow-md transition text-lg md:text-[24px]"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-green-700 font-semibold text-lg">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
