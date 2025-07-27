import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* Company Info */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} WILDFLOW LLC. Empowering ideas. Unleashing flow.
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <h3 className="text-sm font-medium">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-600 hover:text-black transition" href="#about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-black transition" href="#api">
                  API Access
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-black transition" href="#partners">
                  Partners
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-black transition" href="#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <h3 className="text-sm font-medium">Contact</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Tbilisi, Georgia</li>
              <li>
                <a className="hover:text-black transition" href="mailto:hello@wildflow.io">
                  hello@wildflow.io
                </a>
              </li>
              <li>
                <a className="hover:text-black transition" href="https://t.me/wildflow" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Glow + Title */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[340px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['WILDFLOW'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['WILDFLOW'] after:[text-shadow:0_1px_0_white]"></div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
