export type Product = {
  name: string;
  type?: string;
  category: "Plates & Trays" | "Bowls" | "Cutlery";
  idealFor: string;
  quantity: number;
  price: number;
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    name: '12" Round Plate',
    type: "Plain",
    category: "Plates & Trays",
    idealFor: "Full meals and buffet service",
    quantity: 25,
    price: 250,
    image: "/assets/products-optimized/12in_plain.webp",
    imageAlt: '12 inch plain round areca leaf plate',
  },
  {
    name: '12" Round Plate',
    type: "4 Compartments",
    category: "Plates & Trays",
    idealFor: "Thalis, catered meals, and events",
    quantity: 25,
    price: 300,
    image: "/assets/products-optimized/12in_4cp.webp",
    imageAlt: '12 inch round areca leaf plate with 4 compartments',
  },
  {
    name: '10" Round Plate',
    type: "Plain",
    category: "Plates & Trays",
    idealFor: "Lunch plates and dinner service",
    quantity: 25,
    price: 175,
    image: "/assets/products-optimized/10in_plain.webp",
    imageAlt: '10 inch plain round areca leaf plate',
  },
  {
    name: '10" Round Plate',
    type: "4 Compartments",
    category: "Plates & Trays",
    idealFor: "Portioned meals and takeaways",
    quantity: 25,
    price: 225,
    image: "/assets/products-optimized/10in_4cp.webp",
    imageAlt: '10 inch round areca leaf plate with 4 compartments',
  },
  {
    name: '10" Square Plate',
    type: "3 Compartments",
    category: "Plates & Trays",
    idealFor: "Snacks, starters, and combo meals",
    quantity: 25,
    price: 250,
    image: "/assets/products-optimized/10in_square.webp",
    imageAlt: '10 inch square areca leaf plate with 3 compartments',
  },
  {
    name: '8" Round Plate',
    type: "Plain",
    category: "Plates & Trays",
    idealFor: "Desserts, breakfast, and sides",
    quantity: 25,
    price: 140,
    image: "/assets/products-optimized/8in_plain.webp",
    imageAlt: '8 inch plain round areca leaf plate',
  },
  {
    name: '6" Square Plate',
    type: "Plain",
    category: "Plates & Trays",
    idealFor: "Tasting portions and small bites",
    quantity: 25,
    price: 130,
    image: "/assets/products-optimized/6in_square.webp",
    imageAlt: '6 inch plain square areca leaf plate',
  },
  {
    name: '9" x 6" Tray',
    type: "Plain",
    category: "Plates & Trays",
    idealFor: "Snacks, rolls, sandwiches, and takeaway portions",
    quantity: 25,
    price: 150,
    image: "/assets/products-optimized/9x6.webp",
    imageAlt: '9 by 6 inch rectangular areca leaf tray',
  },
  {
    name: '4" Bowl',
    category: "Bowls",
    idealFor: "Chutneys, dips, and desserts",
    quantity: 25,
    price: 75,
    image: "/assets/products-optimized/bowl.webp",
    imageAlt: 'Small areca leaf bowl',
  },
  {
    name: '5" Bowl',
    category: "Bowls",
    idealFor: "Curries, salads, and snacks",
    quantity: 25,
    price: 100,
    image: "/assets/products-optimized/bowl.webp",
    imageAlt: 'Medium areca leaf bowl',
  },
  {
    name: "Wooden Spoon",
    category: "Cutlery",
    idealFor: "Serving and takeaway kits",
    quantity: 25,
    price: 35,
    image: "/assets/products-optimized/spoon.webp",
    imageAlt: "Wooden spoon",
  },
  {
    name: "Wooden Fork",
    category: "Cutlery",
    idealFor: "Events, cafes, and food counters",
    quantity: 25,
    price: 35,
    image: "/assets/products-optimized/fork.webp",
    imageAlt: "Wooden fork",
  },
];
