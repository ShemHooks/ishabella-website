import "./globals.css";
export const metadata = {
  title: "Ishabella Corp | HVACR & Solar Solutions",
  description: "HVACR supplies and solar energy solutions in the Philippines.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
