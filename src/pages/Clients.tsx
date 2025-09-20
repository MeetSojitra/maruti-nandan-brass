import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Globe, Star, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Clients = () => {
  const industries = [
    {
      icon: Building,
      name: "Plumbing & Sanitary",
      description: "Pipe fittings, valves, and water distribution systems",
      applications: ["Residential Plumbing", "Commercial Buildings", "Water Treatment", "Municipal Systems"]
    },
    {
      icon: Globe,
      name: "Electrical & Electronics",
      description: "Conduit fittings and electrical component assemblies",
      applications: ["Cable Management", "Junction Boxes", "Conduit Systems", "Panel Accessories"]
    },
    {
      icon: Star,
      name: "Automotive",
      description: "Engine components and fuel system parts",
      applications: ["Engine Components", "Fuel Systems", "Brake Systems", "Transmission Parts"]
    },
    {
      icon: Users,
      name: "Marine & Offshore",
      description: "Corrosion-resistant hardware for marine applications",
      applications: ["Ship Building", "Offshore Platforms", "Marine Hardware", "Port Equipment"]
    },
    {
      icon: Building,
      name: "HVAC Systems",
      description: "Heating, ventilation, and air conditioning components",
      applications: ["Air Conditioning", "Heating Systems", "Ventilation", "Refrigeration"]
    },
    {
      icon: Star,
      name: "Oil & Gas",
      description: "High-pressure valve components and fittings",
      applications: ["Pipeline Systems", "Refineries", "Drilling Equipment", "Processing Plants"]
    }
  ];

  const testimonials = [
    {
      company: "Leading Plumbing Company",
      location: "Europe",
      feedback: "Exceptional quality and reliability. Their brass fittings have been integral to our projects.",
      representative: "Procurement Manager"
    },
    {
      company: "Marine Systems Provider",
      location: "Asia Pacific", 
      feedback: "Outstanding corrosion resistance and precision. Perfect for our harsh marine environment applications.",
      representative: "Technical Director"
    },
    {
      company: "Industrial Corporation",
      location: "Asia",
      feedback: "Consistent quality and on-time delivery. A trusted partner for our critical component requirements.",
      representative: "Senior Engineer"
    }
  ];

  const globalPresence = [
    { region: "North America", countries: "USA, Canada, Mexico" },
    { region: "Europe", countries: "Germany, UK, France, Italy, Netherlands" },
    { region: "Asia Pacific", countries: "Australia, Japan, Singapore, South Korea" },
    { region: "Middle East", countries: "UAE, Saudi Arabia, Qatar, Kuwait" },
    { region: "South America", countries: "Brazil, Argentina, Chile" },
    { region: "Africa", countries: "South Africa, Nigeria, Egypt" }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
            <Users className="w-4 h-4 mr-2 text-secondary" />
            <span className="text-secondary font-semibold text-sm">CLIENTS & APPLICATIONS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            Serving Industries Worldwide
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-inter">
            Trusted by leading companies across 25+ countries for precision brass component solutions
          </p>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
              Industry Applications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              Our precision brass components serve critical functions across diverse industrial sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={industry.name} className="bg-card border border-border rounded-lg p-6">
                <industry.icon className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3 font-poppins">{industry.name}</h3>
                <p className="text-muted-foreground mb-4 font-inter">{industry.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary">Key Applications:</h4>
                  {industry.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span className="text-sm text-muted-foreground font-inter">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
              Global Presence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              Our components reach customers across continents, supporting infrastructure and industrial projects worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalPresence.map((region, index) => (
              <div key={region.region} className="bg-card border border-border rounded-lg p-6 text-center">
                <Globe className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h3 className="text-lg font-bold text-primary mb-2 font-poppins">{region.region}</h3>
                <p className="text-sm text-muted-foreground font-inter">{region.countries}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-secondary mb-2">25+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                <div className="text-muted-foreground">Active Clients</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-secondary mb-2">99.5%</div>
                <div className="text-muted-foreground">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              Hear from industry leaders who trust us for their critical component needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-secondary" />
                  <Star className="h-5 w-5 text-secondary" />
                  <Star className="h-5 w-5 text-secondary" />
                  <Star className="h-5 w-5 text-secondary" />
                  <Star className="h-5 w-5 text-secondary" />
                </div>
                <blockquote className="text-muted-foreground mb-4 font-inter italic">
                  "{testimonial.feedback}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;