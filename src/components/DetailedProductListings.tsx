import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, FileText, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductItem {
  name: string;
  description: string;
  specifications: string[];
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
  isCustomizable?: boolean;
}

interface ProductCategory {
  id: string;
  title: string;
  description: string;
  totalProducts: number;
  products: ProductItem[];
}

const DetailedProductListings = () => {
  const productCategories: ProductCategory[] = [
    {
      id: "brass-ppr-insert",
      title: "BRASS PPR/CPVC/UPVC INSERT",
      description: "High-quality brass inserts for plastic pipe systems",
      totalProducts: 12,
      products: [
        {
          name: "PPR Female Threaded Insert",
          description: "Brass insert with female BSP threading for PPR pipe connections. Material: CW617N brass alloy, Thread: BSP 1/2\" to 2\", Size range: 20mm to 63mm",
          specifications: ["Material: CW617N Brass", "Thread: BSP Female", "Size: 20-63mm", "Pressure: 16 bar", "Temperature: -20°C to 95°C"],
          image: "/assets/products/brass-ppr-insert.jpg",
          isPopular: true
        },
        {
          name: "CPVC Male Threaded Insert",
          description: "Precision-engineered brass insert for CPVC pipe systems with male threading",
          specifications: ["Material: CW617N Brass", "Thread: BSP Male", "Size: 15-50mm", "Pressure: 25 bar", "Temperature: -10°C to 90°C"],
          image: "/assets/products/brass-ppr-insert.jpg",
          isNew: true
        },
        {
          name: "UPVC Compression Insert",
          description: "Compression-type brass insert for UPVC applications with enhanced sealing",
          specifications: ["Material: CW614N Brass", "Type: Compression", "Size: 16-32mm", "Pressure: 16 bar", "Seal: EPDM O-ring"],
          image: "/assets/products/brass-ppr-insert.jpg",
          isCustomizable: true
        }
      ]
    },
    {
      id: "brass-insert",
      title: "BRASS INSERT",
      description: "General purpose brass inserts for various applications",
      totalProducts: 8,
      products: [
        {
          name: "Threaded Brass Insert",
          description: "Standard threaded brass insert for general applications with metric and BSP threading options",
          specifications: ["Material: CW617N Brass", "Thread: Metric/BSP", "Size: M6-M24", "Finish: Natural/Nickel", "Application: General purpose"],
          image: "/assets/products/brass-valve.jpg",
          isPopular: true
        },
        {
          name: "Heat-Set Brass Insert",
          description: "Heat-activated brass insert for plastic molding applications",
          specifications: ["Material: CW614N Brass", "Type: Heat-set", "Size: M3-M16", "Installation: Heat press", "Temp: 200-250°C"],
          image: "/assets/products/brass-valve.jpg"
        }
      ]
    },
    {
      id: "brass-fittings",
      title: "BRASS FITTINGS",
      description: "Comprehensive range of brass pipe fittings and connectors",
      totalProducts: 25,
      products: [
        {
          name: "Brass Elbow Fitting",
          description: "90-degree brass elbow fitting for pipe direction changes with BSP threading",
          specifications: ["Material: CW617N Brass", "Angle: 90°", "Thread: BSP", "Size: 1/8\" to 2\"", "Pressure: 16 bar"],
          image: "/assets/products/electrical-fittings.jpg",
          isPopular: true
        },
        {
          name: "Brass Tee Fitting",
          description: "Three-way brass tee fitting for pipe branching applications",
          specifications: ["Material: CW617N Brass", "Type: Equal Tee", "Thread: BSP", "Size: 1/4\" to 1.5\"", "Pressure: 20 bar"],
          image: "/assets/products/electrical-fittings.jpg"
        },
        {
          name: "Brass Coupler",
          description: "Straight brass coupling for joining two pipes of the same diameter",
          specifications: ["Material: CW617N Brass", "Type: Equal Socket", "Thread: BSP", "Size: 1/8\" to 2\"", "Connection: Female-Female"],
          image: "/assets/products/electrical-fittings.jpg",
          isCustomizable: true
        },
        {
          name: "Brass Reducer",
          description: "Reducing brass fitting for connecting pipes of different diameters",
          specifications: ["Material: CW617N Brass", "Type: Reducing Socket", "Thread: BSP", "Size: 1/4\"x1/8\" to 2\"x1.5\"", "Pressure: 16 bar"],
          image: "/assets/products/electrical-fittings.jpg"
        }
      ]
    },
    {
      id: "brass-electric-fittings",
      title: "BRASS ELECTRIC FITTINGS",
      description: "Electrical conduit fittings and cable gland accessories",
      totalProducts: 15,
      products: [
        {
          name: "Cable Gland",
          description: "Brass cable gland for secure cable entry with IP68 protection rating",
          specifications: ["Material: CW617N Brass", "Thread: Metric/PG", "Size: M12-M63", "IP Rating: IP68", "Cable Range: 3-18mm"],
          image: "/assets/products/electrical-fittings.jpg",
          isPopular: true
        },
        {
          name: "Conduit Connector",
          description: "Brass conduit connector for joining electrical conduit to junction boxes",
          specifications: ["Material: CW617N Brass", "Thread: Metric", "Size: M16-M40", "Type: Straight", "Seal: NBR O-ring"],
          image: "/assets/products/electrical-fittings.jpg"
        },
        {
          name: "Earth Tag",
          description: "Brass earthing tag for electrical grounding applications",
          specifications: ["Material: CW617N Brass", "Thread: M20-M32", "Type: External", "Function: Earthing", "Standard: IEC"],
          image: "/assets/products/electrical-fittings.jpg",
          isNew: true
        }
      ]
    },
    {
      id: "turned-components",
      title: "BRASS PRECISION TURNED COMPONENTS",
      description: "Advanced machined precision brass components to exact specifications",
      totalProducts: 20,
      products: [
        {
          name: "Brass Shaft",
          description: "Precision-turned brass shaft with tight tolerance requirements for mechanical applications",
          specifications: ["Material: CW617N Brass", "Tolerance: ±0.01mm", "Surface: Ra 0.8", "Length: 10-500mm", "Diameter: 3-50mm"],
          image: "/assets/products/turned-components.jpg",
          isCustomizable: true
        },
        {
          name: "Brass Bushing",
          description: "Precision brass bushing for bearing and sleeve applications",
          specifications: ["Material: CW614N Brass", "Tolerance: ±0.02mm", "Surface: Ra 1.6", "ID: 5-40mm", "OD: 8-50mm"],
          image: "/assets/products/turned-components.jpg",
          isPopular: true
        },
        {
          name: "Brass Pin",
          description: "High-precision brass pin for mechanical assemblies and fixtures",
          specifications: ["Material: CW617N Brass", "Tolerance: ±0.005mm", "Surface: Ra 0.4", "Length: 5-100mm", "Diameter: 1-20mm"],
          image: "/assets/products/turned-components.jpg"
        }
      ]
    },
    {
      id: "valves",
      title: "VALVES",
      description: "High-quality brass valves for flow control applications",
      totalProducts: 10,
      products: [
        {
          name: "Ball Valve",
          description: "Quarter-turn brass ball valve with lever handle for on/off flow control",
          specifications: ["Material: CW617N Brass", "Type: Full Port", "Size: 1/2\" to 2\"", "Pressure: 25 bar", "Handle: Lever"],
          image: "/assets/products/brass-valve.jpg",
          isPopular: true
        },
        {
          name: "Check Valve",
          description: "Spring-loaded brass check valve to prevent backflow in piping systems",
          specifications: ["Material: CW617N Brass", "Type: Spring Check", "Size: 1/4\" to 1.5\"", "Pressure: 16 bar", "Flow: Vertical/Horizontal"],
          image: "/assets/products/brass-valve.jpg"
        },
        {
          name: "Gate Valve",
          description: "Rising stem brass gate valve for full flow applications",
          specifications: ["Material: CW617N Brass", "Type: Rising Stem", "Size: 1/2\" to 2\"", "Pressure: 16 bar", "Operation: Manual"],
          image: "/assets/products/brass-valve.jpg",
          isCustomizable: true
        }
      ]
    }
  ];

  const handleViewMore = (productName: string) => {
    console.log(`View more details for: ${productName}`);
  };

  const handleRequestQuote = (productName: string) => {
    console.log(`Request quote for: ${productName}`);
  };

  const handleDownloadSpecs = (productName: string) => {
    console.log(`Download specifications for: ${productName}`);
  };

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <FileText className="w-4 h-4 mr-2 text-secondary" />
            <span className="text-secondary font-semibold text-sm">DETAILED CATALOG</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
            Product-Type-Wise Listings
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
            Explore our comprehensive product range organized by category. Each section contains detailed specifications, 
            technical drawings, and ordering information for your specific requirements.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {productCategories.map((category) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-muted/30 transition-colors duration-200">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-left">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-primary font-poppins">
                          {category.title}
                        </h3>
                        <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                          {category.totalProducts} Products
                        </Badge>
                      </div>
                      <p className="text-muted-foreground font-inter text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-8 pb-8 pt-0">
                  <div className="space-y-6">
                    {category.products.map((product, index) => (
                      <div
                        key={index}
                        className="bg-background border border-border rounded-xl p-6 hover:shadow-sm transition-shadow duration-200"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          {/* Product Image */}
                          <div className="lg:col-span-1">
                            <div className="relative rounded-lg overflow-hidden bg-muted/30 aspect-square">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                                onClick={() => handleViewMore(product.name)}
                              />
                              <div className="absolute top-3 left-3 flex gap-2">
                                {product.isPopular && (
                                  <Badge className="bg-secondary text-secondary-foreground">
                                    <Star className="w-3 h-3 mr-1" />
                                    Popular
                                  </Badge>
                                )}
                                {product.isNew && (
                                  <Badge className="bg-accent text-accent-foreground">
                                    New
                                  </Badge>
                                )}
                                {product.isCustomizable && (
                                  <Badge variant="outline" className="border-primary text-primary">
                                    Customizable
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Product Info */}
                          <div className="lg:col-span-2">
                            <div className="h-full flex flex-col">
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-primary mb-3 font-poppins">
                                  {product.name}
                                </h4>
                                <p className="text-muted-foreground mb-4 font-inter text-sm leading-relaxed">
                                  {product.description}
                                </p>

                                {/* Specifications */}
                                <div className="mb-6">
                                  <h5 className="text-sm font-semibold text-primary mb-2 font-poppins">
                                    Key Specifications:
                                  </h5>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {product.specifications.map((spec, specIndex) => (
                                      <div key={specIndex} className="flex items-start space-x-2">
                                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-xs text-muted-foreground font-inter">
                                          {spec}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex flex-wrap gap-3">
                                <Button
                                  size="sm"
                                  onClick={() => handleViewMore(product.name)}
                                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                                >
                                  <Eye className="w-4 h-4 mr-2" />
                                  View More
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleDownloadSpecs(product.name)}
                                  className="border-accent text-accent hover:bg-accent/10"
                                >
                                  <Download className="w-4 h-4 mr-2" />
                                  Download Specs
                                </Button>
                                <Link to="/contact">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleRequestQuote(product.name)}
                                    className="border-primary text-primary hover:bg-primary/10"
                                  >
                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                    Request Quote
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-muted-foreground mb-6 font-inter">
              We specialize in custom manufacturing. Contact us with your specific requirements 
              and we'll create the perfect brass component solution for your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-brass">
                  Custom Quote Request
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
                onClick={() => handleDownloadSpecs("Complete Catalog")}
              >
                <Download className="mr-2 h-4 w-4" />
                Full Catalog Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedProductListings;