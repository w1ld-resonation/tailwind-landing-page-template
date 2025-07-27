import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          
          {/* Branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Навигация */}
          <ul className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm font-medium text-gray-700">
            <li><Link href="/about" className="hover:text-gray-900">О нас</Link></li>
            <li><Link href="/api" className="hover:text-gray-900">API</Link></li>
            <li><Link href="/partners" className="hover:text-gray-900">Партнёрам</Link></li>
            <li><Link href="/contact" className="hover:text-gray-900">Контакты</Link></li>
          </ul>

          {/* CTA */}
          <div className="flex flex-1 items-center justify-end gap-3">
            <Link
              href="https://t.me/wildflow"
              className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
            >
              Telegram
            </Link>
            <Link
              href="/launch"
              className="btn-sm bg-blue-700 text-white shadow-sm hover:bg-blue-800"
            >
              Запуск
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
