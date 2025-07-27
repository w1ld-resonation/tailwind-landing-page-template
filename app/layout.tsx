import "./css/style.css";
import { Inter } from "next/font/google";

// Подключение шрифта Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Метаданные сайта
export const metadata = {
  title: "WILDFLOW — Global Infrastructure Studio",
  description:
    "WILDFLOW empowers creators and teams with accessible, borderless infrastructure — from APIs and automations to cloud-native deployments. Own your tools. Scale your freedom.",
};

// Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
