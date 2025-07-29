"use client";

import { useEffect, useState } from "react";
import PageIllustration from "@/components/page-illustration";

const commandText = "build flow —easy —scalable —secure";

export default function HeroHome() {
  const [open, setOpen] = useState(false);
  const [typedCommand, setTypedCommand] = useState("");
  const [index, setIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (index < commandText.length) {
      const timeout = setTimeout(() => {
        setTypedCommand((prev) => prev + commandText[index]);
        setIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="relative">
      <PageIllustration />

      {/* MODAL */}
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
                <h2 className="text-2xl font-bold mb-2 text-gray-900">🚀 Let's build together</h2>
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
                    type="text"
                    name="company"
                    placeholder="Company"
                    className="w-full border p-3 rounded bg-gray-50"
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
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
                    placeholder="Brief description of your project"
                    className="w-full border p-3 rounded bg-gray-50"
                    rows={4}
                    required
                  />
                  {/* 💡 subject for email */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New project request from wildflow.dev"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
                  >
                    Submit Request
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

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold text-gray-900 [border-image:linear-gradient(to_right,transparent,var(--color-slate-300),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Meet the team
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-6 text-lg text-gray-700" data-aos="zoom-y-out" data-aos-delay={300}>
                WILDFLOW is a team of developers building secure, API-first, integrated systems — from simple websites to global platforms.
              </p>
              <p className="mb-8 text-base text-gray-500" data-aos="zoom-y-out" data-aos-delay={350}>
                We develop full-stack solutions, custom APIs, storefronts, integrations, e-commerce solutions, licensing automation, and infrastructure you can truly own.
              </p>
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
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
                <a
                  className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                  href="mailto:contact@wildflow.dev"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="mx-auto max-w-3xl" data-aos="zoom-y-out" data-aos-delay={600}>
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,var(--color-slate-300),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,var(--color-slate-300),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">wildflow.dev</span>
              </div>
              <div className="font-mono text-gray-400 space-y-1 text-sm sm:text-base">
                <div className="text-gray-600">Last login: {new Date().toLocaleString()} on ttys001</div>
                <div>
                  <span className="text-blue-400">wildflow.dev</span>
                  <span className="ml-1 text-white"> ~ %</span>
                  <span className="ml-2 text-white">{typedCommand}</span>
                  <span className="ml-2 text-white animate-pulse">█</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
