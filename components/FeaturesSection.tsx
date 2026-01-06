import { ShieldCheck, Clock, Shield } from "lucide-react";
import Image from "next/image";
const features = [
  {
    id: 1,
    icon: <Image src="image/feature/img1.png" alt="alt" width={1000} height={800} className="w-16"/>,
    color: "border-sky-400 text-sky-500",
    text: "নিরাপদ, পরিষ্কার ও আধুনিক দেশ গঠনে প্রতিশ্রুতিবদ্ধ নেতৃত্ব",
  },
  {
    id: 2,
    icon: <Image src="image/feature/img2.png" alt="alt" width={1000} height={800} className="w-16"/>,
    color: "border-red-400 text-red-500",
    text: "দ্রুত সমস্যা সমাধান ও প্রতিটি নাগরিকের মতামতের সর্বোচ্চ সম্মান",
  },
  {
    id: 3,
    icon: <Image src="image/feature/img3.png" alt="alt" width={1000} height={800} className="w-16"/>,
    color: "border-indigo-500 text-indigo-600",
    text: "স্বচ্ছ, জবাবদিহিমূলক ও দায়িত্বশীল প্রশাসন প্রতিষ্ঠার অঙ্গীকার",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-[#FBF8E9]">
      <div className="max-w-[1640px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {features.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-gray-800 text-base md:text-[24px] leading-relaxed max-w-2xl">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
