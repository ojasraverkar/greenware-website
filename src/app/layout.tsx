import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Greenware Sustainables | Areca Leaf Plates & Compostable Tableware Pune",
  description:
    "Premium areca leaf plates, bowls and cutlery for catering, weddings, events and food service. Bulk supply across Pune and Maharashtra.",
  metadataBase: new URL("https://greenware-website.vercel.app/"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Greenware Sustainables | Areca Leaf Plates & Compostable Tableware Pune",
    description: "Areca leaf plates, bowls, trays, and wooden cutlery for catering, weddings, and events in Pune.",
    url: "/",
    siteName: "Greenware Sustainables",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/assets/catalog-front-products.webp", width: 990, height: 500, alt: "Greenware Sustainables areca leaf tableware" }],
  },
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
