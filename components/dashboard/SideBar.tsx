"use client";

import React from "react";
import {
  Mail,
  Key,
  AlertCircle,
  MapPin,
  MessageSquare,
  User,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      label: "সকল আবেদন",
      href: "/dashboard",
      icon: Mail,
      activeColor: "text-blue-600",
    },
    {
      label: "অভিযোগ",
      href: "/dashboard/complaints",
      icon: Key,
      activeColor: "text-yellow-600",
    },
    {
      label: "জরুরি অভিযোগ",
      href: "/dashboard/urgent-complaints",
      icon: AlertCircle,
      activeColor: "text-red-600",
    },
    {
      label: "উন্নয়ন আইডিয়া",
      href: "/dashboard/development-ideas",
      icon: MapPin,
      activeColor: "text-green-600",
    },
    {
      label: "মতামত / পরামর্শ",
      href: "/dashboard/feedback",
      icon: MessageSquare,
      activeColor: "text-purple-600",
    },
    {
      label: "খেঞ্জারসক আবেদন",
      href: "/dashboard/special",
      icon: User,
      activeColor: "text-indigo-600",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-8">
        {/* Logo */}
        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded opacity-20" />
        </div>

        {/* Menu */}
        <nav className="flex-1 flex flex-col items-center space-y-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center space-y-1 p-2 rounded transition
                  ${
                    isActive
                      ? item.activeColor
                      : "text-gray-400 hover:text-gray-600"
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

        {/* Settings */}
        <Link
          href="/dashboard/settings"
          className="text-gray-400 p-2 hover:text-gray-600"
        >
          <Settings size={24} />
        </Link>

        {/* Profile */}
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
