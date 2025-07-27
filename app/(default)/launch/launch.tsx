export default function LaunchPage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold text-white mb-4">🚀 Запуск проекта</h1>
      <p className="text-lg text-gray-300 mb-6">
        Расскажите нам о своей идее, и мы поможем воплотить её в реальность.
      </p>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Ваше имя"
          className="w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-white"
        />
        <textarea
          placeholder="Опишите проект"
          className="w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-white"
          rows={5}
        />
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 p-3 text-white hover:bg-blue-700"
        >
          Отправить
        </button>
      </form>
    </main>
  );
}
