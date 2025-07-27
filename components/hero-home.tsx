"use client";

import { useState, useEffect } from "react";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  const [command, setCommand] = useState("");
  const fullCommand = "build flow —easy —scalable —secure";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCommand(fullCommand.slice(0, i));
      i++;
      if (i > fullCommand.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      <PageIllustration />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <h1 className="mb-6 border-y text-5xl font-bold text-gray-900 [border-image:linear-gradient(to_right,transparent,var(--color-slate-300),transparent)1] md:text-6xl">
              Meet the team
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-6 text-lg text-gray-700">
                WILDFLOW is a team of developers building secure, API-first, integrated systems — from simple websites to global platforms.
              </p>
              <p className="mb-8 text-base text-gray-500">
                We develop full-stack solutions, custom APIs, storefronts, integrations, e-commerce solutions, licensing automation, and infrastructure you can truly own.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,var(--color-slate-300),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,var(--color-slate-300),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
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
                  <span className="ml-2 text-white"> {command}</span>
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
