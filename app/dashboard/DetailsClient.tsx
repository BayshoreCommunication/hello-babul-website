"use client";
import React, { useState } from "react";

export default function DetailsClient({
  id,
  type,
}: {
  id: string;
  type: string;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  async function handleOpen() {
    if (!id) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://hello-babul-backend.vercel.app/api/dashboard/details/${id}?type=${encodeURIComponent(
          type
        )}`
      );
      if (!res.ok) throw new Error(String(res.status));
      const json = await res.json();
      setData(json);
      setOpen(true);
    } catch (err) {
      console.error(err);
      setData({ error: String(err) });
      setOpen(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleOpen}
        className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
      >
        {loading ? "Loading…" : "Details"}
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="bg-white p-4 rounded shadow max-w-2xl w-full z-10">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold">Details</h4>
              <button
                onClick={() => setOpen(false)}
                className="text-sm text-gray-600"
              >
                Close
              </button>
            </div>
            <div className="max-h-[60vh] overflow-auto text-sm">
              <pre className="whitespace-pre-wrap">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
