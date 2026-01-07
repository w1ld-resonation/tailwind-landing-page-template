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
            <h1 className="mb-6 border-y text-5xl font-bold text-gray-900
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

              <div className="mb-10 rounded-lg border border-blue-100 bg-blue-50 p-6 text-left text-sm text-blue-900 shadow-inner">
                <h3 className="mb-2 text-base font-semibold text-blue-800">
                  🧠 What is Web3?
                </h3>
                <p className="mb-2">
                  Web3 is the next evolution of the internet — built on
                  decentralization, transparency, and user ownership.
                </p>
                <p className="mb-2">
                  At WILDFLOW, we build Web3-ready systems: permissionless APIs,
                  token-integrated platforms, and backend infrastructure.
                </p>
                <p className="text-blue-700">
                  → From smart contracts to verifiable data systems — we're
                  building with the future in mind.
                </p>
              </div>

              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <a
                  href="mailto:contact@wildflow.dev"
                  className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500
                    text-white shadow-sm hover:brightness-110 sm:mb-0 sm:w-auto"
                >
                  <span className="relative inline-flex items-center">
                    Send a request
                    <span className="ml-1 text-blue-300 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>

                <a
                  className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50
                    sm:ml-4 sm:w-auto"
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
