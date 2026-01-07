"use client";

import { useEffect, useState } from "react";
import PageIllustration from "@/components/page-illustration";

const commandText = "build flow —easy —scalable —secure";

export default function HeroHome() {
  const [typedCommand, setTypedCommand] = useState("");
  const [index, setIndex] = useState(0);

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

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold text-gray-900
              [border-image:linear-gradient(to_right,transparent,var(--color-slate-300),transparent)1]
              md:text-6xl"
            >
              Meet the team
            </h1>

            <div className="mx-auto max-w-3xl">
              <p className="mb-6 text-lg text-gray-700">
                WILDFLOW is a team of developers building secure, API-first,
                integrated systems — from simple websites to global platforms.
              </p>

              <p className="mb-6 text-base text-gray-500">
                We develop full-stack solutions, custom APIs, storefronts,
                integrations, e-commerce systems, licensing automation,
                and infrastructure you can truly trust.
              </p>

              {/* Single CTA */}
              <div className="flex justify-center">
                <a
                  className="btn bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                  href="mailto:contact@wildflow.dev"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="mx-auto max-w-3xl">
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[13px] font-medium text-white">
                  wildflow.dev
                </span>
              </div>

              <div className="font-mono text-gray-400 space-y-1 text-sm sm:text-base">
                <div className="text-gray-600">
                  Last login: {new Date().toLocaleString()} on ttys001
                </div>
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
