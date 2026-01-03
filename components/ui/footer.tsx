import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`py-8 md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
              : ""
          }`}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Logo + Legal */}
            <div className="space-y-2">
              <Logo />

              <div className="text-sm text-gray-600">
                &copy; {new Date().getFullYear()} WILDFLOW LLC. Unleashing flow.
              </div>

              <div className="text-xs text-gray-500">
                CUIT: 30-XXXXXXXX-X
              </div>

              <div className="text-xs font-mono uppercase tracking-wide text-blue-700">
                In Web3 We Trust
              </div>
            </div>

            {/* Email */}
            <div className="text-sm font-mono text-gray-600 hover:text-black transition">
              <a
                className="underline underline-offset-4"
                href="mailto:contact@wildflow.dev"
              >
                contact@wildflow.dev
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Glow + Background Title */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[340px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['WILDFLOW'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['WILDFLOW'] after:[text-shadow:0_1px_0_white]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3">
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]" />
        </div>
      </div>
    </footer>
  );
}
