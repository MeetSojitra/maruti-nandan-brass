export const productCategories = [
  {
    id: "brass-ppr-insert",
    title: "BRASS PPR/CPVC/UPVC INSERT",
    description: "High-quality brass inserts for plastic pipe systems with precision threading",
    totalProducts: 0,
    image: "assets/products/brass-ppr-insert.jpg",
    color: "from-secondary/10 to-secondary/5",
    subProducts: []
  },
  {
    id: "brass-insert", 
    title: "BRASS INSERT",
    description: "General purpose brass inserts for various industrial applications",
    totalProducts: 4,
    image: "assets/products/brass-inserts.webp",
    color: "from-accent/10 to-accent/5",
    subProducts: [
      { id: "heat-ultrasonic-insert", name: "Heat / Ultra Sonic Insert", description: "Heat and ultrasonic welding inserts" },
      { id: "press-in-insert", name: "Press In Insert", description: "Self-tapping insert for soft plastics" },
      { id: "moulded-in-insert", name: "Moulded In Insert", description: "Insert designed for molding process" },
      { id: "self-tapping-insert", name: "Self Tapping Insert", description: "Self-threading insert for various materials" }
    ]
  },
  {
    id: "brass-fittings",
    title: "BRASS FITTINGS",
    description: "Comprehensive range of brass pipe fittings and connectors",
    totalProducts: 4,
    image: "assets/products/brass_fittings.webp",
    color: "from-primary/10 to-primary/5",
    subProducts: [
      { id: "electrofusion-fittings", name: "Electrofusion Fittings", description: "Electrofusion welding pipe fittings" },
      { id: "hose-nipple-fittings", name: "Hose Nipple Fittings", description: "Hose connection and nipple fittings" },
      { id: "flare-fittings", name: "Flare Fittings", description: "Flared end connection fittings" },
      { id: "air-brake-fittings", name: "Air Brake Fittings", description: "Pneumatic brake system fittings" },
      { id: "brass-anchor", name: "Brass Anchor", description: "Heavy-duty brass anchor fittings" }
    ]
  },
  {
    id: "brass-electric-fittings",
    title: "BRASS ELECTRIC FITTINGS", 
    description: "Electrical conduit fittings and cable gland accessories",
    totalProducts: 0,
    image: "assets/products/brass_electric_fittings.webp",
    color: "from-secondary/10 to-secondary/5",
    subProducts: []
  },
  {
    id: "brass-precision-turned-components",
    title: "BRASS PRECISION TURNED COMPONENTS",
    description: "CNC machined precision brass components to exact specifications",
    totalProducts: 0,
    image: "assets/products/brass_precision_turned_comp.webp",
    color: "from-accent/10 to-accent/5",
    subProducts: []
  },
  {
    id: "brass-bush",
    title: "BRASS BUSH",
    description: "High-quality brass bushings for various mechanical applications",
    totalProducts: 0,
    image: "assets/products/brass-bushes2.webp",
    color: "from-primary/10 to-primary/5",
    subProducts: []
  },
  {
    id: "brass-forged-parts",
    title: "BRASS FORGED PARTS",
    description: "Hot forged brass components for heavy-duty applications",
    totalProducts: 0,
    image: "assets/products/brass_forged_parts.webp",
    color: "from-secondary/10 to-secondary/5",
    subProducts: []
  },
  {
    id: "brass-hardware",
    title: "BRASS HARDWARE",
    description: "General brass hardware components and accessories",
    totalProducts: 0,
    image: "assets/products/brass_hardware.webp",
    color: "from-accent/10 to-accent/5",
    subProducts: []
  },
  {
    id: "brass-sanitary",
    title: "BRASS SANITARY",
    description: "Sanitary brass fittings and plumbing components",
    totalProducts: 0,
    image: "assets/details/brass_sanitary.webp",
    color: "from-primary/10 to-primary/5",
    subProducts: []
  },
  {
    id: "brass-fastner",
    title: "BRASS FASTNER",
    description: "High-quality brass fasteners and threaded components",
    totalProducts: 0,
    image: "assets/products/brass_fastners.webp",
    color: "from-secondary/10 to-secondary/5",
    subProducts: []
  },
  {
    id: "valves",
    title: "VALVES",
    description: "High-quality brass valves for flow control applications",
    totalProducts: 0,
    image: "assets/products/valves.webp",
    color: "from-accent/10 to-accent/5",
    subProducts: []
  }
];

export const getProductById = (categoryId: string, productId: string) => {
  const category = productCategories.find(cat => cat.id === categoryId);
  if (!category) return null;
  return category.subProducts.find(product => product.id === productId);
};

export const getCategoryById = (categoryId: string) => {
  return productCategories.find(cat => cat.id === categoryId);
};