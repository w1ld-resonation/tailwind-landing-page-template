import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="WILDFLOW">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle cx="16" cy="16" r="14" stroke="#2563EB" strokeWidth="2" />
        <path d="M10 16h12M16 10v12" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="text-lg font-bold tracking-tight text-blue-700">WILDFLOW</span>
    </Link>
  );
}
