import React from "react";
import {
  AlertCircle,
  User,
  Phone,
  MapPin,
  FileText,
  Notebook,
  Mail,
  Eye,
} from "lucide-react";
import { getDevelopmentIdeaById } from "@/app/actions/submissions";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function EmergencyReportDetail({ params }: PageProps) {
  // Fetch suggestion data by ID - this automatically marks it as viewed
  let suggestionData;

  try {
    const response = await getDevelopmentIdeaById(params.id);

    if (!response.success) {
      notFound();
    }

    suggestionData = response.data;
  } catch (error) {
    console.error("Error fetching suggestion details:", error);
    notFound();
  }

  // Format date in Bengali
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  console.log("suggestionData", suggestionData);

  return (
    <div className="max-h-[68vh] h-full overflow-auto bg-white py-6 px-4">
      <div className="px-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-6 mb-6">
          <div className="flex items-center gap-3">
            <Mail className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-black">উন্নয়ন আইডিয়া</h2>
          </div>
          <div className="flex items-center gap-4">
            {suggestionData.viewed && (
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <Eye className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">দেখা হয়েছে</span>
              </div>
            )}
            <span className="text-sm text-gray-500">
              আইডি: {suggestionData._id.slice(-8)}
            </span>
          </div>
        </div>

        <div className="flex items-stretch gap-6 justify-stretch w-full">
          {/* Personal Information */}
          <div className="bg-white rounded-lg border border-black/10 p-6 mb-6 max-w-[30%] w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
              ব্যক্তিগত তথ্য
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">পূর্ণ নাম</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {suggestionData.fullname}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">মোবাইল নম্বর</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {suggestionData.mobile}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">এলাকা / ওয়ার্ড</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {suggestionData.area}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">পরামর্শের ধরণ</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {suggestionData.typeOfIdea}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestion Details */}
          <div className="bg-white rounded-lg border border-black/10 p-6 mb-6 w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
              পরামর্শ বিবরণ
            </h2>
            <div>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {suggestionData.comment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
