export default function ImportantComplaintSection() {
  return (
    <section className="w-full bg-[#FFFDEA] px-8 py-8 md:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-2xl border border-orange-300 bg-[#FDF5E2] px-6 py-10 md:px-12 md:py-14 text-center">
          
          {/* Title */}
          <h2 className="text-2xl md:text-[40px] font-semibold text-gray-900">
            জরুরি অভিযোগ
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-sm md:text-[20px] text-gray-700">
            জরুরি অভিযোগের জন্য নিচের বাটনে ক্লিক করুন
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:text-[20px]">
            <button className="rounded-md bg-[#D13212] px-6 py-3 text-white font-medium hover:bg-orange-700 transition">
              নারী নির্যাতন
            </button>

            <button className="rounded-md bg-[#D13212] px-6 py-3 text-white font-medium hover:bg-orange-700 transition">
              অসুস্থ রোগী
            </button>

            <button className="rounded-md bg-[#D13212] px-6 py-3 text-white font-medium hover:bg-orange-700 transition">
              রাতের জরুরি সমস্যা
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
