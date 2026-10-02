export const categories = ["Plates & Trays", "Bowls", "Cutlery"] as const;
export const useCaseFilters = ["Weddings", "Catering", "Cafes", "Events", "Home", "Takeaway"] as const;

export type ProductCategory = (typeof categories)[number];
export type Product = {
  id: string;
  name: string;
  type?: string;
  category: ProductCategory;
  size: string;
  description: string;
  idealFor: string;
  useCases: string[];
  tags: string[];
  price: number;
  packSize: number;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

const plate = (id: string, name: string, type: string | undefined, size: string, description: string, idealFor: string, price: number, image: string, imageAlt: string, useCases: string[], featured = false): Product => ({ id, name, type, category: "Plates & Trays", size, description, idealFor, price, packSize: 25, image, imageAlt, useCases, tags: ["areca", "leaf", "plate", ...name.toLowerCase().split(" "), ...(type?.toLowerCase().split(" ") ?? [])], featured });

export const products: Product[] = [
  plate("plate-12-round", '12" Round Plate', "Plain", "12 inch", "A generous round plate with a natural leaf texture for full meals.", "Full meals and buffet service", 250, "/assets/products-optimized/12in_plain.webp", "12 inch plain round areca leaf plate", ["Weddings", "Catering", "Events", "Home"], true),
  plate("plate-12-compartment", '12" Round Plate', "4 Compartments", "12 inch", "A compartment format that keeps a complete meal neatly served.", "Thalis, catered meals, and events", 300, "/assets/products-optimized/12in_4cp.webp", "12 inch round areca leaf plate with 4 compartments", ["Weddings", "Catering", "Events", "Takeaway"], true),
  plate("plate-10-round", '10" Round Plate', "Plain", "10 inch", "A versatile everyday round plate for lunch and dinner service.", "Lunch plates and dinner service", 175, "/assets/products-optimized/10in_plain.webp", "10 inch plain round areca leaf plate", ["Catering", "Cafes", "Events", "Home"]),
  plate("plate-10-compartment", '10" Round Plate', "4 Compartments", "10 inch", "A practical portioned plate for meals and convenient takeaways.", "Portioned meals and takeaways", 225, "/assets/products-optimized/10in_4cp.webp", "10 inch round areca leaf plate with 4 compartments", ["Catering", "Events", "Takeaway"]),
  plate("plate-8-round", '8" Round Plate', "Plain", "8 inch", "A compact round plate for breakfast, desserts, and side servings.", "Desserts, breakfast, and sides", 140, "/assets/products-optimized/8in_plain.webp", "8 inch plain round areca leaf plate", ["Cafes", "Events", "Home"]),
  plate("plate-6-square", '6" Square Plate', "Plain", "6 inch", "A small square plate suited to tasting portions and small bites.", "Tasting portions and small bites", 130, "/assets/products-optimized/6in_square.webp", "6 inch plain square areca leaf plate", ["Cafes", "Events", "Home"]),
  plate("tray-9x6", '9" x 6" Tray', "Plain", "9 x 6 inch", "A rectangular tray for snacks, rolls, sandwiches, and takeaway portions.", "Snacks, rolls, sandwiches, and takeaway portions", 150, "/assets/products-optimized/9x6.webp", "9 by 6 inch rectangular areca leaf tray", ["Cafes", "Events", "Takeaway"]),
  { id: "bowl-3-5", name: '3.5" Bowl', category: "Bowls", size: "3.5 inch", description: "A compact areca leaf bowl for chutneys, dips, desserts, and small servings.", idealFor: "Chutneys, dips, and desserts", useCases: ["Catering", "Cafes", "Events", "Home"], tags: ["areca", "leaf", "bowl", "dips", "dessert", "3.5"], price: 65, packSize: 25, image: "/assets/products-optimized/bowl.webp", imageAlt: "3.5 inch areca leaf bowl" },
  { id: "bowl-4", name: '4" Bowl', category: "Bowls", size: "4 inch", description: "A compact areca leaf bowl for chutneys, dips, and desserts.", idealFor: "Chutneys, dips, and desserts", useCases: ["Catering", "Cafes", "Events", "Home"], tags: ["areca", "leaf", "bowl", "dips", "dessert"], price: 75, packSize: 25, image: "/assets/products-optimized/bowl.webp", imageAlt: "4 inch areca leaf bowl" },
  { id: "bowl-5", name: '5" Bowl', category: "Bowls", size: "5 inch", description: "A useful bowl for curries, salads, snacks, and accompanying dishes.", idealFor: "Curries, salads, and snacks", useCases: ["Weddings", "Catering", "Events", "Home"], tags: ["areca", "leaf", "bowl", "curry", "salad"], price: 100, packSize: 25, image: "/assets/products-optimized/bowl.webp", imageAlt: "Medium areca leaf bowl", featured: true },
  { id: "spoon", name: "Areca Leaf Spoon", category: "Cutlery", size: "Standard", description: "An areca leaf spoon for serving and assembling complete food kits.", idealFor: "Serving and takeaway kits", useCases: ["Weddings", "Catering", "Cafes", "Events", "Takeaway"], tags: ["areca", "leaf", "spoon", "cutlery", "takeaway"], price: 75, packSize: 25, image: "/assets/products-optimized/spoon.webp", imageAlt: "Areca leaf spoon", featured: true },
];

export const recommendations = [
  { id: "event-place-setting", title: "Event place setting", description: "A complete plate and areca leaf spoon combination for large gatherings.", productIds: ["plate-12-round", "spoon"] },
  { id: "served-meal", title: "Served meal kit", description: "Compartment plate, bowl, and cutlery for a well-rounded meal service.", productIds: ["plate-10-compartment", "bowl-5", "spoon"] },
];

export const productById = Object.fromEntries(products.map((product) => [product.id, product]));
