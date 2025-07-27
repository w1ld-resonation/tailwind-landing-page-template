// app/launch/page.tsx
export default function LaunchPage() {
  return (
    <main className="min-h-screen px-4 py-20 bg-white text-gray-900">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">Let’s Build Together</h1>
        <p className="mb-8 text-lg">
          Tell us about your project, your goals, or just say hello. WILDFLOW is here to empower you.
        </p>

        <form className="space-y-6" action="mailto:support@wildflow.dev" method="POST" encType="text/plain">
          <div>
            <label className="block mb-1 font-medium">Your name</label>
            <input
              type="text"
              name="name"
              className="w-full rounded border border-gray-300 px-4 py-2"
              required
            />
          </div>
          <
