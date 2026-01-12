import Image from "next/image";

const cards = [
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
