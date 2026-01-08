"use server";

// Base API URL - can be configured via environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://hello-babul-backend.vercel.app/api";

// Types
export type DataType = "volunteer" | "opinion" | "suggestion" | "developmentIdea";

interface FetchOptions {
  revalidateSeconds?: number;
}

interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
  type?: DataType;
}

// Helper function to build fetch options
function buildFetchOptions(options: FetchOptions = {}): RequestInit {
  const fetchOptions: RequestInit = {};
  
  if (typeof options.revalidateSeconds === "number") {
    fetchOptions.next = { revalidate: options.revalidateSeconds };
  } else {
    fetchOptions.cache = "no-store";
  }
  
  return fetchOptions;
}

// 1. Get Dashboard Overview - Get total counts
export async function getDashboardOverview(options: FetchOptions = {}) {
  try {
    const url = `${API_BASE_URL}/dashboard/overview`;
    const res = await fetch(url, buildFetchOptions(options));
    
    if (!res.ok) {
      throw new Error(`Failed to fetch dashboard overview: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("getDashboardOverview error:", error);
    throw error;
  }
}

// SSR version (legacy compatibility)
export async function getDashboardOverviewSSR() {
  return getDashboardOverview();
}

// 2. Get All Dashboard Data with pagination and search
export async function getAllDashboardData(
  params: PaginationParams = {},
  options: FetchOptions = {}
) {
  try {
    const queryParams = new URLSearchParams();
    
    if (params.page) queryParams.append("page", params.page.toString());
    if (params.limit) queryParams.append("limit", params.limit.toString());
    if (params.search) queryParams.append("search", params.search);
    if (params.type) queryParams.append("type", params.type);
    
    const url = `${API_BASE_URL}/dashboard/all-data${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
    const res = await fetch(url, buildFetchOptions(options));
    
    if (!res.ok) {
      throw new Error(`Failed to fetch all dashboard data: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("getAllDashboardData error:", error);
    throw error;
  }
}

// 3. Get Dashboard Details by ID and type
export async function getDashboardDetails(
  id: string,
  type: DataType,
  options: FetchOptions = {}
) {
  try {
    const url = `${API_BASE_URL}/dashboard/details/${id}?type=${encodeURIComponent(type)}`;
    const res = await fetch(url, buildFetchOptions(options));
    
    if (!res.ok) {
      throw new Error(`Failed to fetch dashboard details: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("getDashboardDetails error:", error);
    throw error;
  }
}

// 4. Mark data as viewed
export async function markAsViewed(id: string, type: DataType) {
  try {
    const url = `${API_BASE_URL}/dashboard/mark-viewed/${id}`;
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type }),
      cache: "no-store",
    });
    
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to mark as viewed: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("markAsViewed error:", error);
    throw error;
  }
}

// 5. Delete data by ID and type
export async function deleteData(id: string, type: DataType) {
  try {
    const url = `${API_BASE_URL}/dashboard/delete/${id}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type }),
      cache: "no-store",
    });
    
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to delete data: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("deleteData error:", error);
    throw error;
  }
}

