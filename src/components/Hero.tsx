import Image from "next/image";
import { ArrowDownToLine, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#fbfaf5] pt-24">
      <div className="mx-auto grid min-h-[calc(100svh-2rem)] max-w-7xl items-center gap-10 px-5 pb-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pb-20">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#7a613d]">
            Greenware Sustainables
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] text-[#1e3328] sm:text-6xl lg:text-7xl">
            Sustainable Celebrations.
            <br />
            Naturally Served.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#596458]">
            Premium compostable tableware crafted from naturally fallen areca
            leaves. For homes. For events. For a better tomorrow.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/assets/greenware_catalogue_jun26.pdf"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[#24543a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173d29]"
            >
              View Catalogue
              <ArrowDownToLine aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="tel:+919850904972"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-[#24543a]/25 bg-white px-5 text-sm font-semibold text-[#24543a] transition hover:border-[#24543a]"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              +91 98509 04972
            </a>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-y border-[#d8d2c2] py-6">
            {[
              ["11+", "Product variants"],
              ["100%", "Compostable"],
              ["Areca", "Leaf range"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-2xl font-semibold text-[#1e3328]">{value}</dt>
                <dd className="mt-1 text-sm text-[#6a7468]">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="overflow-hidden rounded-[8px] border border-[#e5dfd1] bg-white p-3 shadow-2xl shadow-[#1d2b1f]/12">
          <Image
            src="/assets/catalog-front-products.webp"
            alt="Greenware Sustainables areca leaf tableware from the product catalog"
            width={990}
            height={500}
            priority
            className="aspect-[1.98/1] w-full rounded-[6px] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
