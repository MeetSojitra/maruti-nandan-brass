export interface ProductDetail {
  id: string;
  title: string;
  description: string;
  features: string[];
  applications: string[];
  specifications: string[];
  cardImg: string;
  image: string;
  technicalSheet?: string;
  catalog?: string;
}

export const productDetails: Record<string, ProductDetail> = {
  "brass-ppr-insert": {
    id: "brass-ppr-insert",
    title: "BRASS PPR/CPVC/UPVC INSERT",
    description: "High-quality brass inserts specifically designed for plastic pipe systems including PPR, CPVC, and UPVC applications. These precision-engineered inserts provide reliable threaded connections with superior sealing properties and long-term durability in plumbing and water distribution systems.",
    features: [
      "Precision threading for PPR/CPVC/UPVC compatibility",
      "Superior corrosion resistance",
      "Lead-free brass construction for potable water",
      "Excellent sealing properties",
      "Wide temperature range capability",
      "Easy installation process",
      "Various size configurations available",
      "Long-term reliability in plastic pipe systems"
    ],
    applications: [
      "PPR pipe systems",
      "CPVC plumbing installations",
      "UPVC water distribution",
      "Hot and cold water supply",
      "Residential plumbing systems",
      "Commercial water networks",
      "Industrial piping systems",
      "Building services installations"
    ],
    specifications: [
      "Material: CW617N lead-free brass",
      "Thread Standards: ISO 228, BSP, NPT",
      "Size Range: 1/2\" to 2\" (15mm to 50mm)",
      "Pressure Rating: Up to 25 bar",
      "Temperature Range: -20°C to +95°C",
      "Wall Thickness: 2.5mm to 4mm",
      "Surface Finish: Natural brass or nickeled",
      "Standards: EN 1254, DVGW approved"
    ],
    cardImg: "",
    image: "/assets/details/brass_ppr_insert.webp",
    technicalSheet: "/downloads/ppr-insert-specifications.pdf",
    catalog: "/downloads/ppr-insert-catalog.pdf"
  },
  "brass-precision-turned-components": {
    id: "brass-precision-turned-components",
    title: "BRASS PRECISION TURNED COMPONENTS",
    description: "Our precision turned brass components are manufactured using state-of-the-art Advanced machinery to deliver exceptional accuracy and surface finish. Each component is crafted from high-grade brass alloys and undergoes rigorous quality control to ensure dimensional accuracy within ±0.01mm tolerance.",
    features: [
      "Advanced precision machining with ±0.01mm tolerance",
      "High-grade CW617N and CW614N brass alloys",
      "Surface finish Ra 0.8 to Ra 3.2",
      "Custom designs and specifications available",
      "100% dimensional inspection",
      "Fast prototyping capabilities"
    ],
    applications: [
      "Automotive components",
      "Electronic assemblies",
      "Hydraulic systems",
      "Pneumatic equipment",
      "Medical devices",
      "Aerospace applications",
      "Industrial machinery",
      "Precision instruments"
    ],
    specifications: [
      "Material: CW617N, CW614N brass alloys",
      "Tolerance: ±0.01mm to ±0.05mm",
      "Surface Finish: Ra 0.8 to Ra 3.2",
      "Diameter Range: 1mm to 200mm",
      "Length: Up to 500mm",
      "Threading: Metric, BSP, NPT available"
    ],
    cardImg: "",
    image: "/assets/details/brass_precision_tured.webp",
    technicalSheet: "/downloads/precision-turned-components-specs.pdf",
    catalog: "/downloads/precision-components-catalog.pdf"
  },
  "brass-electric-fittings": {
    id: "brass-electric-fittings",
    title: "BRASS ELECTRIC FITTINGS",
    description: "Superior electrical connectivity solutions engineered from high-conductivity brass alloys. Our electrical fittings provide excellent current-carrying capacity, corrosion resistance, and reliable connections for critical electrical applications in industrial and commercial environments.",
    features: [
      "High electrical conductivity (>20% IACS)",
      "Corrosion-resistant brass construction",
      "Excellent thermal stability",
      "Low electrical resistance connections",
      "Vibration-resistant design",
      "Multiple terminal configurations",
      "UL and CE certified options",
      "Anti-seize coating available"
    ],
    applications: [
      "Electrical panels and switchboards",
      "Motor terminal boxes",
      "Transformer connections",
      "Power distribution systems",
      "Control panel assemblies",
      "Automotive electrical systems",
      "Marine electrical installations",
      "Renewable energy systems"
    ],
    specifications: [
      "Material: CW508L high-conductivity brass",
      "Conductivity: >20% IACS minimum",
      "Voltage Rating: Up to 1000V AC",
      "Current Rating: 5A to 800A",
      "Temperature Range: -40°C to +120°C",
      "Insulation Class: IP54/IP65 options",
      "Standards: IEC 61238, UL 486",
      "Coating: Tin plating or nickel plating"
    ],
    cardImg: "",
    image: "/assets/details/brass_ele_fitting.webp",
    technicalSheet: "/downloads/electrical-fittings-specs.pdf",
    catalog: "/downloads/electrical-components-catalog.pdf"
  },
  "valves": {
    id: "valves",
    title: "VALVES",
    description: "Precision-engineered brass valves designed for superior flow control and durability in demanding fluid handling applications. Our comprehensive valve range includes ball valves, gate valves, and check valves manufactured to international standards with exceptional leak-tightness and long service life.",
    features: [
      "Full port design for maximum flow",
      "Blow-out proof stem construction",
      "PTFE seats and seals",
      "Bubble-tight shut-off capability",
      "Anti-corrosion brass body",
      "Easy operation with low torque",
      "Fire-safe design options",
      "Quarter-turn operation (ball valves)"
    ],
    applications: [
      "Water supply systems",
      "Gas distribution networks",
      "HVAC systems",
      "Industrial process control",
      "Oil and gas applications",
      "Chemical processing",
      "Marine installations",
      "Irrigation systems"
    ],
    specifications: [
      "Material: CW617N forged brass body",
      "Pressure Rating: PN16 to PN40",
      "Temperature Range: -20°C to +180°C",
      "Size Range: 1/4\" to 4\" (DN8 to DN100)",
      "End Connections: NPT, BSP, Flanged",
      "Standards: ISO 228, ANSI B16.34",
      "Testing: API 598, EN 12266",
      "Certification: CE, WRAS, NSF"
    ],
    cardImg: "",
    image: "/assets/details/valves.webp",
    technicalSheet: "/downloads/valves-specifications.pdf",
    catalog: "/downloads/valves-catalog.pdf"
  },
  "brass-bush": {
    id: "brass-bush",
    title: "BRASS BUSH",
    description: "Our brass bushings are engineered for superior wear resistance and dimensional stability in mechanical applications. Manufactured from premium brass alloys with precision boring and external turning for optimal fit and performance in bearing applications.",
    features: [
      "Superior wear resistance",
      "Self-lubricating properties",
      "Corrosion resistant brass alloys",
      "Precision bore and OD machining",
      "Available in standard and custom sizes",
      "Oil grooves and lubrication holes available"
    ],
    applications: [
      "Bearing assemblies",
      "Mechanical linkages",
      "Automotive suspension",
      "Industrial machinery",
      "Hydraulic cylinders",
      "Marine applications",
      "Agricultural equipment",
      "Construction machinery"
    ],
    specifications: [
      "Material: CW614N, CW617N brass",
      "Inner Diameter: 5mm to 200mm",
      "Outer Diameter: 8mm to 250mm",
      "Length: 5mm to 300mm",
      "Tolerance: ISO H7/h6",
      "Surface Finish: Ra 1.6 to Ra 3.2"
    ],
    cardImg: "",
    image: "/assets/details/brass_bush.webp",
    technicalSheet: "/downloads/brass-bush-specifications.pdf"
  },
  "brass-forged-parts": {
    id: "brass-forged-parts",
    title: "BRASS FORGED PARTS",
    description: "Hot forged brass components delivering exceptional strength and durability for heavy-duty applications. Our forging process creates superior grain structure and mechanical properties compared to machined or cast alternatives.",
    features: [
      "Hot forging process for superior strength",
      "Enhanced grain structure and durability",
      "Complex shapes and geometries achievable",
      "Excellent mechanical properties",
      "Cost-effective for high-volume production",
      "Secondary machining capabilities"
    ],
    applications: [
      "Automotive components",
      "Heavy machinery parts",
      "Marine hardware",
      "Oil and gas equipment",
      "Agricultural machinery",
      "Construction equipment",
      "Industrial valves",
      "Pump components"
    ],
    specifications: [
      "Material: CW617N, CW614N, CW508L brass",
      "Forging Temperature: 700-850°C",
      "Weight Range: 50g to 50kg",
      "Tolerance: ±0.5mm after machining",
      "Strength: Up to 450 MPa tensile",
      "Heat Treatment: Available"
    ],
    cardImg: "",
    image: "/assets/details/brass_forged_parts.webp",
    technicalSheet: "/downloads/forged-parts-specifications.pdf",
    catalog: "/downloads/forged-components-catalog.pdf"
  },
  "brass-hardware": {
    id: "brass-hardware",
    title: "BRASS HARDWARE",
    description: "Comprehensive range of brass hardware components including fasteners, fittings, and decorative elements. Our hardware solutions combine functionality with aesthetic appeal, suitable for both industrial and architectural applications.",
    features: [
      "Wide range of standard components",
      "Custom hardware design and manufacturing",
      "Decorative and functional finishes",
      "Corrosion resistance",
      "Marine grade options available",
      "Architectural and industrial grades"
    ],
    applications: [
      "Marine hardware",
      "Architectural fittings",
      "Furniture hardware",
      "Electrical enclosures",
      "Plumbing accessories",
      "Decorative elements",
      "Industrial fasteners",
      "Automotive trim"
    ],
    specifications: [
      "Material: Various brass alloys",
      "Finishes: Natural, Nickel, Chrome, Antique",
      "Size Range: M3 to M20 threads",
      "Standards: DIN, ISO, ANSI compliant",
      "Coating: Lacquer, Plating available",
      "Testing: Salt spray, Torque testing"
    ],
    cardImg: "",
    image: "/assets/details/brass_hardware.webp",
    catalog: "/downloads/brass-hardware-catalog.pdf"
  },
  "brass-sanitary": {
    id: "brass-sanitary",
    title: "BRASS SANITARY",
    description: "Hygienic brass components designed for plumbing and sanitary applications. Our sanitary fittings meet international health standards and provide reliable, long-lasting performance in water supply and drainage systems.",
    features: [
      "Lead-free brass alloys for potable water",
      "Smooth internal surfaces for hygiene",
      "Antimicrobial properties of brass",
      "Dezincification resistant alloys",
      "NSF and WRAS approved materials",
      "Easy installation and maintenance"
    ],
    applications: [
      "Plumbing systems",
      "Water supply networks",
      "Bathroom fixtures",
      "Kitchen fittings",
      "Hospital plumbing",
      "Food processing equipment",
      "Water treatment plants",
      "Commercial buildings"
    ],
    specifications: [
      "Material: CW511L, CW724R lead-free brass",
      "Standards: NSF/ANSI 61, WRAS approved",
      "Pressure Rating: Up to 16 bar",
      "Temperature: -20°C to 110°C",
      "Thread: BSP, NPT standards",
      "Size Range: 1/2\" to 4\""
    ],
    cardImg: "",
    image: "/assets/details/brass_sanitary.webp",
    technicalSheet: "/downloads/sanitary-fittings-specs.pdf",
    catalog: "/downloads/sanitary-products-catalog.pdf"
  },
  "brass-fastner": {
    id: "brass-fastner",
    title: "BRASS FASTNER",
    description: "High-quality brass fasteners engineered for superior corrosion resistance and mechanical strength. Our comprehensive range includes screws, bolts, nuts, and washers manufactured to international standards with precise threading.",
    features: [
      "Superior corrosion resistance",
      "Non-magnetic properties",
      "Precise thread specifications",
      "Various head styles available",
      "Custom length and diameter options",
      "Marine grade fasteners available"
    ],
    applications: [
      "Marine environments",
      "Electrical connections",
      "Electronic assemblies",
      "Outdoor equipment",
      "Automotive applications",
      "Architectural projects",
      "Industrial machinery",
      "Decorative assemblies"
    ],
    specifications: [
      "Material: CW617N, CW614N brass",
      "Thread: Metric, BSW, UNC, UNF",
      "Size Range: M2 to M24",
      "Length: 6mm to 200mm",
      "Head Types: Hex, Phillips, Slotted, Allen",
      "Standards: DIN, ISO, ANSI compliant"
    ],
    cardImg: "",
    image: "/assets/details/brass_fastner.webp",
    technicalSheet: "/downloads/brass-fasteners-specs.pdf",
    catalog: "/downloads/fasteners-catalog.pdf"
  }
};

// Sub-product details for products with sub-products
export const subProductDetails: Record<string, ProductDetail> = {
  // BRASS INSERT sub-products
  "heat-ultrasonic-insert": {
    id: "heat-ultrasonic-insert",
    title: "HEAT / ULTRA SONIC INSERT",
    description: "Specialized brass inserts designed for heat staking and ultrasonic welding applications. These inserts provide exceptional holding power and are engineered for automated insertion processes in plastic assemblies.",
    features: [
      "Optimized for heat staking processes",
      "Ultrasonic welding compatible design",
      "Knurled exterior for maximum retention",
      "Lead-free brass construction available",
      "Various head styles and configurations",
      "Automated insertion compatible"
    ],
    applications: [
      "Automotive plastic assemblies",
      "Electronic device housings",
      "Appliance manufacturing",
      "Consumer electronics",
      "Medical device assemblies",
      "Industrial plastic components"
    ],
    specifications: [
      "Material: CW614N, CW617N brass",
      "Installation: Heat staking/Ultrasonic",
      "Size Range: M2 to M12",
      "Length: 3mm to 25mm",
      "Head Types: Flush, Raised, Countersunk",
      "Temperature Resistance: Up to 120°C"
    ],
    cardImg: "/assets/products/heat_ultra_sonic.webp",
    image: "/assets/details/heat_ultra_sonic_insert.webp"
  },
  "press-in-insert": {
    id: "press-in-insert",
    title: "PRESS IN INSERT",
    description: "Self-tapping brass inserts designed for press-fit installation into soft plastics and thermoplastics. Features aggressive external threading for secure retention without the need for heat or ultrasonic welding.",
    features: [
      "Self-tapping external threads",
      "Press-fit installation",
      "No heat or welding required",
      "Excellent pull-out resistance",
      "Multiple thread configurations",
      "Corrosion-resistant finish options"
    ],
    applications: [
      "Soft plastic assemblies",
      "Thermoplastic components",
      "Furniture hardware",
      "Electrical enclosures",
      "Automotive trim pieces",
      "Consumer product housings"
    ],
    specifications: [
      "Material: CW617N brass alloy",
      "Installation: Press-fit",
      "Thread: M3 to M10",
      "External Thread: Self-tapping",
      "Finish: Natural brass or plated",
      "Installation Force: 1-5 kN"
    ],
    cardImg: "/assets/products/press_in_inserts.webp",
    image: "/assets/details/press_in_insert.webp"
  },
  "moulded-in-insert": {
    id: "moulded-in-insert",
    title: "MOULDED IN INSERT",
    description: "Precision brass inserts specifically designed for overmolding and insert molding processes. Features specialized external geometry to ensure optimal retention and prevent rotation during plastic injection molding.",
    features: [
      "Overmolding optimized design",
      "Anti-rotation features",
      "High-temperature injection molding compatible",
      "Precise dimensional tolerances",
      "Multiple knurl patterns available",
      "Custom geometries possible"
    ],
    applications: [
      "Injection molded assemblies",
      "Overmolded components",
      "Automotive interior parts",
      "Electronic device frames",
      "Industrial control panels",
      "Medical equipment housings"
    ],
    specifications: [
      "Material: CW614N high-temp brass",
      "Installation: Insert molding",
      "Thread: M2.5 to M16",
      "Molding Temperature: Up to 300°C",
      "Knurl Types: Diamond, Straight, Helical",
      "Tolerance: ±0.02mm"
    ],
    cardImg: "/assets/products/moulded_inserts.webp",
    image: "/assets/details/moulded_insert.webp"
  },
  "self-tapping-insert": {
    id: "self-tapping-insert",
    title: "SELF TAPPING INSERT",
    description: "Versatile self-tapping brass inserts for creating strong threaded connections in various materials including plastics, wood, and soft metals. Features aggressive external threading for secure installation.",
    features: [
      "Self-tapping installation",
      "Versatile material compatibility",
      "High torque resistance",
      "Removable and reusable",
      "Various head configurations",
      "Thread forming design"
    ],
    applications: [
      "Plastic assemblies",
      "Wood furniture",
      "Composite materials",
      "Sheet metal assemblies",
      "Repair applications",
      "Prototyping and testing"
    ],
    specifications: [
      "Material: CW617N brass",
      "Installation: Self-tapping",
      "Thread: M3 to M12",
      "Drive Types: Hex, Slotted, Phillips",
      "Point Types: Sharp, Blunt, Cutting",
      "Material Thickness: 1-10mm"
    ],
    cardImg: "/assets/products/self_tipping_insert.webp",
    image: "/assets/details/self_tapping.webp"
  },
  // BRASS FITTINGS sub-products
  "electrofusion-fittings": {
    id: "electrofusion-fittings",
    title: "ELECTROFUSION FITTINGS",
    description: "High-performance brass electrofusion fittings designed for reliable pipe joining in gas and water distribution systems. Features integrated heating elements for automated welding processes.",
    features: [
      "Integrated heating elements",
      "Automated welding process",
      "High joint strength",
      "Corrosion-resistant brass body",
      "Precise temperature control",
      "Quality monitoring capabilities"
    ],
    applications: [
      "Gas distribution networks",
      "Water supply systems",
      "Industrial piping",
      "Underground utilities",
      "Municipal infrastructure",
      "Commercial installations"
    ],
    specifications: [
      "Material: CW617N brass body",
      "Size Range: 20mm to 315mm",
      "Pressure Rating: PN16",
      "Welding Voltage: 20-48V",
      "Temperature Range: -20°C to +60°C",
      "Standards: ISO 13950, EN 12201"
    ],
    cardImg: "/assets/products/brass_electrofusion_fittings.webp",
    image: "/assets/details/electrofusion_fitting.webp"
  },
  "hose-nipple-fittings": {
    id: "hose-nipple-fittings",
    title: "HOSE NIPPLE FITTINGS",
    description: "Robust brass hose nipple fittings for secure hose connections in hydraulic and pneumatic systems. Available in straight, elbow, and tee configurations with various end connections.",
    features: [
      "Multiple configuration options",
      "Barbed hose connection design",
      "High-pressure capabilities",
      "Corrosion-resistant construction",
      "Easy hose installation",
      "Leak-proof seal design"
    ],
    applications: [
      "Hydraulic systems",
      "Pneumatic equipment",
      "Industrial machinery",
      "Agricultural equipment",
      "Construction machinery",
      "Marine applications"
    ],
    specifications: [
      "Material: CW617N forged brass",
      "Pressure Rating: Up to 250 bar",
      "Size Range: 1/8\" to 2\"",
      "Hose Types: Rubber, PVC, Polyurethane",
      "End Connections: NPT, BSP, JIC",
      "Temperature: -40°C to +120°C"
    ],
    cardImg: "/assets/products/hose_nipples.webp",
    image: "/assets/details/hose_nipple.webp"
  },
  "flare-fittings": {
    id: "flare-fittings",
    title: "FLARE FITTINGS",
    description: "Precision brass flare fittings for high-pressure applications in refrigeration, automotive, and hydraulic systems. Features 45-degree flare angle for reliable metal-to-metal sealing.",
    features: [
      "45-degree flare sealing surface",
      "Metal-to-metal seal",
      "High-pressure rating",
      "Vibration resistant",
      "Reusable connections",
      "SAE and DIN standards"
    ],
    applications: [
      "Refrigeration systems",
      "Automotive brake lines",
      "Hydraulic systems",
      "Instrumentation tubing",
      "Aircraft fuel systems",
      "High-pressure gas lines"
    ],
    specifications: [
      "Material: CW617N brass alloy",
      "Flare Angle: 45 degrees",
      "Pressure Rating: Up to 500 bar",
      "Size Range: 1/8\" to 1-1/4\"",
      "Standards: SAE J514, DIN 2353",
      "Tube Wall Thickness: 0.5-3mm"
    ],
    cardImg: "/assets/products/flare_fittings.webp",
    image: "/assets/details/flare_fittings.webp"
  },
  "air-brake-fittings": {
    id: "air-brake-fittings",
    title: "AIR BRAKE FITTINGS",
    description: "Specialized brass fittings designed for commercial vehicle air brake systems. Built to withstand the demanding requirements of heavy-duty transportation applications.",
    features: [
      "DOT approved designs",
      "High-pressure air applications",
      "Vibration and shock resistant",
      "Corrosion-resistant finish",
      "Quick-connect options",
      "Commercial vehicle standards"
    ],
    applications: [
      "Commercial truck brake systems",
      "Trailer air brake lines",
      "Bus pneumatic systems",
      "Heavy equipment air systems",
      "Railroad air brake systems",
      "Industrial air brake applications"
    ],
    specifications: [
      "Material: CW617N brass, nickel plated",
      "Pressure Rating: 150 PSI working",
      "Size Range: 1/8\" to 1/2\" NPT",
      "Standards: DOT FMVSS 121",
      "Temperature: -40°F to +200°F",
      "Vibration Test: MIL-STD-810"
    ],
    cardImg: "/assets/products/air_brake_fitting.webp",
    image: "/assets/details/air_brake.webp"
  },
  "brass-anchor": {
    id: "brass-anchor",
    title: "BRASS ANCHOR",
    description: "Heavy-duty brass anchor fittings for structural and marine applications. Provides secure attachment points with exceptional corrosion resistance and load-bearing capacity.",
    features: [
      "Heavy-duty construction",
      "Superior corrosion resistance",
      "High load-bearing capacity",
      "Marine grade materials",
      "Various mounting configurations",
      "Tamper-resistant options"
    ],
    applications: [
      "Marine deck hardware",
      "Structural anchoring",
      "Cable management systems",
      "Industrial mounting",
      "Architectural applications",
      "Heavy equipment securing"
    ],
    specifications: [
      "Material: CW508L marine brass",
      "Load Capacity: Up to 5000 kg",
      "Size Range: M8 to M24",
      "Finish: Natural or protective coating",
      "Standards: ISO 4762, DIN 912",
      "Corrosion Test: 1000+ hours salt spray"
    ],
    cardImg: "/assets/products/brass_anchors_card.png",
    image: "/assets/details/sub_brass_anchors.webp",
    technicalSheet: "/downloads/brass-anchor-specs.pdf",
    catalog: "/downloads/anchor-fittings-catalog.pdf"
  }
};

export const getProductDetailById = (productId: string): ProductDetail | null => {
  return productDetails[productId] || subProductDetails[productId] || null;
};