import {
  BadgeCheck,
  ChefHat,
  Leaf,
  PackageCheck,
  Recycle,
  ShieldCheck,
  Sparkles,
  Utensils,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import { products } from "@/src/data/products";

const highlights = [
  {
    icon: Leaf,
    title: "Naturally sourced",
    text: "Made from fallen areca palm leaves with visible natural texture in every piece.",
  },
  {
    icon: Recycle,
    title: "Compostable after use",
    text: "A practical alternative for serving food without plastic coatings or foam waste.",
  },
  {
    icon: ShieldCheck,
    title: "Built for food service",
    text: "Sturdy enough for catered meals, buffets, takeaways, and everyday serving.",
  },
];

const useCases = [
  "Weddings",
  "Catering",
  "Corporate Events",
  "Resorts",
  "Cafes",
  "Home Gatherings",
];

const categories = ["Plates & Trays", "Bowls", "Cutlery"] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf5] text-[#1e3328]">
      <Navbar />
      <Hero />

      <section id="products" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a613d]">
                Product range
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#1e3328] sm:text-5xl">
                Catalogue products for every serving format.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#596458] lg:justify-self-end">
              Choose plain plates for classic service, compartment plates for
              thalis and meals, rectangular trays for snacks, compact bowls for
              sides, and wooden cutlery for complete takeaway or event kits.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <section
                key={category}
                className="rounded-[8px] border border-[#e5dfd1] bg-[#fbfaf5] p-5"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-[8px] bg-[#24543a] text-white">
                    {category === "Plates & Trays" ? (
                      <Utensils className="h-5 w-5" aria-hidden="true" />
                    ) : category === "Bowls" ? (
                      <ChefHat className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PackageCheck className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>

                <div className="space-y-3">
                  {products
                    .filter((product) => product.category === category)
                    .map((product) => (
                      <article
                        key={`${product.name}-${product.type ?? product.category}`}
                        className="rounded-[8px] bg-white p-4 shadow-sm shadow-black/5"
                      >
                        <div className="mb-4 flex aspect-square items-center justify-center rounded-[8px] bg-[#fbfaf5] p-4">
                          <Image
                            src={product.image}
                            alt={product.imageAlt}
                            width={420}
                            height={420}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h4 className="font-semibold text-[#24392e]">
                              {product.name}
                            </h4>
                            {product.type ? (
                              <p className="mt-1 text-sm font-medium text-[#7a613d]">
                                {product.type}
                              </p>
                            ) : null}
                          </div>
                          <BadgeCheck
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#5d8b52]"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-[#667064]">
                          {product.idealFor}
                        </p>
                      </article>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf5] py-18 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a613d]">
                Perfect For
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#1e3328] sm:text-5xl">
                Made for every gathering.
              </h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item}
                className="flex min-h-20 items-center gap-3 rounded-[8px] border border-[#dcd5c7] bg-white px-5 shadow-sm shadow-black/5"
              >
                <Sparkles className="h-5 w-5 shrink-0 text-[#8d6b35]" aria-hidden="true" />
                <span className="font-medium text-[#2b4235]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-greenware" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a613d]">
                Why Greenware
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Better materials for meals that matter.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[8px] border border-[#dcd5c7] bg-white p-5 shadow-sm shadow-black/5"
                >
                  <item.icon className="h-6 w-6 text-[#5d8b52]" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#667064]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section id="contact" className="bg-[#1e3328] py-18 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#dbc58d]">
              Bulk orders and enquiries
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Planning an Event?
              <br />
              Let&apos;s make it sustainable.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Share your quantity, product mix, and delivery location. Greenware
              will help you choose the right sizes for your serving plan.
            </p>
            <div className="mt-6 space-y-2 text-sm font-medium text-white/80">
              <p>+91 98509 04972 | +91 84460 56209</p>
              <p>greenware.sustainable@gmail.com</p>
              <p>Pune, Maharashtra</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="/assets/greenware_catalogue_jun26.pdf"
              className="inline-flex h-12 items-center justify-center rounded-[8px] bg-white px-6 text-sm font-semibold text-[#1e3328] transition hover:bg-[#f0ead9]"
            >
              View Catalogue
            </a>
            <a
              href="tel:+919850904972"
              className="inline-flex h-12 items-center justify-center rounded-[8px] border border-white/25 px-6 text-sm font-semibold text-white transition hover:border-white"
            >
              Call +91 98509 04972
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#14241c] px-5 py-6 text-sm text-white/60 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Greenware Sustainables</p>
          <p>Compostable plates, bowls, trays, and cutlery.</p>
        </div>
      </footer>
      <a
        href="https://wa.me/919850904972"
        aria-label="Chat with Greenware Sustainables on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#24543a] text-white shadow-xl shadow-black/20 transition hover:bg-[#173d29] sm:h-auto sm:w-auto sm:gap-2 sm:rounded-[8px] sm:px-5 sm:py-4 sm:text-sm sm:font-semibold"
      >
        <MessageCircle aria-hidden="true" className="h-6 w-6 sm:h-5 sm:w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </main>
  );
}
