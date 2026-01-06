export default function Team() {
  const team = [
    {
      name: "মোঃ আরিফুল ইসলাম",
      role: "কমিউনিটি কো-অর্ডিনেটর",
      desc: "স্বেচ্ছাসেবী কার্যক্রম পরিচালনা ও জনগণের সমস্যা দ্রুত সমাধানে কাজ করেন",
      img: "/image/team/img1.png",
    },
    {
      name: "সাবিনা আক্তার",
      role: "স্বাস্থ্য কর্মী",
      desc: "স্বাস্থ্য ও পরিচ্ছন্নতা সংক্রান্ত অভিযোগ যাচাই ও উদ্যোগ নেন",
      img: "/image/team/img2.png",
    },
    {
      name: "মোঃ মাসুদুল ইসলাম",
      role: "নিরাপত্তা/তথ্য সেবা কর্মী",
      desc: "এলাকার নিরাপত্তা ও জরুরি পরিস্থিতিতে সহযোগিতামূলক ভূমিকা পালন করেন",
      img: "/image/team/img3.png",
    },
    {
      name: "মাহমুদ হাসান",
      role: "অভিযোগ ডেস্ক প্রধান",
      desc: "নাগরিক অভিযোগ গ্রহণ, ফলো-আপ ও সমাধান নিশ্চিত করেন",
      img: "/image/team/img4.png",
    },
  ];

  return (
    <main className="bg-[#FFFDEA] px-8 py-8 md:py-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          আমাদের সাপোর্ট টিম
        </h2>
        <p className="mt-3 text-gray-600">
          আমাদের সাপোর্ট টিম জনগণের সেবা নিশ্চিত করতে আমাদের নিবেদিত কর্মীরা সর্বদা প্রস্তুত
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-lg overflow-hidden bg-[#FFFDEA]"
            >
              <img
                src={member.img}
                alt={member.name}
                className="p-8 pb-0 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  {member.name}
                </h3>
              </div>
              <div className="bg-[#018635] text-white p-4 h-full">
                <p className="font-semibold text-base md:text-[20px]">{member.role}</p>
                <p className="text-sm md:text-[12px] mt-2">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 text-[28px] md:text-[40px]">
            আমাদের স্বেচ্ছাসেবক হিসেবে যোগ দিন
          </h3>
          <p className="mt-4 text-gray-600 text-base md:text-[20px] max-w-3xl mx-auto">
            আমাদের স্বেচ্ছাসেবক হিসেবে যোগ দিন, এলাকার উন্নয়ন ও সেবায় অবদান রাখুন।
            নিবন্ধন করে আজই আমাদের টিমের একজন হয়ে উঠুন।
          </p>

          <button className="mt-6 bg-[#FED525] hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition text-base md:text-[20px]">
            ফর্মটি সঠিকভাবে পূরণ করুন
          </button>
        </div>
      </div>
    </main>
  );
}
