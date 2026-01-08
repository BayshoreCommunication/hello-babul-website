"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import CustomModal from "./CustomModal";

interface FormData {
  fullname: string;
  fathername: string;
  mothername: string;
  dateofbirth: string;
  mobile: string;
  area: string;
  education: string;
  agree: boolean;
  media: File | null;
}

interface TeamMember {
  name: string;
  role: string;
  desc: string;
  img: string;
}

export default function Team() {
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filePreview, setFilePreview] = useState<string | null>(null); // For live preview

  const [formData, setFormData] = useState<FormData>({
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

  const team: TeamMember[] = [
    { name: "মোঃ আরিফুল ইসলাম", role: "কমিউনিটি কো-অর্ডিনেটর", desc: "স্বেচ্ছাসেবী কার্যক্রম পরিচালনা ও জনগণের সমস্যা দ্রুত সমাধানে কাজ করেন", img: "/image/team/img1.png" },
    { name: "সাবিনা আক্তার", role: "স্বাস্থ্য কর্মী", desc: "স্বাস্থ্য ও পরিচ্ছন্নতা সংক্রান্ত অভিযোগ যাচাই ও উদ্যোগ নেন", img: "/image/team/img2.png" },
    { name: "মোঃ মাসুদুল ইসলাম", role: "নিরাপত্তা/তথ্য সেবা কর্মী", desc: "এলাকার নিরাপত্তা ও জরুরি পরিস্থিতিতে সহযোগিতামূলক ভূমিকা পালন করেন", img: "/image/team/img3.png" },
    { name: "মাহমুদ হাসান", role: "অভিযোগ ডেস্ক প্রধান", desc: "নাগরিক অভিযোগ গ্রহণ, ফলো-আপ ও সমাধান নিশ্চিত করেন", img: "/image/team/img4.png" },
  ];

  // Type-safe handleChange with file preview
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, files, value } = e.target;

    if (type === "checkbox") {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      const file = files ? files[0] : null;
      setFormData(prev => ({ ...prev, [name]: file }));
      if (file && file.type.startsWith("image/")) {
        const previewUrl = URL.createObjectURL(file);
        setFilePreview(previewUrl);
      } else {
        setFilePreview(null);
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        const value = formData[key as keyof FormData];
        if (value !== null) data.append(key, value as any);
      });

      const res = await fetch("https://hello-babul-backend.vercel.app/api/volunteers", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Failed to submit form");

      // Reset form and preview
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
      setFilePreview(null);

      setOpen(false);
      setSuccessOpen(true);
      setTimeout(() => setSuccessOpen(false), 3000);
    } catch (err) {
      console.error(err);
      alert("ফর্ম জমা দিতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  const fields: { label: string; name: keyof FormData }[] = [
    { label: "পূর্ণ নাম", name: "fullname" },
    { label: "পিতার নাম", name: "fathername" },
    { label: "মাতার নাম", name: "mothername" },
    { label: "জন্মতারিখ", name: "dateofbirth" },
    { label: "মোবাইল নম্বর", name: "mobile" },
    { label: "শিক্ষাগত যোগ্যতা", name: "education" },
    { label: "এরিয়া / ওয়ার্ড", name: "area" },
  ];

  return (
    <>
      {/* ================= TEAM SECTION ================= */}
      <main className="bg-[#FFFDEA] px-8 py-8 md:py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">আমাদের সাপোর্ট টিম</h2>
          <p className="mt-3 text-gray-600">জনগণের সেবা নিশ্চিত করতে আমাদের নিবেদিত কর্মীরা সর্বদা প্রস্তুত</p>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="border border-green-200 rounded-lg overflow-hidden bg-[#FFFDEA]">
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
            {fields.map((field, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-4 items-center">
                <label className="md:w-1/4 text-lg">{field.label}</label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name] as string}
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

            {/* Live Preview */}
            {filePreview && (
              <div className="mt-2 text-left md:ml-1">
                <p className="text-sm text-gray-300">Selected Image Preview:</p>
                <img src={filePreview} alt="preview" className="mt-1 w-32 h-32 object-cover rounded-lg border border-white/50" />
              </div>
            )}

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
                strokeWidth={2.5}
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
