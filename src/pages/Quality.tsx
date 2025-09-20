import QualitySection from "@/components/QualitySection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle, Award, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import qualityBadge from "@/assets/quality-badge.jpg";

const Quality = () => {
  const qualityProcesses = [
    {
      step: "1",
      title: "Material Inspection",
      description: "Incoming raw materials undergo rigorous quality testing for composition and properties"
    },
    {
      step: "2", 
      title: "Manufacturing Control",
      description: "Real-time monitoring during machining with automated quality checkpoints"
    },
    {
      step: "3",
      title: "Dimensional Verification",
      description: "100% dimensional inspection using precision measuring equipment"
    },
    {
      step: "4",
      title: "Final Testing",
      description: "Comprehensive testing including pressure, threading, and surface finish verification"
    },
    {
      step: "5",
      title: "Documentation",
      description: "Complete traceability with material certificates and quality records"
    }
  ];

  const testingEquipment = [
    "CMM (Coordinate Measuring Machine)",
    "Surface Roughness Tester",
    "Thread Gauges & Micrometers",
    "Hardness Testing Equipment", 
    "Pressure Testing Chamber",
    "Material Composition Analyzer"
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
            <Shield className="w-4 h-4 mr-2 text-secondary" />
            <span className="text-secondary font-semibold text-sm">QUALITY & CERTIFICATIONS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            Uncompromising Quality Standards
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-inter">
            Every component undergoes rigorous testing to ensure it meets international quality standards
          </p>
        </div>
      </section>

      <QualitySection />

      {/* Quality Process */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
              Our Quality Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              A systematic approach to quality assurance at every stage of manufacturing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {qualityProcesses.map((process, index) => (
              <div key={process.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="text-secondary-foreground font-bold text-xl">{process.step}</span>
                  </div>
                  {index < qualityProcesses.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-secondary to-transparent transform translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-primary mb-3 font-poppins">{process.title}</h3>
                <p className="text-sm text-muted-foreground font-inter">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
                Advanced Testing Capabilities
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-inter">
                Our quality laboratory is equipped with state-of-the-art testing equipment 
                to verify dimensional accuracy, material properties, and performance characteristics.
              </p>
              
              <div className="space-y-3 mb-8">
                <h3 className="text-lg font-bold text-primary font-poppins">Testing Equipment</h3>
                {testingEquipment.map((equipment, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground font-inter">{equipment}</span>
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary mb-3 font-poppins">Quality Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">99.8%</div>
                    <div className="text-sm text-muted-foreground">Pass Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">±0.01mm</div>
                    <div className="text-sm text-muted-foreground">Tolerance</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={qualityBadge} 
                alt="Quality certification and testing" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
              Certifications & Compliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              We maintain the highest standards of quality and compliance with international regulations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "ISO 9001:2015",
                description: "Quality Management System certification ensuring consistent quality delivery and customer satisfaction"
              },
              {
                icon: Shield,
                title: "ROHS Compliant",
                description: "Products meet Restriction of Hazardous Substances compliance standards for environmental safety"
              },
              {
                icon: FileCheck,
                title: "MSME Certified",
                description: "Government recognized Micro, Small & Medium Enterprise certification for manufacturing excellence"
              }
            ].map((cert, index) => (
              <div key={cert.title} className="bg-card border border-border rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <cert.icon className="h-16 w-16 text-secondary mx-auto mb-6" />
                <h3 className="text-xl font-bold text-primary mb-4 font-poppins">{cert.title}</h3>
                <p className="text-muted-foreground font-inter">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-poppins">
              Quality You Can Trust
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto font-inter">
              Experience the difference that rigorous quality standards make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-brass">
                  Request Information
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 hover:border-accent">
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;