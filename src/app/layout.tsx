import type { Metadata } from "next";

import "../styles/tailwind.css";

export const metadata: Metadata = {
  title: "Ingrid Lindemann",
  description: "Portfolio von Ingrid Lindemann",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      { rel: "icon", type: "image/x-icon", url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      {/* <html lang="en"> */}
      <body className="antialiased">{children}</body>
    </html>
  );
}
