import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M7X | Developer, Designer, AI Enthusiast",
  description:
    "M7X builds futuristic digital experiences with code, design and AI technology.",
  keywords: [
    "M7X",
    "portfolio",
    "developer",
    "designer",
    "AI",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "M7X" }],
  creator: "M7X",
  openGraph: {
    title: "M7X | Digital Experiences",
    description:
      "A futuristic portfolio for M7X, focused on web products, AI systems and polished interfaces.",
    type: "website",
    locale: "en_US",
    siteName: "M7X Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "M7X | Digital Experiences",
    description: "Developer, designer and AI enthusiast building the future.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
