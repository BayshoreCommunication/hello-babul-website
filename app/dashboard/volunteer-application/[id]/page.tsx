"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  User,
  Phone,
  MapPin,
  GraduationCap,
  Calendar,
  UserCircle,
} from "lucide-react";
import Image from "next/image";

interface VolunteerApplication {
  id: string;
  fullName: string;
  fatherName: string;
  motherName: string;
  dateOfBirth: string;
  mobile: string;
  education: string;
  area: string;
  photo: string;
}

const VolunteerApplications: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const report: VolunteerApplication = {
    id: "VA-1023",
    fullName: "আবু কাওসার",
    fatherName: "মোঃ রহমান",
    motherName: "মোছাঃ রিনা বেগম",
    dateOfBirth: "1996-05-12",
    mobile: "017XXXXXXXX",
    education: "Bachelor Degree",
    area: "ওয়ার্ড ১২, ঢাকা",
    photo: "/avatar.jpg",
  };

  const infoList = [
    { icon: <User />, label: "পিতার নাম", value: report.fatherName },
    { icon: <User />, label: "মাতার নাম", value: report.motherName },
    { icon: <Calendar />, label: "জন্মতারিখ", value: report.dateOfBirth },
    {
      icon: <GraduationCap />,
      label: "শিক্ষাগত যোগ্যতা",
      value: report.education,
    },
    { icon: <Phone />, label: "মোবাইল নম্বর", value: report.mobile },
    { icon: <MapPin />, label: "এরিয়া / ওয়ার্ড", value: report.area },
  ];

  return (
    <div className="max-h-[68vh] h-full overflow-auto bg-white py-6 px-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/10 py-6 mb-6">
        <div className="flex items-center gap-3">
          <User className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Volunteer Application
          </h1>
        </div>
        <span className="text-sm text-gray-500">
          Application ID: {report.id}
        </span>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left */}
        <div className="bg-white border border-black/10 rounded-lg p-6 flex flex-col items-center shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            আবেদনকারীর ছবি
          </h3>

          <div className="relative w-60 h-60 rounded-lg overflow-hidden border-2 border-gray-200 bg-gray-100 flex items-center justify-center">
            {!imageError ? (
              <Image
                src={report.photo}
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
            {report.fullName}
          </p>
        </div>

        {/* Right */}
        <div className="md:col-span-2 bg-white border border-black/10 rounded-lg p-6 space-y-4 shadow-sm">
          {infoList.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 border-b last:border-b-0 pb-3 last:pb-0"
            >
              <div className="text-blue-600 mt-1 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-base font-medium text-gray-800">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerApplications;
