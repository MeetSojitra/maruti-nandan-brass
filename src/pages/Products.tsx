import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cog, Download, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { productCategories } from "@/data/products";
import ProductDetails from "@/components/ProductDetails";

const Products = () => {
  const specifications = [
    "Material: High-grade brass alloy",
    "Tolerance: ±0.01mm to ±0.05mm",
    "Surface Finish: Ra 0.8 to Ra 3.2",
    "Thread Standards: ISO, BSP, NPT",
    "Testing: 100% dimensional inspection",
    "Packaging: Protective anti-corrosion coating"
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
            <Cog className="w-4 h-4 mr-2 text-secondary" />
            <span className="text-secondary font-semibold text-sm">OUR PRODUCTS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            Precision Engineered Components
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-inter">
            Comprehensive range of brass components designed for diverse industrial applications
          </p>
        </div>
      </section>

      {/* Product Category Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Shield className="w-4 h-4 mr-2 text-secondary" />
              <span className="text-secondary font-semibold text-sm">PRODUCT CATALOG</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
              Comprehensive Product Range
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              Discover our precision-engineered brass components. Click on any category to explore detailed products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <Link
                key={category.id}
                to={
                  category.subProducts.length > 0
                    ? `/products/${category.id}`
                    : `/product-detail/${category.id}`
                }
                className="group h-full"
              >
                <div className={`h-full flex flex-col bg-gradient-to-br ${category.color} border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer`}>
                  {/* Image Section */}
                  <div className="aspect-[4/3] bg-muted/30 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center">
                              <div class="w-24 h-24 opacity-20">
                                <svg class="w-full h-full text-primary" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-1 p-4">
                    <div className="flex items-start justify-between mb-3">
                      {category.totalProducts > 0 ? (
                        <Badge
                          variant="secondary"
                          className="bg-secondary/20 text-secondary border-secondary/30 text-xs"
                        >
                          {category.totalProducts} Products
                        </Badge>
                      ) : (
                        <span className="flex-1" /> // pushes arrow to the right
                      )}

                      <ArrowRight
                        className="w-4 h-4 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                      />
                    </div>


                    <h3 className="text-lg font-bold text-primary mb-2 font-poppins group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                      {category.title}
                    </h3>

                    <p className="text-muted-foreground font-inter text-sm leading-relaxed line-clamp-3 flex-1">
                      {category.description}
                    </p>

                    <div className="mt-4 flex items-center text-secondary font-medium text-sm">
                      Explore Products
                      <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details with Image Gallery */}
      {/* <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Shield className="w-4 h-4 mr-2 text-secondary" />
              <span className="text-secondary font-semibold text-sm">PRODUCT CATALOG</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
              Comprehensive Product Range
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              Click on any product to view detailed specifications, technical drawings, and high-resolution images
            </p>
          </div>

          <ProductDetails />
        </div>
      </section> */}
      {/* Technical Specifications */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
                Technical Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-inter">
                Every component is manufactured to precise specifications using advanced
                CNC machinery and rigorous quality control processes.
              </p>

              <div className="space-y-3 mb-8">
                <h3 className="text-lg font-bold text-primary font-poppins">Standard Specifications</h3>
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground font-inter">{spec}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-brass">
                  <Download className="mr-2 h-4 w-4" />
                  Download Catalog
                </Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:border-accent">
                  <FileText className="mr-2 h-4 w-4" />
                  Technical Drawings
                </Button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4 font-poppins">Manufacturing Excellence</h3>
              <p className="text-muted-foreground mb-6 font-inter">
                We manufacture precision brass components to exact specifications using advanced
                CNC machinery and rigorous quality control processes for consistent quality delivery.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Minimum Order</span>
                  <span className="text-sm font-medium text-primary">100 pieces</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Lead Time</span>
                  <span className="text-sm font-medium text-primary">2-4 weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Prototype</span>
                  <span className="text-sm font-medium text-primary">3-5 days</span>
                </div>
              </div>

              <Link to="/contact">
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-brass">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
              Industry Applications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              Our brass components serve critical functions across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Plumbing", description: "Pipe fittings, valves, and connections" },
              { name: "Electrical", description: "Conduit fittings and electrical accessories" },
              { name: "Automotive", description: "Engine components and fuel system parts" },
              { name: "Marine", description: "Corrosion-resistant hardware and fittings" },
              { name: "HVAC", description: "Heating and cooling system components" },
              { name: "Industrial", description: "Machinery parts and custom assemblies" },
              { name: "Construction", description: "Building hardware and fasteners" },
              { name: "Oil & Gas", description: "High-pressure valve components" }
            ].map((industry, index) => (
              <div key={industry.name} className="bg-card border border-border rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-primary mb-2 font-poppins">{industry.name}</h3>
                <p className="text-sm text-muted-foreground font-inter">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-poppins">
              Ready to Place Your Order?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto font-inter">
              Contact us today for pricing, technical specifications, and delivery schedules
              for our complete range of precision brass components.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-brass">
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/quality">
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 hover:border-accent">
                  Quality Standards
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;