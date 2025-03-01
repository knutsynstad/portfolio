import "@/globals.css";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
      <GoogleAnalytics gaId="G-FMTKXE7EFK" />
      <body className={inter.className + " bg-black"}>
        <div className="p-8 sm:p-16 md:p-32 flex justify-center bg-white rounded-br-3xl rounded-bl-3xl">
          <div className="w-full max-w-[840px]">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
