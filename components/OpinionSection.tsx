"use client";

import { useState } from "react";

const options = [
  "স্কুল বানানোর দাবি",
  "রাস্তা সংস্কার",
  "কৃষকের সহায়তা",
  "বাজার ব্যবস্থা উন্নয়ন",
  "যুবদের খেলাধুলা / IT প্রশিক্ষণ",
  "আমার মতামত",
];

export default function OpinionSection() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return alert("অনুগ্রহ করে একটি অপশন নির্বাচন করুন");
    console.log("Selected:", selected);
  };

  return (
    <section className="w-full bg-[#F0F6DA] px-8 py-8 md:py-16">
      <div className="mx-auto max-w-[1000px] text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-[40px] font-semibold text-gray-900 leading-none">
          আপনার উন্নয়ন আইডিয়া দিন
        </h2>

        <p className="mt-4 text-sm md:text-[20px] text-gray-700 leading-none">
          আপনার মতামত সমাজ পরিবর্তনে সবচেয়ে গুরুত্বপূর্ণ
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10">
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
                  {/* Hidden Radio */}
                  <input
                    type="radio"
                    name="opinion"
                    value={option}
                    checked={isActive}
                    onChange={() => setSelected(option)}
                    className="hidden"
                  />

                  {/* Custom Radio */}
                  <span
                    className={`h-5 w-5 rounded-full border-2 flex items-center justify-center
                      ${
                        isActive
                          ? "border-green-700"
                          : "border-green-600"
                      }
                    `}
                  >
                    {isActive && (
                      <span className="h-3 w-3 rounded-full bg-green-700" />
                    )}
                  </span>

                  {/* Text */}
                  <span className="text-[#018635] font-medium">
                    {option}
                  </span>
                </label>
              );
            })}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-10 text-base md:text-[20px] inline-flex items-center justify-center rounded-md bg-[#FED525] px-10 py-3 font-semibold text-black hover:bg-yellow-500 transition"         
          >
            সাবমিট করুন
          </button>
        </form>
      </div>
    </section>
  );
}
