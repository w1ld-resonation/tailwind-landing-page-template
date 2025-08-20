import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-block text-lg font-extrabold tracking-tight text-blue-700 hover:text-blue-800 transition"
      aria-label="WILDFLOW"
      title="In Web3 We Trust"
    >
      WILDFLOW
    </Link>
  );
}
