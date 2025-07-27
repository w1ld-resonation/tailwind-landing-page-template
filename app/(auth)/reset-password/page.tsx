export const metadata = {
  title: "Reset Password - WILDFLOW",
  description: "Securely reset access to your account",
};

export default function ResetPassword() {
  return (
    <>
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Reset your password</h1>
        <p className="mt-2 text-sm text-gray-600">
          Enter your email and we’ll send you a secure reset link.
        </p>
      </div>

      {/* Form */}
      <form>
        <div className="space-y-4">
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              id="email"
              className="form-input w-full py-2"
              type="email"
              placeholder="you@wildflow.dev"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 text-white shadow-sm hover:brightness-110">
            Send reset link
          </button>
        </div>
      </form>
    </>
  );
}
