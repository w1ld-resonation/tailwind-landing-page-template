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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-2 text-gray-900">🚀 Start your project</h2>
            <p className="mb-6 text-sm text-gray-500">
              Submit your request and our team will get back to you shortly.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border p-3 rounded bg-gray-50"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded bg-gray-50"
                required
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full border p-3 rounded bg-gray-50"
              />
              <input
                type="text"
                placeholder="Company (optional)"
                className="w-full border p-3 rounded bg-gray-50"
              />
              <textarea
                placeholder="Brief description of your project"
                className="w-full border p-3 rounded bg-gray-50"
                rows={4}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
