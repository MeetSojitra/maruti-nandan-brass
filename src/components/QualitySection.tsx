import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, Award, Shield, Microscope, FileCheck } from "lucide-react";
import facilityImage from "@/assets/facility-interior.jpg";
import qualityBadge from "@/assets/quality-badge.jpg";

const QualitySection = () => {
  const [activeTab, setActiveTab] = useState('certifications');

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management Systems",
      status: "Certified",
      icon: Award
    },
    {
      name: "ROHS Compliance",
      description: "Restriction of Hazardous Substances",
      status: "Compliant",
      icon: Shield
    },
    {
      name: "MSME Registered",
      description: "Micro, Small & Medium Enterprise",
      status: "Verified",
      icon: CheckCircle
    },
    {
      name: "Material Traceability",
      description: "Complete supply chain documentation",
      status: "Implemented",
      icon: FileCheck
    }
  ];

  const qualityProcesses = [
    {
      step: "01",
      title: "Material Inspection",
      description: "Incoming raw materials undergo rigorous quality checks"
    },
    {
      step: "02", 
      title: "In-Process Monitoring",
      description: "Continuous monitoring during manufacturing operations"
    },
    {
      step: "03",
      title: "Dimensional Verification",
      description: "Precision measurement using advanced metrology equipment"
    },
    {
      step: "04",
      title: "Final Testing",
      description: "Comprehensive testing before packaging and dispatch"
    }
  ];

  const qualityMetrics = [
    { label: "Defect Rate", value: "<0.1%", description: "Industry leading quality standards" },
    { label: "On-Time Delivery", value: "99.5%", description: "Reliable supply chain performance" },
    { label: "Customer Satisfaction", value: "98%", description: "Based on customer feedback surveys" },
    { label: "Process Capability", value: "Cpk > 1.67", description: "Statistical process control metrics" }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Microscope className="w-4 h-4 mr-2 text-accent" />
            <span className="text-accent font-semibold text-sm tracking-wide">
              QUALITY ASSURANCE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-poppins">
            Precision in Every Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Our commitment to quality extends from material selection to final delivery, ensuring every component meets the highest industry standards
          </p>
        </div>

        {/* Quality Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {qualityMetrics.map((metric, index) => (
            <div 
              key={metric.label}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-accent mb-2 font-poppins">
                {metric.value}
              </div>
              <div className="text-primary font-semibold mb-2 font-inter">
                {metric.label}
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Facility Image */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={facilityImage} 
                alt="Manufacturing facility interior" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-1 font-poppins">
                  State-of-the-Art Facility
                </h3>
                <p className="text-white/90 text-sm font-inter">
                  Advanced CNC machinery and quality control systems
                </p>
              </div>
            </div>

            {/* Quality Badge */}
            <div className="flex items-center justify-center">
              <div className="bg-card border border-border rounded-xl p-8 shadow-lg text-center max-w-sm">
                <img 
                  src={qualityBadge} 
                  alt="Quality certification badge" 
                  className="w-24 h-24 mx-auto mb-4 rounded-full shadow-md"
                />
                <h4 className="text-lg font-bold text-primary mb-2 font-poppins">
                  Quality Certified
                </h4>
                <p className="text-sm text-muted-foreground font-inter">
                  Internationally recognized quality standards
                </p>
              </div>
            </div>
          </div>

          {/* Tabs Content */}
          <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-muted rounded-lg p-1">
              <button
                onClick={() => setActiveTab('certifications')}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'certifications' 
                    ? 'bg-card text-primary shadow-sm' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Certifications
              </button>
              <button
                onClick={() => setActiveTab('processes')}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === 'processes' 
                    ? 'bg-card text-primary shadow-sm' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                QC Process
              </button>
            </div>

            {/* Certifications Tab */}
            {activeTab === 'certifications' && (
              <div className="space-y-4 animate-fade-up">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert.name}
                    className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-lg shadow-md">
                        <cert.icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-primary font-poppins">
                            {cert.name}
                          </h4>
                          <Badge variant="outline" className="text-success border-success/30">
                            {cert.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3 font-inter">
                          {cert.description}
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-accent border-accent/30 hover:bg-accent/5"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download Certificate
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* QC Process Tab */}
            {activeTab === 'processes' && (
              <div className="space-y-6 animate-fade-up">
                {qualityProcesses.map((process, index) => (
                  <div 
                    key={process.step}
                    className="flex items-start space-x-6 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-secondary rounded-full shadow-md font-bold text-secondary-foreground">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-primary mb-2 font-poppins">
                        {process.title}
                      </h4>
                      <p className="text-muted-foreground font-inter">
                        {process.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-poppins">
              Quality Documentation Available
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto font-inter">
              Access our complete quality documentation including test certificates, material traceability reports, and compliance statements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent-light font-semibold px-8 py-4 shadow-accent animate-scale-hover"
              >
                <Download className="mr-2 h-5 w-5" />
                Quality Manual
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/30 text-primary hover:bg-primary/5 font-semibold px-8 py-4"
              >
                Request Audit Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;