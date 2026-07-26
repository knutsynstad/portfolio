import "@/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const title = "Knut Synstad";
const description =
  "I'm Knut, a San-Francisco-based designer and developer. Currently the design lead for Reddit's Developer Platform.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black"}>
        <div className="p-8 sm:p-16 md:p-32 flex justify-center bg-white rounded-br-3xl rounded-bl-3xl">
          <div className="w-full max-w-210">{children}</div>
        </div>
        <Footer />
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
