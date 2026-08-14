import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aleksandar (Sale) Marković | Portfolio",
  description: "Personal portfolio of Aleksandar (Sale) Marković.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
