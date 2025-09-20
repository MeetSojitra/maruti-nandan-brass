import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import msmeLogoUrl from '@/assets/certifications/msme-logo.png';
import isoLogoUrl from '@/assets/certifications/iso-logo.png';
import rohsLogoUrl from '@/assets/certifications/rohs-logo.png';

interface Certification {
  id: string;
  name: string;
  logo: string;
  description: string;
}

const certifications: Certification[] = [
  {
    id: 'msme',
    name: 'MSME Certified',
    logo: msmeLogoUrl,
    description: 'Government of India MSME Registration'
  },
  {
    id: 'iso',
    name: 'ISO 9001:2015',
    logo: isoLogoUrl,
    description: 'Quality Management System Certified'
  },
  {
    id: 'rohs',
    name: 'RoHS Compliant',
    logo: rohsLogoUrl,
    description: 'Restriction of Hazardous Substances Compliant'
  }
];

const FloatingCertificationBadge = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useIsMobile();

  // Auto-collapse on mobile after delay
  useEffect(() => {
    if (isExpanded && isMobile) {
      const timer = setTimeout(() => {
        setIsExpanded(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isExpanded, isMobile]);

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop and Tablet Version */}
      <div className="hidden md:block fixed left-2 lg:left-4 top-1/2 -translate-y-1/2 z-40">
        {
          isExpanded ? (
            <div className={`transition-all duration-5000 ease-in-out ${isExpanded ? 'translate-x-0' : 'lg:-translate-x-52 md:-translate-x-44'
              }`}>
              <Card className="bg-card/95 backdrop-blur-sm border-2 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 p-3 lg:p-4 space-y-3 w-44 lg:w-64">
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-semibold text-foreground">Certifications</span>
                  </div>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-muted/50 rounded"
                    aria-label="Close certifications"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Certification List */}
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="flex items-center gap-3 p-2 lg:p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 group cursor-pointer hover:scale-[1.02] hover:shadow-md"
                    >
                      <div className="relative w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0">
                        <img
                          src={cert.logo}
                          alt={`${cert.name} logo`}
                          className="w-full h-full object-contain rounded group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs lg:text-sm font-medium text-foreground leading-tight">
                          {cert.name}
                        </div>
                        <div className="text-xs text-muted-foreground leading-tight">
                          {cert.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>) : (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              // className={`absolute top-1/2 -translate-y-1/2 transition-all duration-500 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-xl rounded-r-lg p-2 lg:p-3 hover:scale-105 ${isExpanded ? 'left-full ml-0' : 'left-full ml-1 lg:ml-2'
              //   }`}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 active:scale-95"
            
              aria-label={isExpanded ? 'Collapse certifications' : 'Expand certifications'}
            >
              <Award className="h-5 w-5" />
            </button>)
        }
      </div>

      {/* Mobile Version */}
      <div className="md:hidden fixed bottom-4 left-4 z-40">
        {!isExpanded ? (
          /* Collapsed Mobile Button */
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 animate-pulse hover:scale-110 active:scale-95"
            aria-label="View certifications"
          >
            <Award className="h-5 w-5" />
          </button>
        ) : (
          /* Expanded Mobile View */
          <Card className="bg-card/95 backdrop-blur-sm border-2 border-border/50 shadow-xl p-4 w-80 max-w-[calc(100vw-2rem)] animate-scale-in">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                <span className="font-semibold text-foreground">Our Certifications</span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-muted/50 rounded"
                aria-label="Close certifications"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <img
                      src={cert.logo}
                      alt={`${cert.name} logo`}
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground leading-tight">
                      {cert.name}
                    </div>
                    <div className="text-sm text-muted-foreground leading-tight">
                      {cert.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </>
  );
};

export default FloatingCertificationBadge;