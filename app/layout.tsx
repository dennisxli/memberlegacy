import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://memberlegacy.com"),
  title: {
    default: "Member Legacy | Product-Connected Family Protection",
    template: "%s | Member Legacy",
  },
  description:
    "Member Legacy designs family protection programs around the products and services customers already value, aligning benefit design, insurance economics, operations, and measurement.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Member Legacy",
    title: "Turn what customers rely on today into protection their families can rely on tomorrow.",
    description:
      "Product-connected family protection designed around your customer promise, economics, and operating model.",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Member Legacy product-connected family protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turn what customers rely on today into protection their families can rely on tomorrow.",
    description:
      "Product-connected family protection designed around your customer promise, economics, and operating model.",
    images: ["/og.png"],
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
