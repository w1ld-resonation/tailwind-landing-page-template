export const metadata = {
  title: "Create Account – WILDFLOW",
  description: "Register to access WILDFLOW infrastructure tools and services.",
};

export default function SignUp() {
  return (
    <>
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Create your account</h1>
        <p className="mt-2 text-gray-500 text-sm">
          Join WILDFLOW and start building sovereign infrastructure today.
        </p>
      </div>

      <form>
        <div className="space-y-4">
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Full name
            </label>
            <input
              id="name"
              className="form-input w-full py-2"
              type="text"
              placeholder="Selim Ataniiazov"
              required
            />
          </div>
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
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              id="phone"
              className="form-input w-full py-2"
              type="tel"
              placeholder="+995 555 123 456"
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

        <div className="mt-6 space-y-3">
          <button className="btn w-full bg-blue-600 text-white hover:bg-blue-700 transition">
            Create Account
          </button>
          <div className="text-center text-sm text-gray-400">or</div>
          <button className="btn w-full bg-gray-800 text-white hover:bg-gray-700 transition">
            Continue with GitHub
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        By signing up, you agree to our{" "}
        <a
          href="/terms"
          className="underline hover:no-underline text-gray-700"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="/privacy"
          className="underline hover:no-underline text-gray-700"
        >
          Privacy Policy
        </a>.
      </div>
    </>
  );
}
