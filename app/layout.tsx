import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://memberlegacy.com"),
  title: {
    default: "Member Legacy | A Benefit Families Remember",
    template: "%s | Member Legacy",
  },
  description:
    "Member Legacy helps membership businesses extend a trusted member relationship to the family through a sponsor funded continuity benefit.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Member Legacy",
    title: "Turn membership into something families remember.",
    description:
      "A family continuity benefit designed around your membership, your members, and your economics.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turn membership into something families remember.",
    description:
      "A family continuity benefit designed around your membership, your members, and your economics.",
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
