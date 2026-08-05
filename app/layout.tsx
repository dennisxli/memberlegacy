import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://memberlegacy.com"),
  title: {
    default: "Member Legacy | Loyalty That Outlives the Transaction",
    template: "%s | Member Legacy",
  },
  description:
    "A member-exclusive family support benefit designed to deepen loyalty and create measurable value for membership brands.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Member Legacy",
    title: "Member Legacy | Loyalty That Outlives the Transaction",
    description:
      "A member-exclusive family support benefit designed to deepen loyalty and create measurable value for membership brands.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Member Legacy | Loyalty That Outlives the Transaction",
    description:
      "A member-exclusive family support benefit designed to deepen loyalty and create measurable value for membership brands.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
