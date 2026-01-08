"use client";

import { useState } from "react";
import CustomModal from "./CustomModal";

export default function Team() {
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false); // success popup
  const [formData, setFormData] = useState({
    fullname: "",
    fathername: "",
    mothername: "",
    dateofbirth: "",
    mobile: "",
    area: "",
    education: "",
    agree: false,
    media: null,
  });
  const [loading, setLoading] = useState(false);

  const team = [
    { name: "মোঃ আরিফুল ইসলাম", role: "কমিউনিটি কো-অর্ডিনেটর", desc: "স্বেচ্ছাসেবী কার্যক্রম পরিচালনা ও জনগণের সমস্যা দ্রুত সমাধানে কাজ করেন", img: "/image/team/img1.png" },
    { name: "সাবিনা আক্তার", role: "স্বাস্থ্য কর্মী", desc: "স্বাস্থ্য ও পরিচ্ছন্নতা সংক্রান্ত অভিযোগ যাচাই ও উদ্যোগ নেন", img: "/image/team/img2.png" },
    { name: "মোঃ মাসুদুল ইসলাম", role: "নিরাপত্তা/তথ্য সেবা কর্মী", desc: "এলাকার নিরাপত্তা ও জরুরি পরিস্থিতিতে সহযোগিতামূলক ভূমিকা পালন করেন", img: "/image/team/img3.png" },
    { name: "মাহমুদ হাসান", role: "অভিযোগ ডেস্ক প্রধান", desc: "নাগরিক অভিযোগ গ্রহণ, ফলো-আপ ও সমাধান নিশ্চিত করেন", img: "/image/team/img4.png" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key]) data.append(key, formData[key]);
      });

      const res = await fetch("https://hello-babul-backend.vercel.app/api/volunteers", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Failed to submit form");

      // Reset form
      setFormData({
        fullname: "",
        fathername: "",
        mothername: "",
        dateofbirth: "",
        mobile: "",
        area: "",
        education: "",
        agree: false,
        media: null,
      });

      setOpen(false); // close form modal
      setSuccessOpen(true); // open success popup

      setTimeout(() => setSuccessOpen(false), 3000); // auto-close after 3 sec
    } catch (err) {
      console.error(err);
      alert("ফর্ম জমা দিতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================= TEAM SECTION ================= */}
      <main className="bg-[#FFFDEA] px-8 py-8 md:py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">আমাদের সাপোর্ট টিম</h2>
          <p className="mt-3 text-gray-600">জনগণের সেবা নিশ্চিত করতে আমাদের নিবেদিত কর্মীরা সর্বদা প্রস্তুত</p>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="border border-green-200 rounded-lg overflow-hidden bg-[#FFFDEA]">
                <img src={member.img} alt={member.name} className="p-8 pb-0" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>
                </div>
                <div className="bg-[#018635] text-white p-4">
                  <p className="font-semibold text-[20px]">{member.role}</p>
                  <p className="text-sm mt-2">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16">
            <h3 className="font-bold text-[28px] md:text-[40px] text-black">আমাদের স্বেচ্ছাসেবক হিসেবে যোগ দিন</h3>
            <p className="mt-4 text-gray-600 md:text-[20px] max-w-3xl mx-auto">নিবন্ধন করে আজই আমাদের টিমের একজন হয়ে উঠুন।</p>
            <button
              onClick={() => setOpen(true)}
              className="mt-6 bg-[#FED525] hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition md:text-[20px]"
            >
              ফর্মটি সঠিকভাবে পূরণ করুন
            </button>
          </div>
        </div>
      </main>

      {/* ================= FORM MODAL ================= */}
      {open && (
        <CustomModal isOpen={open} onClose={() => setOpen(false)} title=" স্বেচ্ছাসেবক আবেদন ফর্ম">
          <form onSubmit={handleSubmit} className="px-6 py-3 flex flex-col gap-6 text-white">
            {[
              { label: "পূর্ণ নাম", name: "fullname" },
              { label: "পিতার নাম", name: "fathername" },
              { label: "মাতার নাম", name: "mothername" },
              { label: "জন্মতারিখ", name: "dateofbirth" },
              { label: "মোবাইল নম্বর", name: "mobile" },
              { label: "শিক্ষাগত যোগ্যতা", name: "education" },
              { label: "এরিয়া / ওয়ার্ড", name: "area" },
            ].map((field, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-4 items-center">
                <label className="md:w-1/4 text-lg">{field.label}</label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  placeholder={field.label}
                  className="w-full md:flex-1 bg-transparent border border-white/70 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 text-white placeholder-white/50"
                  required
                />
              </div>
            ))}

            {/* Image Upload */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="md:w-1/4 text-lg">ছবি</label>
              <label className="cursor-pointer bg-gray-200 text-black px-6 py-3 rounded-lg">
                Upload Image
                <input type="file" name="media" onChange={handleChange} className="hidden" accept="image/*" />
              </label>
            </div>

            {/* Declaration */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1 h-5 w-5 accent-yellow-400"
                required
              />
              <p>আমি স্বেচ্ছাসেবক হিসেবে দায়িত্বশীলভাবে কাজ করার অঙ্গীকার করছি</p>
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={loading}
                className="bg-yellow-400 text-black font-semibold px-16 py-3 rounded-xl hover:bg-yellow-300 transition disabled:opacity-50"
              >
                {loading ? "জমা দেওয়া হচ্ছে..." : "জমা দিন"}
              </button>
            </div>
          </form>
        </CustomModal>
      )}

      {/* ================= SUCCESS POPUP ================= */}
      {successOpen && (
        <CustomModal isOpen={successOpen} onClose={() => setSuccessOpen(false)} title="">
          <div className="w-full max-w-2xl rounded-xl border border-white/20 bg-[#0b1f1f] p-10 text-center shadow-lg mx-auto mt-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="mt-6 text-xl md:text-2xl font-semibold text-[#FED525]">
              আপনার আবেদন সফলভাবে গ্রহণ করা হয়েছে
            </h2>

            <p className="mt-3 text-sm md:text-base text-gray-200">
              জনগণের সেবায় আপনাদের সহযোগিতাই আমাদের শক্তি হিসেবে কাজ করে
            </p>
          </div>
        </CustomModal>
      )}
    </>
  );
}
