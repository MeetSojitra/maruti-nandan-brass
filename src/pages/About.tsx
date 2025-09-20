import CompanySection from "@/components/CompanySection";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import facilityImage from "@/assets/facility-interior.jpg";

const About = () => {
  const certifications = [
    "ISO 9001:2015 Quality Management",
    "MSME Registered",
    "Export-Import License",
    "GST Registered"
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
            <Building2 className="w-4 h-4 mr-2 text-secondary" />
            <span className="text-secondary font-semibold text-sm">ABOUT US</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            Engineering Excellence Since 2000
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-inter">
            Three decades of precision manufacturing, innovation, and unwavering commitment to quality
          </p>
        </div>
      </section>

      <CompanySection />
      <StatsSection />

      {/* Infrastructure Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
                State-of-the-Art Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-inter">
                Our modern manufacturing facility is equipped with advanced CNC machinery, 
                precision testing equipment, and quality control systems to ensure every 
                component meets international standards.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">CNC Machines</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">5000</div>
                  <div className="text-sm text-muted-foreground">Sq. Ft. Facility</div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <h3 className="text-lg font-bold text-primary font-poppins">Certifications</h3>
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground font-inter">{cert}</span>
                  </div>
                ))}
              </div>

              <Link to="/quality">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  View Quality Standards
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src={facilityImage} 
                alt="Manufacturing facility interior" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              Experienced professionals dedicated to delivering excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2 font-poppins">Engineering Team</h3>
              <p className="text-muted-foreground font-inter">
                Skilled engineers with decades of experience in precision manufacturing
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2 font-poppins">Quality Control</h3>
              <p className="text-muted-foreground font-inter">
                Dedicated QC specialists ensuring every component meets specifications
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Building2 className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2 font-poppins">Production Team</h3>
              <p className="text-muted-foreground font-inter">
                Expert machinists operating state-of-the-art CNC equipment
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;