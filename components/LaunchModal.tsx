"use client";

import { useState } from "react";

export default function LaunchModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="btn bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700"
        onClick={() => setOpen(true)}
      >
        Start your project →
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">🚀 Start your project</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border p-3 rounded bg-gray-50"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded bg-gray-50"
              />
              <textarea
                placeholder="Brief description of your project"
                className="w-full border p-3 rounded bg-gray-50"
                rows={4}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
