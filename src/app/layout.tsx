import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Greenware Sustainables | Areca Leaf Plates & Compostable Tableware Pune",
  description:
    "Premium areca leaf plates, bowls and cutlery for catering, weddings, events and food service. Bulk supply across Pune and Maharashtra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
