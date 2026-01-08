import React from "react";
import ServerOverview from "./ServerOverview";
import ServerAllData from "./ServerAllData";

export default async function DashboardPage() {
  return (
    <div className="space-y-6">
      <ServerOverview />
      <ServerAllData />
    </div>
  );
}
