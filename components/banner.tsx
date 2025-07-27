"use client";

import { useState } from "react";

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true);

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 z-50 w-full md:bottom-8 md:right-12 md:w-auto">
          <div className="flex items-center justify-between bg-blue-900 p-3 text-sm text-white shadow-lg md:rounded-sm">
            <div className="inline-flex flex-wrap gap-1 items-center text-white/90">
              <span>WILDFLOW is launching soon.</span>
              <a
                className="font-medium text-white underline underline-offset-2 hover:text-emerald-400"
                href="https://t.me/wildflow"
                target="_blank"
                rel="noreferrer"
              >
                Join us on Telegram
              </a>
              <span className="hidden sm:inline">to stay updated.</span>
            </div>
            <button
              className="ml-3 border-l border-blue-700 pl-3 text-white/70 hover:text-white"
              onClick={() => setBannerOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
