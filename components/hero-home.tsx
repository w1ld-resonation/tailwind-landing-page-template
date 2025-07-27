"use client";

import { useState } from "react";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative">
      <PageIllustration />

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">🚀 Let's build together</h2>
            <p className="mb-6 text-sm text-gray-500">
              Tell us more about your project — and we'll help you deploy it with sovereignty.
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
                type="tel"
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

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold text-gray-900 [border-image:linear-gradient(to_right,transparent,var(--color-slate-300),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Meet the team
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-6 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                WILDFLOW is a team of developers building secure, API-first, integrated systems — from simple websites to global platforms.
              </p>
              <p
                className="mb-8 text-base text-gray-500"
                data-aos="zoom-y-out"
                data-aos-delay={350}
              >
                We develop full-stack solutions, custom APIs, storefronts, integrations, e-commerce solutions, licensing automation, and infrastructure you can truly own.
              </p>

              {/* CTA Buttons */}
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
                  href="mailto:support@wildflow.dev"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,var(--color-slate-300),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,var(--color-slate-300),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  wildflow.dev
                </span>
              </div>
              <div className="font-mono text-gray-400 space-y-1 text-sm sm:text-base">
  <div className="text-gray-600">Last login: {new Date().toLocaleString()} on ttys001</div>
  <div>
    <span className="text-blue-400">wildflow.dev</span> ~ %
    <span className="text-white"> build flow</span>
    <span className="text-gray-500"> —easy —scalable —secure</span>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
