"use client";

import Image from "next/image";
import { useState } from "react";
import CustomModal from "./CustomModal";
import toast from "react-hot-toast";

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    complaint: "",
    file: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("area", formData.area);
    data.append("complaint", formData.complaint);

    if (formData.file) {
      data.append("file", formData.file);
    }

    try {
      const res = await fetch("/api/complaint", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Submission failed");

      // close form modal & open success modal
      setOpen(false);
      setSuccessOpen(true);

      toast.success("আপনার আবেদন সফলভাবে জমা হয়েছে");

      // reset form
      setFormData({
        name: "",
        phone: "",
        area: "",
        complaint: "",
        file: null,
      });
    } catch (error) {
      console.error(error);
      toast.error("সমস্যা হয়েছে, আবার চেষ্টা করুন");
    }
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="w-full">
        <div className="bg-[#D13212] text-white">
          <div className="max-w-[1640px] mx-auto hidden md:flex flex-row items-center justify-evenly pt-16 px-8 gap-6">
            <Image
              src="/image/hero/babul.png"
              alt="Babul"
              width={1000}
              height={800}
              className="w-[500px] h-auto rounded-lg"
            />
            <div className="text-center">
              <h1 className="text-[64px] font-bold flex items-center gap-2 justify-center">
                <Image
                  src="/image/hero/icon.png"
                  alt="icon"
                  width={48}
                  height={48}
                />
                Hello Babul
              </h1>
              <p className="mt-4 text-[48px] leading-none max-w-2xl">
                আপনার কথা—সরাসরি বাবুল ভাইয়ের কাছে
              </p>
              <p className="mt-4 text-[32px] text-[#FED525]">
                -- শহিদুল ইসলাম বাবুল
              </p>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden px-8 py-8 text-center">
            <Image
              src="/image/hero/babul-phone.png"
              alt="Babul"
              width={800}
              height={600}
              className="w-full rounded-lg"
            />
            <p className="mt-6 text-lg">
              অভিযোগ করুন, পরামর্শ দিন - পরিবর্তনে আপনার অংশগ্রহণই সবচেয়ে শক্তিশালী শক্তি।
            </p>
            <p className="mt-4 text-[#FED525]">
              -- শহিদুল ইসলাম বাবুল
            </p>
          </div>
        </div>

        <div className="bg-[#018635] text-center px-6 py-10">
          <p className="text-lg md:text-[40px] text-[#FED525] max-w-6xl mx-auto leading-none">
            আপনার মতামত সরাসরি আমার টিমের কাছে পৌঁছাবে, প্রয়োজন হলে আমরা যোগাযোগ করব
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-6 bg-[#FED525] text-black font-semibold px-8 py-3 rounded-md hover:bg-yellow-300 transition"
          >
            অভিযোগ/পরামর্শ জানান
          </button>
        </div>
      </section>

      {/* ================= FORM MODAL ================= */}
      {open && (
        <CustomModal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="আপনার অভিযোগ/পরামর্শ"
        >
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-10 bg-black text-white flex flex-col gap-6"
          >
            {[
              { label: "পূর্ণ নাম", key: "name", type: "text" },
              { label: "মোবাইল নম্বর", key: "phone", type: "tel" },
              { label: "এরিয়া / ওয়ার্ড", key: "area", type: "text" },
            ].map((field) => (
              <div
                key={field.key}
                className="flex flex-col md:flex-row gap-4"
              >
                <label className="md:w-1/4">{field.label}</label>
                <input
                  type={field.type}
                  value={(formData as any)[field.key]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [field.key]: e.target.value,
                    })
                  }
                  className="flex-1 bg-transparent border border-white/60 rounded-lg px-4 py-3"
                />
              </div>
            ))}

            <div className="flex flex-col md:flex-row gap-4">
              <label className="md:w-1/4">আপনার অভিযোগ</label>
              <textarea
                rows={5}
                value={formData.complaint}
                onChange={(e) =>
                  setFormData({ ...formData, complaint: e.target.value })
                }
                className="flex-1 bg-transparent border border-white/60 rounded-lg px-4 py-3"
              />
            </div>

            <label className="cursor-pointer bg-gray-200 text-black px-6 py-3 rounded-lg w-fit">
              Upload file
              <input
                type="file"
                className="hidden"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    file: e.target.files?.[0] || null,
                  })
                }
              />
            </label>

            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold px-10 py-3 rounded-xl hover:bg-yellow-300 transition"
            >
              জমা দিন
            </button>
          </form>
        </CustomModal>
      )}

      {/* ================= SUCCESS MODAL ================= */}
      {successOpen && (
        <CustomModal
          isOpen={successOpen}
          onClose={() => setSuccessOpen(false)}
          title=""
        >
          <div className="p-10 bg-[#0b1f1f] text-center rounded-xl text-white">
            <div className="mx-auto h-14 w-14 flex items-center justify-center rounded-full bg-green-700">
              ✓
            </div>
            <h2 className="mt-6 text-2xl text-[#FED525] font-semibold">
              আপনার আবেদন সফলভাবে গ্রহণ করা হয়েছে
            </h2>
            <p className="mt-3 text-gray-200">
              জনগণের সেবায় আপনাদের সহযোগিতাই আমাদের শক্তি
            </p>
            <button
              onClick={() => setSuccessOpen(false)}
              className="mt-6 bg-[#FED525] text-black px-8 py-3 rounded-lg"
            >
              ঠিক আছে
            </button>
          </div>
        </CustomModal>
      )}
    </>
  );
}
