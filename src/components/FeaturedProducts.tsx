import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import brassInsert from "@/assets/products/brass-ppr-insert.jpg";
import brassValve from "@/assets/details/valves.webp";
import electricalFittings from "@/assets/products/brass_electric_fittings.webp";
import turnedComponents from "@/assets/products/turned-components.jpg";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "PPR/CPVC Inserts",
      image: brassInsert,
      description: "Precision brass inserts for plumbing systems"
    },
    {
      id: 2,
      title: "Brass Valves",
      image: brassValve,
      description: "High-quality valves for industrial applications"
    },
    {
      id: 3,
      title: "Electrical Fittings",
      image: electricalFittings,
      description: "Brass components for electrical installations"
    },
    {
      id: 4,
      title: "Turned Components",
      image: turnedComponents,
      description: "Precision Advanced machined brass parts"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-gradient-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6 font-poppins">
            Featured Products
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover our range of precision-engineered brass components designed for durability and performance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {featuredProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-product group cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.title} - Precision brass components by Maruti Nandan Enterprise`}
                  className="w-full h-full object-cover hover-zoom"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 font-poppins">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <Link to="/products">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary transition-all duration-300"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button variant="secondary" size="lg" className="shadow-brass">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProducts;