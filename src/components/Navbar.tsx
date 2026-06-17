import { MessageCircle } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "#products", label: "Products" },
  { href: "#why-greenware", label: "Why Greenware" },
  { href: "/assets/greenware_catalogue_jun26.pdf", label: "Catalogue" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#fbfaf5]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center" aria-label="Greenware Sustainables home">
          <Image
            src="/assets/logo-cropped.webp"
            alt="Greenware Sustainables"
            width={1830}
            height={838}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-[#536052] md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[#1e3328]">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/919850904972"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] bg-[#24543a] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173d29]"
        >
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
