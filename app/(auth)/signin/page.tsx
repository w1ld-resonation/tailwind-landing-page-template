export const metadata = {
  title: "Sign in – WILDFLOW",
  description: "Secure access to your WILDFLOW dashboard and cloud tools.",
};

import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Access WILDFLOW</h1>
        <p className="mt-2 text-gray-500 text-sm">
          Secure entry to your infrastructure control panel
        </p>
      </div>

      <form>
        <div className="space-y-4">
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              className="form-input w-full py-2"
              type="email"
              placeholder="you@wildflow.dev"
              required
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              className="form-input w-full py-2"
              type="password"
              autoComplete="on"
              placeholder="••••••••"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="btn w-full bg-blue-600 text-white hover:bg-blue-700 transition">
            Sign In
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <Link
          className="text-sm text-gray-600 underline hover:no-underline"
          href="/reset-password"
        >
          Forgot your password?
        </Link>
      </div>
    </>
  );
}
