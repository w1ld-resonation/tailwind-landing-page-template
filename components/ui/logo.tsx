import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-block text-lg font-extrabold tracking-tight text-blue-700"
      aria-label="WILDFLOW"
    >
      WILDFLOW
    </Link>
  );
}
