"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    animateCounter(1267, setCount1, 1500);
    animateCounter(92, setCount2, 1500);
    animateCounter(48, setCount3, 1500);
  }, []);

  const animateCounter = (
    end: number,
    setValue: React.Dispatch<React.SetStateAction<number>>,
    duration: number
  ) => {
    let start = 0;
    const step = end / (duration / 16);

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setValue(end);
        clearInterval(interval);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
  };

  return (
    <section className="bg-green-700 px-8 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          {/* Stat 1 */}
          <div>
            <h2 className="text-[#FED525] text-4xl md:text-5xl font-bold">
              {count1.toLocaleString("bn-BD")}+
            </h2>
            <p className="mt-4   text-white text-sm md:text-[20px] leading-tight">
              নাগরিক মতামত গ্রহণ ও <br /> নিবন্ধিত সম্পন্ন
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <h2 className="text-[#FED525] text-4xl md:text-5xl font-bold">
              {count2.toLocaleString("bn-BD")}%
            </h2>
            <p className="mt-4   text-white text-sm md:text-[20px] leading-tight">
              প্রাপ্ত সমস্যাগুলো সমাধানের <br /> প্রক্রিয়ায় অগ্রসরমান
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <h2 className="text-[#FED525] text-4xl md:text-5xl font-bold">
              {count3.toLocaleString("bn-BD")}
            </h2>
            <p className="mt-4 text-white text-sm md:text-[20px] leading-tight">
              ঘন্টার মধ্যে রেসপন্স
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
