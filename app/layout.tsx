import "@/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Knut Synstad",
  description:
    "I'm Knut, a San-Francisco-based designer and developer. Currently the design lead for Reddit's Developer Platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-32 flex justify-center`}>
        <div className="max-w-4xl">
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
