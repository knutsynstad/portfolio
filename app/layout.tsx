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
      <body className={inter.className + " bg-black"}>
        <div className="pt-32 pl-32 pr-32 pb-64 flex justify-center bg-white rounded-br-3xl rounded-bl-3xl">
          <div className="w-full max-w-[840px]">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
