"use client";

import { useState } from "react";
import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Cta() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section>
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
              onClick={() => {
                setOpen(false);
                setSubmitted(false);
              }}
              aria-label="Close"
            >
              ×
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold mb-2 text-gray-900">🚀 Start your project</h2>
                <p className="mb-6 text-sm text-gray-500">
                  Tell us more about your project — and we'll help you deploy it with sovereignty.
                </p>
                <form
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    const response = await fetch("https://formspree.io/f/xgvzynvl", {
                      method: "POST",
                      headers: { Accept: "application/json" },
                      body: formData,
                    });
                    if (response.ok) {
                      setSubmitted(true);
                      form.reset();
                    } else {
                      alert("There was an error sending your message.");
                    }
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full border p-3 rounded bg-gray-50"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded bg-gray-50"
                    required
                  />
                  <input
                    type="url"
                    name="website"
                    placeholder="https://"
                    defaultValue=""
                    onFocus={(e) => {
                      if (!e.target.value) e.target.value = "https://";
                    }}
                    onBlur={(e) => {
                      if (e.target.value && !e.target.value.startsWith("http")) {
                        e.target.value = "https://" + e.target.value;
                      }
                    }}
                    className="w-full border p-3 rounded bg-gray-50"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="w-full border p-3 rounded bg-gray-50"
                  />
                  <textarea
                    name="message"
                    placeholder="Tell us briefly about your project"
                    className="w-full border p-3 rounded bg-gray-50"
                    rows={4}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-green-700 mb-2">✅ Your request has been received.</h3>
                <p className="text-gray-600">Our team will review your case and contact you shortly.</p>
                <button
                  onClick={() => {
                    setOpen(false);
                    setSubmitted(false);
                  }}
                  className="mt-6 text-blue-600 hover:underline"
                >
                  Go back
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA Block */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>

          {/* Background stripes */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>

          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,var(--color-slate-700),transparent)1] md:mb-12 md:text-4xl">
              Deploy modern infrastructure with WILDFLOW
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <button
                onClick={() => setOpen(true)}
                className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 text-white shadow-sm hover:brightness-110 sm:mb-0 sm:w-auto"
              >
                <span className="relative inline-flex items-center">
                  Start your project{" "}
                  <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
