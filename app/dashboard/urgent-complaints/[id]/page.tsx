import { getYourSuggestById } from "@/app/actions/submissions";
import {
  Calendar,
  Eye,
  FileText,
  Image as ImageIcon,
  Mail,
  MapPin,
  Phone,
  User,
  Video,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ComplaintDetailsPage({ params }: PageProps) {
  // Fetch suggestion data by ID - this automatically marks it as viewed
  let suggestionData;

  try {
    const response = await getYourSuggestById(params.id);

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

  return (
    <div className="max-h-[68vh] h-full overflow-auto bg-white py-6 px-4">
      <div className="px-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-6 mb-6">
          <div className="flex items-center gap-3">
            <Mail className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-black">
              জরুরি অভিযোগ বিস্তারিত
            </h2>
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
                    {suggestionData.typeOfSuggest}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">জমা দেওয়ার সময়</p>
                  <p className="text-sm font-medium text-gray-800">
                    {formatDate(suggestionData.createdAt)}
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

        {/* Media Evidence (if available) */}
        {suggestionData.media && (
          <div className="bg-white rounded-lg border border-black/10 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
              সংযুক্ত মিডিয়া
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative group">
                <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 border-gray-300 hover:border-blue-500 transition-colors">
                  {/* IMAGE */}
                  {suggestionData.mediaType === "image" && (
                    <Image
                      src={suggestionData.media}
                      alt="Suggestion media"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  )}

                  {/* VIDEO */}
                  {suggestionData.mediaType === "video" && (
                    <video
                      src={suggestionData.media}
                      controls
                      className="w-full h-full object-cover"
                      preload="metadata"
                    />
                  )}
                </div>

                {/* ICON */}
                <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                  {suggestionData.mediaType === "image" ? (
                    <ImageIcon className="w-4 h-4 text-gray-700" />
                  ) : (
                    <Video className="w-4 h-4 text-gray-700" />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No Media Message */}
        {!suggestionData.media && (
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center">
            <p className="text-gray-500">কোন মিডিয়া সংযুক্ত করা হয়নি</p>
          </div>
        )}
      </div>
    </div>
  );
}
