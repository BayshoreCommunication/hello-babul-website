import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full">
      {/* Top section with image and greeting */}
      <div className="bg-[#D13212] text-white">
        <div className="max-w-[1640px] mx-auto flex flex-col md:flex-row items-center justify-evenly pt-8 pb-8 md:pb-0 md:pt-16 px-8  gap-6">
          {/* Left: Image */}
          <div className="flex-shrink-0">
            <Image
              src="/image/hero/babul.png" // replace with your image path
              alt="Babul"
              width={1000}
              height={800}
              className="rounded-lg object-cover w-[500px] h-auto"
            />
          </div>

          {/* Right: Text */}
          <div className="flex justify-center flex-col items-center text-center">
            <h1 className="text-[48px] md:text-[64px] font-bold flex items-center">
                <span>
                    <Image src="/image/hero/icon.png" alt="alt" width={1000} height={800} className="w-12"/>
                </span>
              <span className="text-white">Hello Babul</span>
            </h1>
            <p className="mt-4 text-lg md:text-[48px] max-w-2xl leading-none">
              আপনার কথা—সরাসরি বাবুল ভাইয়ের কাছে
            </p>
            <p className="mt-4 text-md md:text-[32px] text-[#FED525]">
              -- শহিদুল ইসলাম বাবুল
            </p>
          </div>
        </div>
      </div>

      {/* Bottom green section */}
      <div className="bg-[#018635]  text-white text-center px-6 py-8 md:py-12">
        <p className="text-lg md:text-[40px] leading-none max-w-6xl mx-auto text-[#FED525]">
          আপনার মতামত সরাসরি আমার টিমের কাছে পৌঁছাবে, প্রয়োজন হলে আমরা যোগাযোগ করব
        </p>
        <button className="mt-6 bg-[#FED525] text-black text-base md:text-[20px] font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition">
          অভিযোগ/পরামর্শ জানান
        </button>
      </div>
    </section>
  );
}
