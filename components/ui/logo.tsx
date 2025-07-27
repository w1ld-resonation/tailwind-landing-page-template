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
        viewBox="0 0 64 32"
        fill="none"
      >
        {/* Первая волна */}
        <path
          d="M4 24c4-4 8 4 12 0s8 4 12 0s8 4 12 0"
          stroke="#2563EB"
          strokeWidth="2"
          fill="none"
        />
        {/* Вторая волна ниже */}
        <path
          d="M4 28c4-4 8 4 12 0s8 4 12 0s8 4 12 0"
          stroke="#2563EB"
          strokeWidth="2"
          fill="none"
        />
        {/* Третья волна ещё ниже */}
        <path
          d="M4 32c4-4 8 4 12 0s8 4 12 0s8 4 12 0"
          stroke="#2563EB"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <span className="text-lg font-bold tracking-tight text-blue-700">
        WILDFLOW
      </span>
    </Link>
  );
}
