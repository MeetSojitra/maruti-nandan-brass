import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Play } from "lucide-react";
import heroImage from "@/assets/hero-manufacturing.jpg";
// import SpotlightButton from "@/components/SpotlightButton.jsx"



const Hero = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Precision brass manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-0">
        <div className={`transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Company Badge */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6 sm:mb-8">
            <span className="text-secondary font-medium text-xs sm:text-sm tracking-wide">
              ENGINEERED TO FIT
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 font-poppins leading-tight">
            <span className="block">Elevating Industries</span>
            <span className="text-secondary">With Precision Brass</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto font-inter px-4">
            For Global Industries - Custom Manufacturing Solutions Since 2000
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
            {['PPR/CPVC/UPVC Inserts', 'Precision Turned Parts', 'Valves & Fittings', 'Custom Solutions'].map((feature, index) => (
              <div
                key={feature}
                className={`px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white text-xs sm:text-sm font-medium transition-all duration-300 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${300 + index * 50}ms` }}
              >
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-all duration-500 px-4 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>

            <Link to="/products" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg w-full sm:w-auto text-sm sm:text-base"
              >
                Browse Components
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-secondary-foreground hover:bg-white/10 backdrop-blur-sm font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg w-full sm:w-auto text-sm sm:text-base"
            >
              <Download className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
              Product Catalog
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;