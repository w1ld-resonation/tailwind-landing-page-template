export const metadata = {
  title: "Access by Invitation – WILDFLOW",
  description: "WILDFLOW is available to selected partners and clients by invitation only.",
};

export default function SignUp() {
  return (
    <>
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Access by invitation</h1>
        <p className="mt-2 text-sm text-gray-500">
          WILDFLOW is a private infrastructure platform for selected partners and organizations.
        </p>
        <div className="mt-1 text-[10px] font-mono uppercase tracking-wide text-blue-700">
          In Web3 We Trust
        </div>
      </div>

      <div className="text-center text-gray-700 space-y-4">
        <p>
          We currently do not support public sign-ups.
        </p>
        <p>
          If you received an invitation, follow the link provided in your email to create your account.
        </p>
        <p>
          For partnership inquiries, please contact us at{" "}
          <a
            className="text-blue-600 underline hover:no-underline"
            href="mailto:support@wildflow.dev"
          >
            support@wildflow.dev
          </a>.
        </p>
      </div>
    </>
  );
}
