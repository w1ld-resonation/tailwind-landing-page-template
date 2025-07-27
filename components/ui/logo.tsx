import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="WILDFLOW">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Внешний круг — граница мира */}
        <circle cx="32" cy="32" r="30" stroke="#2563EB" strokeWidth="2" />

        {/* Интеграция символа ∞ */}
        <path
          d="M22 32c0-5 8-5 8 0s8 5 8 0-8-5-8 0"
          stroke="#2563EB"
          strokeWidth="2"
          fill="none"
        />

        {/* Упрощённое око в центре */}
        <path
          d="M32 24c4 0 7 4 7 8s-3 8-7 8-7-4-7-8 3-8 7-8z"
          stroke="#2563EB"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="32" cy="32" r="2" fill="#2563EB" />

        {/* Вспышка сверху — как свет над оком */}
        <path
          d="M32 10v4M32 50v4M50 32h4M10 32h4M44.5 19.5l2.8-2.8M19.5 44.5l-2.8 2.8M44.5 44.5l2.8 2.8M19.5 19.5l-2.8-2.8"
          stroke="#2563EB"
          strokeWidth="1.5"
        />
      </svg>
      <span className="text-lg font-bold tracking-tight text-blue-700">WILDFLOW</span>
    </Link>
  );
}
