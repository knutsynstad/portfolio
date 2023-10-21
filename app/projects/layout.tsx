import "@/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-32 flex flex-col justify-center">
          <div className="max-w-4xl">
            {children}

            <Footer />
          </div>
        </div>

        <a
          href="/"
          className="fixed top-[32px] left-[32px] hover:fill-[rgba(0,0,0,0.3)] transition-all"
        >
          <svg
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16"
          >
            <path d="M480-160 160-480l320-320 57 56-224 224h487v80H313l224 224-57 56Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
