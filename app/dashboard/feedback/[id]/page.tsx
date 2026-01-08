import React from "react";
import { AlertCircle, User, Phone, MapPin, HeartPulse } from "lucide-react";
import { MdOutlineMail } from "react-icons/md";

interface EmergencyReport {
  id: string;
  reporterName: string;
  phoneNumber: string;
  area: string;
  healthDemand: string;
}

const EmergencyReportDetail: React.FC = () => {
  const report: EmergencyReport = {
    id: "ER-002",
    reporterName: "রাশেদ মাহমুদ",
    phoneNumber: "017XXXXXXXX",
    area: "ওয়ার্ড - 05",
    healthDemand:
      "আমাদের এলাকায় পর্যাপ্ত স্বাস্থ্যসেবা নেই। একটি কমিউনিটি ক্লিনিক/হাসপাতাল স্থাপন করা অত্যন্ত জরুরি, যাতে সাধারণ মানুষ দ্রুত ও সহজে চিকিৎসা সেবা পেতে পারে।",
  };

  const infoList = [
    {
      icon: <User className="w-5 h-5" />,
      label: "পূর্ণ নাম",
      value: report.reporterName,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "মোবাইল নম্বর",
      value: report.phoneNumber,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "এরিয়া / ওয়ার্ড",
      value: report.area,
    },
  ];

  return (
    <div className="max-h-[68vh] h-full overflow-auto bg-white py-6 px-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/10 pb-6 mb-6">
        <div className="flex items-center gap-3">
          <MdOutlineMail className="w-8 h-8 text-yellow-600" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            মতামত
          </h1>
        </div>
        <span className="text-sm text-gray-500">রিপোর্ট আইডি: {report.id}</span>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Info */}
        <div className="bg-white border border-black/10 rounded-lg p-6 space-y-4">
          {infoList.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="text-blue-600 mt-1">{item.icon}</div>
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-lg font-semibold text-gray-800">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Demand */}
        <div className="md:col-span-2 bg-white border border-black/10 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-3">
            <HeartPulse className="w-5 h-5 text-red-600" />
            <h2 className="text-xl font-bold text-gray-800">স্বাস্থ্যসেবা</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">{report.healthDemand}</p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyReportDetail;
