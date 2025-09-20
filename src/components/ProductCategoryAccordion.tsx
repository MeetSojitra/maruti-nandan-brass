import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, FileText, ShoppingCart, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import brassComponents from "@/assets/brass-components.jpg";
import brassValve from "@/assets/products/brass-valve.jpg";
import electricalFittings from "@/assets/products/electrical-fittings.jpg";
import turnedComponents from "@/assets/products/turned-components.jpg";
import brassPprInsert from "@/assets/products/brass-ppr-insert.jpg";

interface ProductItem {
  id: string;
  name: string;
  description: string;
  specifications: string[];
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
  isCustomizable?: boolean;
  technicalSheet?: string;
}

interface ProductCategory {
  id: string;
  title: string;
  description: string;
  totalProducts: number;
  products: ProductItem[];
}

const ProductCategoryAccordion = () => {
  const productCategories: ProductCategory[] = [
    {
      id: "brass-ppr-insert",
      title: "BRASS PPR/CPVC/UPVC INSERT",
      description: "High-quality brass inserts for plastic pipe systems",
      totalProducts: 12,
      products: [
        {
          id: "ppr-female-threaded",
          name: "PPR Female Threaded Insert",
          description: "Brass insert with female BSP threading for PPR pipe connections. Material: CW617N brass alloy, Thread: BSP 1/2\" to 2\", Size range: 20mm to 63mm",
          specifications: ["Material: CW617N Brass", "Thread: BSP Female", "Size: 20-63mm", "Pressure: 16 bar", "Temperature: -20°C to 95°C"],
          image: brassPprInsert,
          isPopular: true,
          technicalSheet: "/specs/ppr-female-threaded.pdf"
        },
        {
          id: "cpvc-male-threaded",
          name: "CPVC Male Threaded Insert",
          description: "Precision-engineered brass insert for CPVC pipe systems with male threading",
          specifications: ["Material: CW617N Brass", "Thread: BSP Male", "Size: 15-50mm", "Pressure: 25 bar", "Temperature: -10°C to 90°C"],
          image: brassPprInsert,
          isNew: true
        },
        {
          id: "upvc-compression",
          name: "UPVC Compression Insert",
          description: "Compression-type brass insert for UPVC applications with enhanced sealing",
          specifications: ["Material: CW614N Brass", "Type: Compression", "Size: 16-32mm", "Pressure: 16 bar", "Seal: EPDM O-ring"],
          image: brassPprInsert,
          isCustomizable: true
        },
        {
          id: "ppr-union-insert",
          name: "PPR Union Insert",
          description: "Threaded union insert for removable PPR pipe connections",
          specifications: ["Material: CW617N Brass", "Type: Union", "Size: 20-50mm", "Pressure: 16 bar", "Thread: BSP"],
          image: brassPprInsert
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
          id: "threaded-brass-insert",
          name: "Threaded Brass Insert",
          description: "Standard threaded brass insert for general applications with metric and BSP threading options",
          specifications: ["Material: CW617N Brass", "Thread: Metric/BSP", "Size: M6-M24", "Finish: Natural/Nickel", "Application: General purpose"],
          image: brassValve,
          isPopular: true
        },
        {
          id: "heat-set-insert",
          name: "Heat-Set Brass Insert",
          description: "Heat-activated brass insert for plastic molding applications",
          specifications: ["Material: CW614N Brass", "Type: Heat-set", "Size: M3-M16", "Installation: Heat press", "Temp: 200-250°C"],
          image: brassValve
        },
        {
          id: "press-in-insert",
          name: "Press-In Brass Insert",
          description: "Press-fit brass insert for permanent installation in plastic housings",
          specifications: ["Material: CW617N Brass", "Type: Press-fit", "Size: M4-M20", "Installation: Press", "Retention: Knurled"],
          image: brassValve,
          isCustomizable: true
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
          id: "brass-elbow",
          name: "Brass Elbow Fitting",
          description: "90-degree brass elbow fitting for pipe direction changes with BSP threading",
          specifications: ["Material: CW617N Brass", "Angle: 90°", "Thread: BSP", "Size: 1/8\" to 2\"", "Pressure: 16 bar"],
          image: electricalFittings,
          isPopular: true
        },
        {
          id: "brass-tee",
          name: "Brass Tee Fitting",
          description: "Three-way brass tee fitting for pipe branching applications",
          specifications: ["Material: CW617N Brass", "Type: Equal Tee", "Thread: BSP", "Size: 1/4\" to 1.5\"", "Pressure: 20 bar"],
          image: electricalFittings
        },
        {
          id: "brass-coupler",
          name: "Brass Coupler",
          description: "Straight brass coupling for joining two pipes of the same diameter",
          specifications: ["Material: CW617N Brass", "Type: Equal Socket", "Thread: BSP", "Size: 1/8\" to 2\"", "Connection: Female-Female"],
          image: electricalFittings,
          isCustomizable: true
        },
        {
          id: "brass-reducer",
          name: "Brass Reducer",
          description: "Reducing brass fitting for connecting pipes of different diameters",
          specifications: ["Material: CW617N Brass", "Type: Reducing Socket", "Thread: BSP", "Size: 1/4\"x1/8\" to 2\"x1.5\"", "Pressure: 16 bar"],
          image: electricalFittings
        },
        {
          id: "brass-nipple",
          name: "Brass Nipple",
          description: "Male threaded brass nipple for pipe extensions and connections",
          specifications: ["Material: CW617N Brass", "Type: Hex Nipple", "Thread: BSP Male", "Size: 1/8\" to 2\"", "Length: 10-100mm"],
          image: electricalFittings
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
          id: "cable-gland",
          name: "Cable Gland",
          description: "Brass cable gland for secure cable entry with IP68 protection rating",
          specifications: ["Material: CW617N Brass", "Thread: Metric/PG", "Size: M12-M63", "IP Rating: IP68", "Cable Range: 3-18mm"],
          image: electricalFittings,
          isPopular: true
        },
        {
          id: "conduit-connector",
          name: "Conduit Connector",
          description: "Brass conduit connector for joining electrical conduit to junction boxes",
          specifications: ["Material: CW617N Brass", "Thread: Metric", "Size: M16-M40", "Type: Straight", "Seal: NBR O-ring"],
          image: electricalFittings
        },
        {
          id: "earth-tag",
          name: "Earth Tag",
          description: "Brass earthing tag for electrical grounding applications",
          specifications: ["Material: CW617N Brass", "Thread: M20-M32", "Type: External", "Function: Earthing", "Standard: IEC"],
          image: electricalFittings,
          isNew: true
        },
        {
          id: "cable-cleat",
          name: "Cable Cleat",
          description: "Brass cable cleat for electrical cable support and management",
          specifications: ["Material: CW617N Brass", "Type: Single/Trefoil", "Size: 15-75mm", "Standard: IEC 61914", "Current: 630A-2500A"],
          image: electricalFittings
        }
      ]
    },
    {
      id: "turned-components",
      title: "BRASS PRECISION TURNED COMPONENTS",
      description: "CNC machined precision brass components to exact specifications",
      totalProducts: 20,
      products: [
        {
          id: "brass-shaft",
          name: "Brass Shaft",
          description: "Precision-turned brass shaft with tight tolerance requirements for mechanical applications",
          specifications: ["Material: CW617N Brass", "Tolerance: ±0.01mm", "Surface: Ra 0.8", "Length: 10-500mm", "Diameter: 3-50mm"],
          image: turnedComponents,
          isCustomizable: true
        },
        {
          id: "brass-bushing",
          name: "Brass Bushing",
          description: "Precision brass bushing for bearing and sleeve applications",
          specifications: ["Material: CW614N Brass", "Tolerance: ±0.02mm", "Surface: Ra 1.6", "ID: 5-40mm", "OD: 8-50mm"],
          image: turnedComponents,
          isPopular: true
        },
        {
          id: "brass-pin",
          name: "Brass Pin",
          description: "High-precision brass pin for mechanical assemblies and fixtures",
          specifications: ["Material: CW617N Brass", "Tolerance: ±0.005mm", "Surface: Ra 0.4", "Length: 5-100mm", "Diameter: 1-20mm"],
          image: turnedComponents
        },
        {
          id: "brass-spacer",
          name: "Brass Spacer",
          description: "Precision brass spacer for mechanical spacing and alignment applications",
          specifications: ["Material: CW617N Brass", "Tolerance: ±0.02mm", "Surface: Ra 1.6", "ID: 3-40mm", "OD: 6-50mm"],
          image: turnedComponents
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
          id: "ball-valve",
          name: "Ball Valve",
          description: "Quarter-turn brass ball valve with lever handle for on/off flow control",
          specifications: ["Material: CW617N Brass", "Type: Full Port", "Size: 1/2\" to 2\"", "Pressure: 25 bar", "Handle: Lever"],
          image: brassValve,
          isPopular: true
        },
        {
          id: "check-valve",
          name: "Check Valve",
          description: "Spring-loaded brass check valve to prevent backflow in piping systems",
          specifications: ["Material: CW617N Brass", "Type: Spring Check", "Size: 1/4\" to 1.5\"", "Pressure: 16 bar", "Flow: Vertical/Horizontal"],
          image: brassValve
        },
        {
          id: "gate-valve",
          name: "Gate Valve",
          description: "Rising stem brass gate valve for full flow applications",
          specifications: ["Material: CW617N Brass", "Type: Rising Stem", "Size: 1/2\" to 2\"", "Pressure: 16 bar", "Operation: Manual"],
          image: brassValve,
          isCustomizable: true
        },
        {
          id: "globe-valve",
          name: "Globe Valve",
          description: "Brass globe valve for precise flow control and throttling applications",
          specifications: ["Material: CW617N Brass", "Type: Globe", "Size: 1/2\" to 2\"", "Pressure: 16 bar", "Control: Manual"],
          image: brassValve
        }
      ]
    }
  ];

  const handleViewProduct = (categoryId: string, productId: string) => {
    console.log(`View product: ${productId} in category: ${categoryId}`);
    // Navigate to product detail page
  };

  const handleRequestQuote = (productName: string) => {
    console.log(`Request quote for: ${productName}`);
  };

  const handleDownloadSpecs = (productName: string) => {
    console.log(`Download specifications for: ${productName}`);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Accordion type="single" collapsible className="space-y-6">
        {productCategories.map((category) => (
          <AccordionItem
            key={category.id}
            value={category.id}
            className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.products.map((product, index) => (
                  <div
                    key={product.id}
                    className="bg-background border border-border rounded-xl p-6 hover:shadow-sm transition-all duration-200 group"
                  >
                    {/* Product Image */}
                    <div className="relative rounded-lg overflow-hidden bg-muted/30 aspect-video mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => handleViewProduct(category.id, product.id)}
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {product.isPopular && (
                          <Badge className="bg-secondary text-secondary-foreground text-xs">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                        {product.isNew && (
                          <Badge className="bg-accent text-accent-foreground text-xs">
                            New
                          </Badge>
                        )}
                        {product.isCustomizable && (
                          <Badge variant="outline" className="border-primary text-primary text-xs">
                            Custom
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-bold text-primary font-poppins group-hover:text-secondary transition-colors duration-200">
                        {product.name}
                      </h4>
                      <p className="text-muted-foreground text-sm font-inter line-clamp-2">
                        {product.description}
                      </p>

                      {/* Key Specifications */}
                      <div className="space-y-1">
                        <h5 className="text-xs font-semibold text-primary font-poppins">
                          Key Specifications:
                        </h5>
                        <div className="space-y-1">
                          {product.specifications.slice(0, 3).map((spec, specIndex) => (
                            <div key={specIndex} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-muted-foreground font-inter">
                                {spec}
                              </span>
                            </div>
                          ))}
                          {product.specifications.length > 3 && (
                            <span className="text-xs text-secondary font-medium">
                              +{product.specifications.length - 3} more specs
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Link to={`/products/${category.id}/${product.id}`}>
                          <Button
                            size="sm"
                            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-xs"
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            View Details
                          </Button>
                        </Link>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDownloadSpecs(product.name)}
                          className="border-accent text-accent hover:bg-accent/10 text-xs"
                        >
                          <Download className="w-3 h-3 mr-1" />
                          Specs
                        </Button>
                        <Link to="/contact">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRequestQuote(product.name)}
                            className="border-primary text-primary hover:bg-primary/10 text-xs"
                          >
                            <ShoppingCart className="w-3 h-3 mr-1" />
                            Quote
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Products Link */}
              <div className="mt-6 text-center">
                <Link to={`/products/category/${category.id}`}>
                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                    View All {category.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20 rounded-2xl p-8">
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
                Custom Manufacturing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:border-accent">
              <FileText className="mr-2 h-4 w-4" />
              Download Complete Catalog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryAccordion;