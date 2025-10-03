import { motion } from 'framer-motion';
import manufacturingProcess from "@/assets/gallery/manufacturing-process.jpg";
import qualityControl from "@/assets/gallery/quality-control.jpg";
import facilityInterior from "@/assets/facility-interior.jpg";
import brassComponents from "@/assets/brass-components.jpg";

const ProductGallery = () => {

  const galleryImages = [
    {
      src: manufacturingProcess,
      title: "Manufacturing Excellence",
      description: "State-of-the-art Advanced machining for precision components"
    },
    {
      src: qualityControl,
      title: "Quality Assurance",
      description: "Rigorous testing ensures every component meets standards"
    },
    {
      src: facilityInterior,
      title: "Modern Facility",
      description: "Advanced manufacturing infrastructure for reliable production"
    },
    {
      src: brassComponents,
      title: "Product Range",
      description: "Comprehensive collection of precision brass components"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6 font-poppins">
            Manufacturing Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a closer look at our precision manufacturing process and quality standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }
              }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={image.src}
                    alt={`${image.title} - ${image.description}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 font-poppins">
                    {image.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-inter">
                    {image.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProductGallery;