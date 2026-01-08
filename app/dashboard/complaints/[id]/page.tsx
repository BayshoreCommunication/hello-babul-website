import React from "react";
import {
  AlertCircle,
  Phone,
  User,
  Calendar,
  FileText,
  Image as ImageIcon,
  Video,
  Mail,
} from "lucide-react";
import Image from "next/image";

interface EmergencyReport {
  id: string;
  reporterName: string;
  phoneNumber: string;
  class: string;
  reportTitle: string;
  description: string;
  media: MediaItem[];
  timestamp: string;
  status: "pending" | "reviewing" | "resolved";
}

interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail: string;
}

const EmergencyReportDetail: React.FC = () => {
  // Sample data based on the image
  const report: EmergencyReport = {
    id: "ER-001",
    reporterName: "জামিন হাসান",
    phoneNumber: "01356496491",
    class: "ওয়ার্ড - 10",
    reportTitle: "নারী নির্যাতন",
    description:
      "গত তারিখ-এ অভিভুক বক্তি আমার প্রতি অমানবানকর আচরণ করে, অমৌখিকভাবে অপমান করে এবং মানসিক চাপ সৃষ্টি করে। এর ফলে আমি জীতলগ্রস্থ হয়ে পড়ি এবং আমার স্বাভাবিক জীবনযাপন ব্যহত হয় বিষয়টি নিয়ে আমি পারিবারিকভাবে ও সামাজিকভাবে পারিপূর্ণ সময়ধারন চেষ্টা করেছি, কিন্তু অভিযুক্ত বক্তি তার আচরণ পরিবর্তন করেনি বরং পরিস্থিতি দিন দিন আরও অবনতির দিকে যাচ্ছে, যা আমার ব্যক্তিগত নিরাপত্তার জন্য হুমকিস্বরূপ",
    media: [
      {
        type: "image",
        url: "/placeholder1.jpg",
        thumbnail: "/placeholder1.jpg",
      },
      {
        type: "image",
        url: "/placeholder2.jpg",
        thumbnail: "/placeholder2.jpg",
      },
      {
        type: "video",
        url: "/placeholder3.mp4",
        thumbnail: "/placeholder3.jpg",
      },
      {
        type: "video",
        url: "/placeholder4.mp4",
        thumbnail: "/placeholder4.jpg",
      },
    ],
    timestamp: "২০২৫-০১-০৮, ১৪:৩০",
    status: "pending",
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "reviewing":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "resolved":
        return "bg-green-100 text-green-800 border-green-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case "pending":
        return "পর্যালোচনাধীন";
      case "reviewing":
        return "তদন্তাধীন";
      case "resolved":
        return "সমাধান সম্পন্ন";
      default:
        return status;
    }
  };

  return (
    <div className="max-h-[68vh] h-full overflow-auto bg-white py-6 px-4">
      <div className="px-6">
        {/* Header */}
        <div className=" flex items-center justify-between border-b-1 border-black/10 p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-black">অভিযোগ</h2>
          </div>
          <div>
            <span className="text-sm text-gray-500">
              রিপোর্ট আইডি: {report.id}
            </span>
          </div>
        </div>

        <div className=" flex items-stretch gap-6 justify-stretch w-full ">
          {/* Reporter Information */}
          <div className="bg-white rounded-lg border-1 border-black/10 p-6 mb-6 max-w-[25%] w-full ">
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
              ব্যক্তিগত তথ্য
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">পূর্ণ নাম</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {report.reporterName}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">মোবাইল নম্বর</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {report.phoneNumber}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">এলাকা / ওয়ার্ড</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {report.class}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Report Details */}
          <div className="bg-white rounded-lg border-1 border-black/10 p-6 mb-6  w-full ">
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
              অভিযোগ
            </h2>
            <div className="mb-4">
              <p className="text-lg font-semibold text-red-700 bg-red-50 p-3 rounded">
                {report.reportTitle}
              </p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed   ">
                {report.description}
              </p>
            </div>
          </div>
        </div>

        {/* Media Evidence */}
        <div className="bg-white rounded-lg border border-black/10 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
            ছবি/ভিডিও
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {report.media.map((item, index) => (
              <div key={index} className="relative group">
                <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 border-gray-300 hover:border-blue-500 transition-colors">
                  {/* IMAGE */}
                  {item.type === "image" && (
                    <Image
                      src={item.url}
                      alt={`Evidence ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  )}

                  {/* VIDEO */}
                  {item.type === "video" && (
                    <video
                      src={item.url}
                      controls
                      className="w-full h-full object-cover"
                      preload="metadata"
                    />
                  )}
                </div>

                {/* ICON */}
                <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                  {item.type === "image" ? (
                    <ImageIcon className="w-4 h-4 text-gray-700" />
                  ) : (
                    <Video className="w-4 h-4 text-gray-700" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyReportDetail;
