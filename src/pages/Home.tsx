import { motion } from 'framer-motion';
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductGallery from "@/components/ProductGallery";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const highlights = [
    "28+ Years Manufacturing Excellence",
    "ISO 9001:2015 Certified",
    "25+ Countries Export Experience",
    "500+ Satisfied Global Clients"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Hero />
      <StatsSection />
      <FeaturedProducts />
      <ProductGallery />
      
      
      {/* Company Overview */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <Award className="w-4 h-4 mr-2 text-secondary" />
                <span className="text-secondary font-semibold text-sm">TRUSTED MANUFACTURER</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6 font-poppins">
                Engineering Excellence Since 2000
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 font-inter">
                Maruti Nandan Enterprise has been at the forefront of precision brass component manufacturing, 
                serving diverse industries with uncompromising quality and innovative solutions.
              </p>
              <div className="space-y-3 mb-8">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground font-inter">{highlight}</span>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-brass">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-card border border-border rounded-lg p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <Globe className="h-6 sm:h-8 w-6 sm:w-8 text-secondary mx-auto mb-2 sm:mb-3" />
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">25+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Countries Served</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-card border border-border rounded-lg p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <Award className="h-6 sm:h-8 w-6 sm:w-8 text-secondary mx-auto mb-2 sm:mb-3" />
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">150+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Product Types</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-card border border-border rounded-lg p-4 sm:p-6 text-center col-span-2 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">99.5%</div>
                <div className="text-sm sm:text-base text-muted-foreground">On-Time Delivery Rate</div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Product Preview */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6 font-poppins">
            Precision Components for Every Industry
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto font-inter">
            From PPR inserts to precision turned parts, we manufacture brass components 
            that meet the highest standards of quality and precision.
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-brass">
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
    </motion.div>
  );
};

export default Home;