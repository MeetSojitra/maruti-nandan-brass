import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Zap, Cog, Settings, HardHat, Circle } from "lucide-react";
import brassComponents from "@/assets/brass-components.jpg";

const ProductCategories = () => {
  const categories = [
    {
      icon: Wrench,
      title: "PPR/CPVC/UPVC Inserts",
      description: "High-precision threaded inserts for plumbing applications",
      features: ["Corrosion Resistant", "Multiple Sizes", "Custom Threading"],
      color: "border-secondary/30 hover:border-secondary/60"
    },
    {
      icon: Cog,
      title: "Precision Turned Parts",
      description: "Advanced machined components with tight tolerances",
      features: ["±0.01mm Tolerance", "Surface Finish Ra 0.8", "Custom Specifications"],
      color: "border-accent/30 hover:border-accent/60"
    },
    {
      icon: Circle,
      title: "Valves & Fittings",
      description: "Industrial grade valves and connection fittings",
      features: ["Pressure Tested", "Lead Free", "Multiple Configurations"],
      color: "border-highlight/30 hover:border-highlight/60"
    },
    {
      icon: Zap,
      title: "Electric Fittings",
      description: "Electrical conduit fittings and accessories",
      features: ["Fire Retardant", "UL Listed", "Multiple Entry Points"],
      color: "border-primary/30 hover:border-primary/60"
    },
    {
      icon: Settings,
      title: "Bushes & Fasteners",
      description: "Precision bushings and fastening solutions",
      features: ["Self-Lubricating", "Wear Resistant", "Custom Dimensions"],
      color: "border-secondary/30 hover:border-secondary/60"
    },
    {
      icon: HardHat,
      title: "Hardware Components",
      description: "Forged and machined hardware solutions",
      features: ["High Strength", "Corrosion Proof", "Industrial Grade"],
      color: "border-accent/30 hover:border-accent/60"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="text-secondary font-semibold text-sm tracking-wide">
              OUR EXPERTISE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-poppins">
            Precision Engineered for Every Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            From concept to delivery, we manufacture brass components that meet the highest standards of quality and precision
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={brassComponents} 
              alt="Precision brass components showcase" 
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 font-poppins">
                Manufacturing Excellence
              </h3>
              <p className="text-white/90 font-inter">
                State-of-the-art Machinery machinery and quality control systems
              </p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              className={`card-industrial p-8 border-2 ${category.color} transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-lg group`}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-secondary rounded-lg mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
                <category.icon className="h-7 w-7 text-secondary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-3 font-poppins group-hover:text-secondary transition-colors duration-300">
                {category.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 font-inter">
                {category.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                    <span className="text-muted-foreground font-inter">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary transition-all duration-300"
              >
                View Details
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-poppins">
              Need Custom Solutions?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto font-inter">
              Contact us for detailed specifications, pricing information, and delivery schedules for our complete product range
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-4 shadow-brass"
              >
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-accent text-accent hover:bg-accent/10 hover:border-accent font-semibold px-8 py-4"
              >
                Product Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;