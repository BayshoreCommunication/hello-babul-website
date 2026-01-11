"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SideBar from "@/components/dashboard/SideBar";
import ServerAllData from "./ServerAllData";

const DashboardPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      router.push("/login"); // redirect to login SPA-style
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="flex h-screen w-full">
      {/* <SideBar /> */}
      <div className="flex-1 overflow-auto p-8 bg-gray-50">
        <ServerAllData />
      </div>
    </div>
  );
};

export default DashboardPage;
