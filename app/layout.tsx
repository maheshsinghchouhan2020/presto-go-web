import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://presto-go-web.vercel.app/"),
  title: {
    default: "Presto-Go | Order & Pay at Bars Instantly",
    template: "%s | Presto-Go",
  },
  description:
    "Order and pay at your favorite bars instantly. Skip the line, enjoy more time with friends.",
  applicationName: "Presto",
  keywords: [
    "bars",
    "drinks",
    "food",
    "order ahead",
    "skip line",
    "nightlife",
    "group orders",
    "split bill",
    "menu",
    "fast",
    "preorder",
  ],
  authors: [{ name: "Presto-Go" }],
  creator: "Presto-Go",
  publisher: "Presto-Go",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://presto-go-web.vercel.app/",
    title: "Presto-Go | Order & Pay at Bars Instantly",
    description:
      "Order and pay at your favorite bars instantly. Skip the line, enjoy more time with friends.",
    siteName: "Presto-Go",
    images: [
      {
        url: "/presto_logo.png",
        width: 1200,
        height: 630,
        alt: "Presto-Go - Premium Bar Ordering Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Presto-Go | Order & Pay at Bars Instantly",
    description:
      "Order and pay at your favorite bars instantly. Skip the line, enjoy more time with friends.",
    images: ["/presto_logo.png"],
    creator: "@prestogo_cheers",
  },
  icons: {
    icon: "/presto_logo.png",
    shortcut: "/presto_logo.png",
    apple: "/presto_logo.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
