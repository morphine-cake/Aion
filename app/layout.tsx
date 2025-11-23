import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AION — Minimal Pomodoro Timer",
  description:
    "AION helps you focus with a minimalist design, rhythmic sessions, and a distraction-free environment.",
  keywords: [
    "aion pomodoro",
    "pomodoro timer",
    "focus timer",
    "productivity app",
    "time management",
    "deep work timer",
    "minimalist pomodoro",
    "zen pomodoro",
    "study timer",
    "work session timer",
    "focus tool",
    "break timer",
  ],
  authors: [{ name: "Burak Başcı", url: "https://burakbasci.com" }],
  creator: "Burak Başcı",
  publisher: "Burak Başcı",
  openGraph: {
    title: "AION — Minimal Pomodoro Timer",
    description:
      "AION helps you focus with a minimalist design, rhythmic sessions, and a distraction-free environment.",
    url: "https://aion.burakbasci.com",
    siteName: "AION",
    images: [
      {
        url: "/SEO-image/OG.png",
        width: 1200,
        height: 630,
        alt: "AION Pomodoro Timer Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AION — Minimal Pomodoro Timer",
    description:
      "AION helps you focus with a minimalist design, rhythmic sessions, and a distraction-free environment.",
    creator: "@burakbasci",
    images: ["/SEO-image/Twitter-Image.png"],
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon/favicon-32x32-light.png",
        href: "/favicon/favicon-32x32-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon/favicon-32x32-dark.png",
        href: "/favicon/favicon-32x32-dark.png",
      },
    ],
    apple: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon/apple-touch-icon-180x180-light.png",
        href: "/favicon/apple-touch-icon-180x180-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon/apple-touch-icon-180x180-dark.png",
        href: "/favicon/apple-touch-icon-180x180-dark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

