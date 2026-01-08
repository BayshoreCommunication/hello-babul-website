import SideBar from "@/components/dashboard/SideBar";
import TopBar from "@/components/dashboard/TopBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <main className="flex relative h-screen overflow-hidden">
          <SideBar />
          <div className="flex-1 bg-[#F0F2F5] p-8 space-y-8 h-full">
            <TopBar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
