import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://memberlegacy.com"),
  title: {
    default: "Member Legacy | Family Continuity for Membership Organizations",
    template: "%s | Member Legacy",
  },
  description:
    "Member Legacy offers family continuity programs built around the products and services members already value.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Member Legacy",
    title: "Turn what members value today into protection their families can rely on tomorrow.",
    description:
      "Family continuity programs built around the products and services members already value.",
    url: "/",
    images: [
      {
        url: "/og-membership.png",
        width: 1731,
        height: 909,
        alt: "Member Legacy family continuity for membership-based organizations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turn what members value today into protection their families can rely on tomorrow.",
    description:
      "Family continuity programs built around the products and services members already value.",
    images: ["/og-membership.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#173a32",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
