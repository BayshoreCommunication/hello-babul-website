export default function FooterInfoSection() {
  // English year → Bangla year (TypeScript safe)
  const toBanglaNumber = (number: number | string): string => {
    const banglaDigits = ["০","১","২","৩","৪","৫","৬","৭","৮","৯"];
    return number
      .toString()
      .split("")
      .map((digit) => banglaDigits[Number(digit)])
      .join("");
  };

  return (
    <section className="w-full bg-[#FBF9E8] px-8 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top line */}
        <div className="w-full h-px bg-gray-300 mb-10" />

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-lg text-[20px] mb-3 border-b-2 border-black inline-block">
              গুরুত্বপূর্ণ তথ্য
            </h3>
            <p className="text-sm leading-relaxed text-[20px] max-w-xl">
              আপনার ব্যক্তিগত তথ্য সম্পূর্ণ গোপন রাখা হবে এবং কোনোভাবেই তৃতীয়
              পক্ষের সঙ্গে শেয়ার করা হবে না।
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-lg text-[20px] mb-3 border-b-2 border-black inline-block">
              আমাদের প্রতিশ্রুতি
            </h3>
            <p className="text-sm leading-relaxed text-[20px] max-w-xl">
              জনগণের সেবা ও অধিকার রক্ষাই আমাদের অঙ্গীকার।
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-lg md:text-[20px] mb-3 border-b-2 border-black inline-block">
              পরিকল্পনা
            </h3>
            <p className="text-sm leading-relaxed text-[20px] max-w-xl">
              এই ওয়েবসাইটটি সচেতনতা ও সেবামূলক উদ্দেশ্যে পরিচালিত।
              কোনো ধরনের প্রচারণার উদ্দেশ্যে তথ্য বিক্রি করে ব্যবহার করা হবে না।
            </p>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center text-sm md:text-[20px] text-gray-700">
          <span className="text-[#018635]">
            © {toBanglaNumber(new Date().getFullYear())}
          </span>
          {" "}— আপনার নাম | সর্বস্ব সংরক্ষিত
        </p>
      </div>
    </section>
  );
}
