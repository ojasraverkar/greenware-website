import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import Storefront from "@/src/components/Storefront";
import { business } from "@/src/data/business";
import { products } from "@/src/data/products";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "LocalBusiness", name: business.name, url: business.website, telephone: business.phone, email: business.email, address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" } },
      ...products.map((product) => ({ "@type": "Product", name: `${product.name}${product.type ? ` - ${product.type}` : ""}`, description: product.description, image: `${business.website.replace(/\/$/, "")}${product.image}`, offers: { "@type": "Offer", priceCurrency: "INR", price: product.price, availability: "https://schema.org/InStock" } })),
    ],
  };
  return <main className="min-h-screen bg-[#fbfaf5] text-[#1e3328]"><Navbar /><Hero /><Storefront /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></main>;
}
