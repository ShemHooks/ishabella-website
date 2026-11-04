import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ishabella Corp | HVACR & Solar Solutions",
  description: "HVACR supplies and solar energy solutions in the Philippines.",
  icons: {
    icon: "/logo-no-bg.png",
    shortcut: "/logo-no-bg.png",
    apple: "/logo-no-bg.png",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
