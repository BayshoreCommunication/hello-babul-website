"use server";

// Base API URL - can be configured via environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://hello-babul-backend.vercel.app/api";

// Types
interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
}

interface FetchOptions {
  revalidateSeconds?: number;
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

// ==================== VOLUNTEER ACTIONS ====================

// Get all volunteers with pagination and search
export async function getVolunteers(
  params: PaginationParams = {},
  options: FetchOptions = {}
) {
  try {
    const queryParams = new URLSearchParams();
    
    if (params.page) queryParams.append("page", params.page.toString());
    if (params.limit) queryParams.append("limit", params.limit.toString());
    if (params.search) queryParams.append("search", params.search);
    
    const url = `${API_BASE_URL}/volunteers${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
    const res = await fetch(url, buildFetchOptions(options));
    
    if (!res.ok) {
      throw new Error(`Failed to fetch volunteers: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("getVolunteers error:", error);
    throw error;
  }
}

// Get volunteer by ID (automatically marks as viewed)
export async function getVolunteerById(id: string, options: FetchOptions = {}) {
  try {
    const url = `${API_BASE_URL}/volunteers/${id}`;
    const res = await fetch(url, buildFetchOptions(options));
    
    if (!res.ok) {
      throw new Error(`Failed to fetch volunteer: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("getVolunteerById error:", error);
    throw error;
  }
}

// Delete volunteer by ID
export async function deleteVolunteer(id: string) {
  try {
    const url = `${API_BASE_URL}/volunteers/${id}`;
    const res = await fetch(url, {
      method: "DELETE",
      cache: "no-store",
    });
    
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to delete volunteer: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("deleteVolunteer error:", error);
    throw error;
  }
}

// ==================== OPINION ACTIONS ====================

// Get all opinions with pagination and search
export async function getYourOpinions(
  params: PaginationParams = {},
  options: FetchOptions = {}
) {
  try {
    const queryParams = new URLSearchParams();
    
    if (params.page) queryParams.append("page", params.page.toString());
    if (params.limit) queryParams.append("limit", params.limit.toString());
    if (params.search) queryParams.append("search", params.search);
    
    const url = `${API_BASE_URL}/your-opinions${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
    const res = await fetch(url, buildFetchOptions(options));
    
    if (!res.ok) {
      throw new Error(`Failed to fetch opinions: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("getYourOpinions error:", error);
    throw error;
  }
}

// Get opinion by ID (automatically marks as viewed)
export async function getYourOpinionById(id: string, options: FetchOptions = {}) {
  try {
    const url = `${API_BASE_URL}/your-opinions/${id}`;
    const res = await fetch(url, buildFetchOptions(options));
    
    if (!res.ok) {
      throw new Error(`Failed to fetch opinion: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("getYourOpinionById error:", error);
    throw error;
  }
}

// Delete opinion by ID
export async function deleteYourOpinion(id: string) {
  try {
    const url = `${API_BASE_URL}/your-opinions/${id}`;
    const res = await fetch(url, {
      method: "DELETE",
      cache: "no-store",
    });
    
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to delete opinion: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("deleteYourOpinion error:", error);
    throw error;
  }
}

// ==================== SUGGESTION ACTIONS ====================

// Get all suggestions with pagination and search
export async function getYourSuggests(
  params: PaginationParams = {},
  options: FetchOptions = {}
) {
  try {
    const queryParams = new URLSearchParams();
    
    if (params.page) queryParams.append("page", params.page.toString());
    if (params.limit) queryParams.append("limit", params.limit.toString());
    if (params.search) queryParams.append("search", params.search);
    
    const url = `${API_BASE_URL}/your-suggests${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
    const res = await fetch(url, buildFetchOptions(options));
    
    if (!res.ok) {
      throw new Error(`Failed to fetch suggestions: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("getYourSuggests error:", error);
    throw error;
  }
}

// Get suggestion by ID (automatically marks as viewed)
export async function getYourSuggestById(id: string, options: FetchOptions = {}) {
  try {
    const url = `${API_BASE_URL}/your-suggests/${id}`;
    const res = await fetch(url, buildFetchOptions(options));
    
    if (!res.ok) {
      throw new Error(`Failed to fetch suggestion: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("getYourSuggestById error:", error);
    throw error;
  }
}

// Delete suggestion by ID
export async function deleteYourSuggest(id: string) {
  try {
    const url = `${API_BASE_URL}/your-suggests/${id}`;
    const res = await fetch(url, {
      method: "DELETE",
      cache: "no-store",
    });
    
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to delete suggestion: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("deleteYourSuggest error:", error);
    throw error;
  }
}

// ==================== DEVELOPMENT IDEA ACTIONS ====================

// Get all development ideas with pagination and search
export async function getDevelopmentIdeas(
  params: PaginationParams = {},
  options: FetchOptions = {}
) {
  try {
    const queryParams = new URLSearchParams();
    
    if (params.page) queryParams.append("page", params.page.toString());
    if (params.limit) queryParams.append("limit", params.limit.toString());
    if (params.search) queryParams.append("search", params.search);
    
    const url = `${API_BASE_URL}/development-ideas${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
    const res = await fetch(url, buildFetchOptions(options));
    
    if (!res.ok) {
      throw new Error(`Failed to fetch development ideas: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("getDevelopmentIdeas error:", error);
    throw error;
  }
}

// Get development idea by ID (automatically marks as viewed)
export async function getDevelopmentIdeaById(id: string, options: FetchOptions = {}) {
  try {
    const url = `${API_BASE_URL}/development-ideas/${id}`;
    const res = await fetch(url, buildFetchOptions(options));
    
    if (!res.ok) {
      throw new Error(`Failed to fetch development idea: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("getDevelopmentIdeaById error:", error);
    throw error;
  }
}

// Delete development idea by ID
export async function deleteDevelopmentIdea(id: string) {
  try {
    const url = `${API_BASE_URL}/development-ideas/${id}`;
    const res = await fetch(url, {
      method: "DELETE",
      cache: "no-store",
    });
    
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to delete development idea: ${res.status} ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error("deleteDevelopmentIdea error:", error);
    throw error;
  }
}
