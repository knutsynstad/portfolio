import type { Metadata } from "next";

const siteName = "Knut Synstad";

export function projectMetadata(title: string, description: string): Metadata {
  const fullTitle = `${title} - ${siteName}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
