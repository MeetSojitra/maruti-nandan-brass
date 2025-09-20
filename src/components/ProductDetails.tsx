import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, X, Wrench, Cog, Settings, Circle, Zap, HardHat } from "lucide-react";
import { Link } from "react-router-dom";
import brassComponents from "@/assets/brass-components.jpg";
import facilityInterior from "@/assets/facility-interior.jpg";

interface ProductDetail {
  id: string;
  title: string;
  description: string;
  images: string[];
  specifications: { [key: string]: string };
  features: string[];
  applications: string[];
  icon: any;
  technicalDrawing?: string;
  catalogUrl?: string;
}

const ProductDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const products: ProductDetail[] = [
    {
      id: "ppr-inserts",
      title: "PPR/CPVC/UPVC Inserts",
      description: "High-precision threaded inserts engineered for plumbing and piping applications. These inserts provide reliable threaded connections in plastic pipes and fittings.",
      images: [brassComponents, facilityInterior],
      specifications: {
        "Material": "High-grade brass alloy (CuZn39Pb3)",
        "Thread Standards": "ISO, BSP, NPT",
        "Size Range": "1/8\" to 2\"",
        "Tolerance": "±0.05mm",
        "Surface Finish": "Ra 1.6",
        "Working Pressure": "16 bar @ 20°C",
        "Temperature Range": "-10°C to +95°C"
      },
      features: [
        "Corrosion resistant brass construction",
        "Lead-free composition available",
        "Multiple thread configurations",
        "Precision CNC machined",
        "100% pressure tested"
      ],
      applications: [
        "PPR pipe systems",
        "CPVC plumbing networks",
        "Hot water distribution",
        "Industrial piping",
        "Building services"
      ],
      icon: Wrench,
      catalogUrl: "/catalogs/ppr-inserts.pdf"
    },
    {
      id: "precision-turned",
      title: "Precision Turned Parts",
      description: "CNC machined components manufactured to exact specifications with exceptional dimensional accuracy and surface finish quality.",
      images: [facilityInterior, brassComponents],
      specifications: {
        "Material": "Brass CuZn37, CuZn39Pb3",
        "Tolerance": "±0.01mm to ±0.02mm",
        "Surface Finish": "Ra 0.8 to Ra 1.6",
        "Diameter Range": "0.5mm to 50mm",
        "Length Range": "2mm to 200mm",
        "Threading": "Custom as per drawing",
        "Heat Treatment": "Available on request"
      },
      features: [
        "Tight dimensional tolerances",
        "Superior surface finish",
        "Custom specifications",
        "Multi-axis machining capability",
        "Material traceability"
      ],
      applications: [
        "Automotive components",
        "Electronics hardware",
        "Precision instruments",
        "Medical devices",
        "Machinery parts"
      ],
      icon: Cog,
      technicalDrawing: "/drawings/precision-parts.pdf"
    },
    {
      id: "valves-fittings",
      title: "Valves & Fittings",
      description: "Industrial grade valves and connection fittings designed for reliable flow control and system integration.",
      images: [brassComponents, facilityInterior],
      specifications: {
        "Material": "Brass CuZn39Pb3, Bronze",
        "Pressure Rating": "PN 16, PN 25",
        "Connection Type": "Threaded, Flanged",
        "Size Range": "1/4\" to 4\"",
        "Temperature": "-20°C to +180°C",
        "Standards": "ISO 228, DIN 2999",
        "Testing": "Hydrostatic & Pneumatic"
      },
      features: [
        "Pressure tested to standards",
        "Lead-free available",
        "Multiple configurations",
        "Corrosion resistant coating",
        "Long service life"
      ],
      applications: [
        "Water supply systems",
        "Gas distribution",
        "Industrial processes",
        "HVAC systems",
        "Fire protection"
      ],
      icon: Circle,
      catalogUrl: "/catalogs/valves-fittings.pdf"
    },
    {
      id: "electric-fittings",
      title: "Electric Fittings",
      description: "Electrical conduit fittings and accessories for safe and reliable electrical installations.",
      images: [facilityInterior, brassComponents],
      specifications: {
        "Material": "Brass CuZn37",
        "Thread Type": "Metric, PG, NPT",
        "Cable Gland Sizes": "M12 to M63",
        "IP Rating": "IP68",
        "Temperature": "-40°C to +100°C",
        "Certification": "CE, RoHS",
        "Flame Rating": "V-0"
      },
      features: [
        "Fire retardant properties",
        "UL listed components",
        "Multiple entry configurations",
        "Strain relief design",
        "EMC/EMI protection"
      ],
      applications: [
        "Electrical panels",
        "Control cabinets",
        "Motor connections",
        "Automation systems",
        "Instrumentation"
      ],
      icon: Zap,
      technicalDrawing: "/drawings/electric-fittings.pdf"
    },
    {
      id: "bushes-fasteners",
      title: "Bushes & Fasteners",
      description: "Precision bushings and fastening solutions for mechanical assemblies and machinery applications.",
      images: [brassComponents, facilityInterior],
      specifications: {
        "Material": "Brass, Bronze, Steel",
        "Bore Tolerance": "H7, H8",
        "Outside Tolerance": "g6, h6",
        "Length Range": "5mm to 100mm",
        "Surface Treatment": "Natural, Nickel plated",
        "Lubrication": "Self-lubricating options",
        "Load Capacity": "As per application"
      },
      features: [
        "Self-lubricating options",
        "Wear resistant surface",
        "Custom dimensions available",
        "Low friction coefficient",
        "Maintenance-free operation"
      ],
      applications: [
        "Automotive assemblies",
        "Industrial machinery",
        "Agricultural equipment",
        "Construction machinery",
        "Marine applications"
      ],
      icon: Settings
    },
    {
      id: "hardware-components",
      title: "Hardware Components",
      description: "Forged and machined hardware solutions for demanding industrial and construction applications.",
      images: [facilityInterior, brassComponents],
      specifications: {
        "Material": "Brass, Stainless Steel",
        "Strength Grade": "Class 8.8, 10.9",
        "Surface Finish": "Zinc plated, Passivated",
        "Size Range": "M3 to M24",
        "Length Range": "10mm to 150mm",
        "Standards": "DIN, ISO, ANSI",
        "Testing": "Tensile, Hardness"
      },
      features: [
        "High strength construction",
        "Corrosion proof coating",
        "Industrial grade quality",
        "Dimensional accuracy",
        "Batch traceability"
      ],
      applications: [
        "Construction industry",
        "Heavy machinery",
        "Infrastructure projects",
        "Marine hardware",
        "Industrial fastening"
      ],
      icon: HardHat,
      catalogUrl: "/catalogs/hardware-components.pdf"
    }
  ];

  const openProductDetail = (product: ProductDetail) => {
    setSelectedProduct(product);
    setSelectedImageIndex(0);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
    setShowLightbox(false);
  };

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setShowLightbox(true);
  };

  return (
    <div className="space-y-12">
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id}
            className="card-industrial border-2 border-border hover:border-secondary/40 transition-all duration-300 group cursor-pointer"
            onClick={() => openProductDetail(product)}
          >
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img 
                src={product.images[0]} 
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 left-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shadow-md">
                  <product.icon className="h-5 w-5 text-secondary-foreground" />
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3 font-poppins group-hover:text-secondary transition-colors duration-300">
                {product.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 font-inter line-clamp-3">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary font-medium">
                  {product.images.length} Images
                </span>
                <ArrowRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-3">
                <selectedProduct.icon className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-bold text-primary font-poppins">{selectedProduct.title}</h2>
              </div>
              <Button variant="ghost" onClick={closeProductDetail}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Images Section */}
                <div className="space-y-4">
                  <div className="relative">
                    <img 
                      src={selectedProduct.images[selectedImageIndex]}
                      alt={selectedProduct.title}
                      className="w-full h-80 object-cover rounded-lg shadow-md cursor-pointer"
                      onClick={() => openLightbox(selectedImageIndex)}
                    />
                  </div>
                  
                  <div className="flex space-x-2">
                    {selectedProduct.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${selectedProduct.title} view ${index + 1}`}
                        className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all duration-200 ${
                          selectedImageIndex === index ? 'border-secondary' : 'border-border hover:border-secondary/50'
                        }`}
                        onClick={() => setSelectedImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>

                {/* Details Section */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-3 font-poppins">Description</h3>
                    <p className="text-muted-foreground font-inter">{selectedProduct.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-primary mb-3 font-poppins">Technical Specifications</h3>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <table className="w-full text-sm">
                        <tbody>
                          {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                            <tr key={key} className="border-b border-border/50 last:border-0">
                              <td className="py-2 font-medium text-primary">{key}</td>
                              <td className="py-2 text-muted-foreground">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-3 font-poppins">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProduct.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm font-inter">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-primary mb-3 font-poppins">Applications</h3>
                      <ul className="space-y-2">
                        {selectedProduct.applications.map((application, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm font-inter">{application}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    {selectedProduct.catalogUrl && (
                      <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                        <Download className="mr-2 h-4 w-4" />
                        Download Catalog
                      </Button>
                    )}
                    {selectedProduct.technicalDrawing && (
                      <Button variant="outline" className="border-accent text-accent hover:bg-accent/5">
                        <Download className="mr-2 h-4 w-4" />
                        Technical Drawing
                      </Button>
                    )}
                    <Link to="/contact">
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                        Request Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {showLightbox && selectedProduct && (
        <div className="fixed inset-0 bg-primary/90 backdrop-blur-sm z-60 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <Button
              variant="ghost"
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm"
            >
              <X className="h-5 w-5" />
            </Button>
            <img
              src={selectedProduct.images[selectedImageIndex]}
              alt={selectedProduct.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            
            {selectedProduct.images.length > 1 && (
              <div className="flex justify-center space-x-2 mt-4">
                {selectedProduct.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      selectedImageIndex === index ? 'bg-secondary' : 'bg-background/50 hover:bg-background/80'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;