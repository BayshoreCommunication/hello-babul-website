"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import {
  User,
  Phone,
  MapPin,
  GraduationCap,
  Calendar,
  UserCircle,
} from "lucide-react";
import Image from "next/image";

interface VolunteerApplication {
  _id: string;
  fullname: string;
  fathername: string;
  mothername: string;
  dateofbirth: string;
  mobile: string;
  education: string;
  area: string;
  media?: string;
}

export default function VolunteerApplicationDetailsPage() {
  const params = useParams();
  const id = params?.id as string;

  const [data, setData] = useState<VolunteerApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://hello-babul-backend.vercel.app/api/volunteers/${id}`,
          { cache: "no-store" }
        );

        if (!res.ok) {
          setData(null);
          return;
        }

        const json = await res.json();
        setData(json.data ?? json);
      } catch (error) {
        console.error(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  /* ------------------ NO LOADING FLASH ------------------ */
  if (loading) return null;

  /* ------------------ 404 ONLY AFTER LOAD ------------------ */
  if (!data) {
    notFound();
  }
  const formatDate = (isoDate?: string) => {
  if (!isoDate) return "-";
  const d = new Date(isoDate); // convert string to Date object
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0"); // month is 0-indexed
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};
  const infoList = [
    { icon: <User />, label: "পিতার নাম", value: data.fathername },
    { icon: <User />, label: "মাতার নাম", value: data.mothername },
    { icon: <Calendar />, label: "জন্মতারিখ", value: formatDate(data.dateofbirth) },
    {
      icon: <GraduationCap />,
      label: "শিক্ষাগত যোগ্যতা",
      value: data.education,
    },
    { icon: <Phone />, label: "মোবাইল নম্বর", value: data.mobile },
    { icon: <MapPin />, label: "এরিয়া / ওয়ার্ড", value: data.area },
  ];

  return (
    <div className="max-h-[68vh] h-full overflow-auto bg-white py-6 px-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/10 py-6 mb-6">
        <div className="flex items-center gap-3">
          <User className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            স্বেচ্ছাসেবক আবেদন বিস্তারিত
          </h1>
        </div>
        <span className="text-sm text-gray-500">ID: {data._id.slice(-8)}</span>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left */}
        <div className="bg-white border border-black/10 rounded-lg p-6 flex flex-col items-center shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            আবেদনকারীর ছবি
          </h3>

          <div className="relative w-60 h-60 rounded-lg overflow-hidden border-2 border-gray-200 bg-gray-100 flex items-center justify-center">
            {data.media && !imageError ? (
              <Image
                src={data.media}
                alt="Volunteer Photo"
                fill
                className="object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <UserCircle className="w-24 h-24 text-gray-400" />
            )}
          </div>

          <p className="mt-4 text-lg font-medium text-gray-800">
            {data.fullname}
          </p>
        </div>

        {/* Right */}
        <div className="md:col-span-2 bg-white border border-black/10 rounded-lg p-6 space-y-4 shadow-sm">
          {infoList.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 border-b last:border-b-0 pb-3 last:pb-0"
            >
              <div className="text-blue-600 mt-1">{item.icon}</div>
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-base font-medium text-gray-800">
                  {item.value || "—"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
