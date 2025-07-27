"use client";

import { useState } from "react";
import Modal from "@/components/Modal";

export default function Cta() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl text-center shadow-xl bg-gray-900 text-white p-12">
          <h2 className="text-3xl font-bold mb-6">
            Deploy modern infrastructure with WILDFLOW
          </h2>
          <button
            onClick={() => setShowModal(true)}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
          >
            Start your project →
          </button>
        </div>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h3 className="text-xl font-bold mb-4">Tell us about your project</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded border px-3 py-2"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded border px-3 py-2"
          />
          <textarea
            placeholder="Project description"
            rows={4}
            className="w-full rounded border px-3 py-2"
          />
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </Modal>
    </section>
  );
}
