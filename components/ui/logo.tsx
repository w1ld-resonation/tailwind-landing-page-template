import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2"
      aria-label="WILDFLOW"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
      >
        {/* Внешнее солнце / круг */}
        <circle cx="32" cy="32" r="28" stroke="#2563EB" strokeWidth="2" />

        {/* Восходящий полукруг (как солнце) */}
        <path
          d="M16 32a16 16 0 0 1 32 0"
          stroke="#2563EB"
          strokeWidth="2"
          fill="none"
        />

        {/* Волна — flow */}
        <path
          d="M20 40c4-4 8 4 12 0s8 4 12 0"
          stroke="#2563EB"
          strokeWidth="2"
          fill="none"
        />

        {/* Маленькая стрелка — апдейт */}
        <path
          d="M44 20l4 0M48 20l-2 -2M48 20l-2 2"
          stroke="#2563EB"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <span className="text-lg font-bold tracking-tight text-blue-700">
        WILDFLOW
      </span>
    </Link>
  );
}
