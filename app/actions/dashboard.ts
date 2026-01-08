export async function getDashboardOverview({ revalidateSeconds }: { revalidateSeconds?: number } = {}) {
  const url = 'https://hello-babul-backend.vercel.app/api/dashboard/overview';
  const fetchOptions: any = {};
  if (typeof revalidateSeconds === 'number') {
    fetchOptions.next = { revalidate: revalidateSeconds };
  } else {
    fetchOptions.cache = 'no-store';
  }

  const res = await fetch(url, fetchOptions);
  if (!res.ok) {
    throw new Error(`Failed to fetch dashboard overview: ${res.status}`);
  }
  return res.json();
}

export async function getDashboardOverviewSSR() {
  return getDashboardOverview();
}

export async function getAllDashboardData({ revalidateSeconds }: { revalidateSeconds?: number } = {}) {
  const url = "https://hello-babul-backend.vercel.app/api/dashboard/all-data";
  const fetchOptions: any = {};
  if (typeof revalidateSeconds === "number") {
    fetchOptions.next = { revalidate: revalidateSeconds };
  } else {
    fetchOptions.cache = "no-store";
  }

  const res = await fetch(url, fetchOptions);
  if (!res.ok) {
    throw new Error(`Failed to fetch all dashboard data: ${res.status}`);
  }
  return res.json();
}

export async function getDashboardDetails(id: string, type: string, { revalidateSeconds }: { revalidateSeconds?: number } = {}) {
  const url = `https://hello-babul-backend.vercel.app/api/dashboard/details/${id}?type=${encodeURIComponent(type)}`;
  const fetchOptions: any = {};
  if (typeof revalidateSeconds === "number") {
    fetchOptions.next = { revalidate: revalidateSeconds };
  } else {
    fetchOptions.cache = "no-store";
  }

  const res = await fetch(url, fetchOptions);
  if (!res.ok) {
    throw new Error(`Failed to fetch dashboard details: ${res.status}`);
  }
  return res.json();
}
