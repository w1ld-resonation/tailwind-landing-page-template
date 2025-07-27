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
        width="24"
        height="16"
        viewBox="0 0 64 32"
        fill="none"
        className="mt-[1px]"
      >
        {/* Волна 1 */}
        <path
          d="M0 6c4-4 8 4 12 0s8 4 12 0s8 4 12 0"
          stroke="#2563EB"
          strokeWidth="2"
        />
        {/* Волна 2 */}
        <path
          d="M0 12c4-4 8 4 12 0s8 4 12 0s8 4 12 0"
          stroke="#2563EB"
          strokeWidth="2"
        />
        {/* Волна 3 */}
        <path
          d="M0 18c4-4 8 4 12 0s8 4 12 0s8 4 12 0"
          stroke="#2563EB"
          strokeWidth="2"
        />
      </svg>

      <span className="text-lg font-extrabold tracking-tight text-blue-700">
        WILDFLOW
      </span>
    </Link>
  );
}
