"use client";

import React from "react";
import {
  Mail,
  Key,
  AlertCircle,
  MapPin,
  MessageSquare,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { LuLogOut } from "react-icons/lu";

const SideBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { label: "সকল আবেদন", href: "/dashboard", icon: Mail, activeColor: "text-blue-600" },
    { label: "অভিযোগ", href: "/dashboard/complaints", icon: Key, activeColor: "text-yellow-600" },
    { label: "জরুরি অভিযোগ", href: "/dashboard/urgent-complaints", icon: AlertCircle, activeColor: "text-red-600" },
    { label: "উন্নয়ন আইডিয়া", href: "/dashboard/development-ideas", icon: MapPin, activeColor: "text-green-600" },
    { label: "মতামত", href: "/dashboard/feedback", icon: MessageSquare, activeColor: "text-purple-600" },
    { label: "স্বেচ্ছাসেবক আবেদন", href: "/dashboard/volunteer-application", icon: User, activeColor: "text-indigo-600" },
  ];

const handleLogout = async () => {
  try {
    await fetch("https://hello-babul-backend.vercel.app/api/user/logout", {
      method: "POST",
      credentials: "include",
    });
  } catch (err) {
    console.error("Logout failed", err);
  } finally {
    // Remove localStorage login info
    localStorage.removeItem("isLoggedIn");

    // Force full page reload to /login
    window.location.href = "/login"; // 🔥 use this instead of router.replace
  }
};





  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-8">

        {/* Logo */}
        <Link href="/dashboard" className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
          <Image src="/image/dn-logo.png" alt="logo" width={40} height={40} priority />
        </Link>

        {/* Menu */}
        <nav className="flex-1 flex flex-col items-center space-y-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center space-y-1 p-2 rounded transition ${
                  isActive ? item.activeColor : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Icon size={24} />
                <span className="text-xs text-center leading-tight">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="text-gray-400 p-2 hover:text-red-600 transition"
          title="Logout"
        >
          <LuLogOut size={24} />
        </button>

        {/* Profile */}
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
          <Image
            src="/image/hero/babul.png"
            alt="Profile"
            width={40}
            height={40}
            priority
          />
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
