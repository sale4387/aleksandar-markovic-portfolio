import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aleksandar Marković | Portfolio",
  description: "Personal portfolio of Aleksandar Marković.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
