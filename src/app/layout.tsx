import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haywood Analytics — WNC Business Intelligence",
  description:
    "We turn your Square exports, website traffic, and loyalty data into a clear picture of who your best customers are — and exactly what to do about it. Built for independent WNC businesses.",
  openGraph: {
    title: "Haywood Analytics",
    description:
      "Know your best customers. Bring them back. Built for independent WNC businesses.",
    url: "https://haywood-analytics.vercel.app",
    siteName: "Haywood Analytics",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
