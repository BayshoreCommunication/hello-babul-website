export default function Home() {
  return (
    <main className="bg-[#FFFBEA] px-8 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">

        {/* ===== Steps Section ===== */}
        <section>
          <h2 className="text-3xl md:text-[40px] font-bold text-center text-gray-800">
            আমাদের কাজের ধাপসমূহ
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "আপনার অভিযোগ বা মতামত সর্বোচ্চ গুরুত্ব দিয়ে গ্রহণ করা হয়",
              "টিম তা যাচাই করে সমস্যার মূল কারণ নির্ধারণ করে",
              "দ্রুত সংশ্লিষ্ট বিভাগে পাঠিয়ে সমাধানের প্রক্রিয়া শুরু করা হয়",
              "পুরো কার্যক্রম নিয়মিত তদারকি করা হয় যাতে দেরি না হয়",
              "প্রতিটি ধাপের অগ্রগতি আপনাকে স্বচ্ছভাবে জানানো হয়",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold">
                  ✓
                </div>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQ Section ===== */}
        <section className="mt-16 bg-[#F0F6DA] rounded-xl p-6 md:p-10">
          <h3 className="text-2xl md:text-[40px] font-bold text-center text-gray-800 mb-8">
            অভিযোগ সম্পর্কিত সাধারণ জিজ্ঞাসা
          </h3>

          <div className="space-y-6 text-gray-700 ">
            
            <div>
              <h4 className="font-semibold text-[#018635] text-lg md:text-[24px]">
                ১. আমার অভিযোগ কি গোপন থাকবে?
              </h4>
              <p className="mt-2 text-[#018635]">
                অবশ্যই। জনগণের নিরাপত্তা ও ব্যক্তিগত গোপনীয়তা রক্ষা করা আমাদের
                সর্বোচ্চ অগ্রাধিকার। আপনার অভিযোগ শুধুমাত্র অনুমোদিত সংশ্লিষ্ট
                কর্মকর্তারা দেখতে পাবেন এবং তা সম্পূর্ণ নিরাপদভাবে সংরক্ষিত হবে।
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#018635] text-lg md:text-[24px]">
                ২. কত সময়ের মধ্যে আমি উত্তর পাবো?
              </h4>
              <p className="mt-2 text-[#018635]">
                সাধারণত অভিযোগ জমা দেওয়ার ৪৮ ঘণ্টার মধ্যে আমরা উত্তর বা অগ্রগতির
                আপডেট প্রদান করি।
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#018635] text-lg md:text-[24px]">
                ৩. ছবি না দিলে অভিযোগ গ্রহণ হবে?
              </h4>
              <p className="mt-2 text-[#018635]">
                হ্যাঁ, ছবি ছাড়াও অভিযোগ গ্রহণ করা হবে। তবে ছবি দিলে সমস্যাটি দ্রুত
                সমাধান করতে সহায়তা হয়।
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#018635] text-lg md:text-[24px]">
                ৪. যোগাযোগ করলে কে ফোন করবে?
              </h4>
              <p className="mt-2 text-[#018635]">
                আপনার অভিযোগের অগ্রগতি বিষয়ে যোগাযোগ করবেন আমাদের অনুমোদিত
                কর্মকর্তারা, যারা জনগণের স্বার্থ রক্ষায় দায়িত্বপ্রাপ্ত।
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#018635] text-lg md:text-[24px]">
                ৫. কোন ধরনের অভিযোগ জমা দেওয়া যায়?
              </h4>
              <p className="mt-2 text-[#018635]">
                নাগরিক সমস্যা, পরিবেশ দূষণ, অবকাঠামোগত সমস্যা, সামাজিক সহিংসতা,
                প্রশাসনিক অভিযোগসহ সকল ধরণের অভিযোগ এখানে জমা দেওয়া যায়।
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
