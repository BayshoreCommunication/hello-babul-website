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
        <main className="flex relative">
          <SideBar />
          <div className="flex-1 bg-green-200 p-8 space-y-8">
            <TopBar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
