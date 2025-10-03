import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, Factory, Search, Package, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Certification {
  id: string;
  name: string;
  fullName: string;
  description: string;
  status: 'Active' | 'Verified' | 'Current';
  validUntil?: string;
}

interface QualityStep {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const certifications: Certification[] = [
  {
    id: 'iso9001',
    name: 'ISO 9001:2015',
    fullName: 'Quality Management Systems',
    description: 'International standard for quality management systems ensuring consistent product quality and customer satisfaction.',
    status: 'Active',
    validUntil: '2025'
  },
  {
    id: 'rohs',
    name: 'RoHS',
    fullName: 'Restriction of Hazardous Substances',
    description: 'European compliance standard ensuring our products are free from hazardous substances.',
    status: 'Verified'
  },
  {
    id: 'msme',
    name: 'MSME',
    fullName: 'Micro, Small & Medium Enterprises',
    description: 'Government of India certification recognizing our commitment to quality manufacturing.',
    status: 'Current'
  }
];

const qualitySteps: QualityStep[] = [
  {
    id: 1,
    title: 'Raw Material',
    description: 'Premium brass sourcing with quality verification',
    icon: Factory
  },
  {
    id: 2,
    title: 'Advanced Machinery',
    description: 'Precision manufacturing with state-of-the-art equipment',
    icon: Cog
  },
  {
    id: 3,
    title: 'Quality Inspection',
    description: 'Rigorous testing and quality control procedures',
    icon: Search
  },
  {
    id: 4,
    title: 'Packaging',
    description: 'Secure packaging ensuring product integrity',
    icon: Package
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const cardHoverVariants = {
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3
    }
  }
};

const CertificationsSection: React.FC = () => {
  const handleDownloadCertificate = (certId: string) => {
    // In a real implementation, this would trigger a download
    console.log(`Downloading certificate: ${certId}`);
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <Badge 
              variant="secondary" 
              className="mb-4 px-4 py-2 text-sm font-semibold bg-secondary text-secondary-foreground"
            >
              QUALITY ASSURANCE
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Certifications & Quality Standards
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Since 2005, Maruti Nandan Enterprise has maintained the highest quality standards 
              through rigorous certification processes and continuous improvement initiatives.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Our Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  className="group"
                >
                  <Card className="h-full card-industrial group-hover:border-secondary/40 transition-colors duration-300">
                    <CardContent className="p-6 space-y-4">
                      {/* Certification Badge */}
                      <div className="flex items-center justify-between">
                        <div className="w-16 h-16 bg-gradient-secondary rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-8 h-8 text-secondary-foreground" />
                        </div>
                        <Badge 
                          variant="outline" 
                          className="text-xs border-success text-success"
                        >
                          {cert.status}
                        </Badge>
                      </div>

                      {/* Certification Info */}
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-foreground">
                          {cert.name}
                        </h4>
                        <p className="text-sm font-medium text-secondary">
                          {cert.fullName}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {cert.description}
                        </p>
                        {cert.validUntil && (
                          <p className="text-xs text-muted-foreground">
                            Valid until: {cert.validUntil}
                          </p>
                        )}
                      </div>

                      {/* Download Button */}
                      <Button
                        onClick={() => handleDownloadCertificate(cert.id)}
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Certificate
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quality Process Flow */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Our Quality Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualitySteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  className="group relative"
                >
                  {/* Connection Line (hidden on mobile) */}
                  {index < qualitySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-secondary z-10" />
                  )}
                  
                  <Card className="card-industrial group-hover:border-accent/40 transition-colors duration-300">
                    <CardContent className="p-6 text-center space-y-4">
                      {/* Step Number */}
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mx-auto">
                        {step.id}
                      </div>

                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto">
                        <step.icon className="w-8 h-8 text-accent-foreground" />
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h4 className="text-lg font-bold text-foreground">
                          {step.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center space-y-6 bg-gradient-overlay rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
              Quality You Can Trust
            </h3>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Experience the difference that 18+ years of manufacturing excellence makes. 
              Request our quality documentation or schedule a facility audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="btn-secondary"
                onClick={() => console.log('Request quality manual')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Quality Manual
              </Button>
              {/* <Button 
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => console.log('Request audit report')}
              >
                Request Audit Report
              </Button> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;