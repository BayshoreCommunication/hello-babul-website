import { getDashboardOverview } from "../actions/dashboard";

export default async function ServerOverview() {
  const data = await getDashboardOverview({ revalidateSeconds: 60 });
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Dashboard Overview (SSR)</h3>
      <pre className="whitespace-pre-wrap text-sm">
        {JSON.stringify(data, null, 2)}dfgfd
      </pre>
    </div>
  );
}
