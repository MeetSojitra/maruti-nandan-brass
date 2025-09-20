import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Target, Handshake, ArrowRight, Star } from "lucide-react";

const CompanySection = () => {
  const milestones = [
    { year: "2000", event: "Company Founded", description: "Started with vision for precision manufacturing" },
    { year: "2001", event: "ISO Certification", description: "Achieved ISO 9001:2000 quality certification" },
    { year: "2008", event: "Export Expansion", description: "Extended operations to international markets" },
    { year: "2015", event: "Advanced CNC", description: "Invested in state-of-the-art CNC machinery" },
    { year: "2020", event: "Digital Transformation", description: "Implemented Industry 4.0 technologies" },
    { year: "2023", event: "Sustainability Initiative", description: "Launched green manufacturing program" }
  ];

  const philosophyItems = [
    {
      icon: Target,
      title: "Precision",
      description: "Uncompromising accuracy in every component we manufacture",
      color: "text-secondary"
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Building long-term relationships with clients and suppliers",
      color: "text-accent"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Continuous improvement and innovation in our processes",
      color: "text-highlight"
    },
    {
      icon: Users,
      title: "Reliability",
      description: "Consistent quality and on-time delivery you can count on",
      color: "text-primary"
    }
  ];

  const achievements = [
    "28+ Years of Manufacturing Excellence",
    "ISO 9001:2015 Quality Certified",
    "25+ Countries Export Experience",
    "Zero Environmental Incidents",
    "500+ Satisfied Global Clients",
    "99.5% On-Time Delivery Rate"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Building2 className="w-4 h-4 mr-2 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wide">
              ABOUT MARUTI NANDAN ENTERPRISE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-poppins">
            Engineering Excellence Since 2000
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-inter leading-relaxed">
            From a small workshop to a recognized name in precision brass components, our journey has been driven by an unwavering commitment to quality, innovation, and customer satisfaction.
          </p>
        </div>

        {/* Company Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary font-poppins">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground font-inter">
              <p className="text-lg leading-relaxed">
                Maruti Nandan Enterprise was founded with a simple yet powerful vision: to become the most trusted name in precision brass component manufacturing. What started as a small family business has evolved into a globally recognized manufacturer serving diverse industries.
              </p>
              <p className="text-lg leading-relaxed">
                Our expertise spans across PPR/CPVC/UPVC inserts, precision turned parts, valves, fittings, and custom manufacturing solutions. Every component that leaves our facility is a testament to our commitment to engineering excellence.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we proudly serve clients across 25+ countries, maintaining the same dedication to quality and precision that defined our humble beginnings.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-primary font-poppins">
                Key Achievements
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium text-primary font-inter">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary font-poppins">
              Our Journey
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-accent"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year}
                    className="relative flex items-start space-x-6 animate-fade-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-gradient-secondary rounded-full shadow-md">
                      <div className="w-3 h-3 bg-secondary-foreground rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="outline" className="text-secondary border-secondary/30 font-bold">
                          {milestone.year}
                        </Badge>
                        <h4 className="text-lg font-bold text-primary font-poppins">
                          {milestone.event}
                        </h4>
                      </div>
                      <p className="text-muted-foreground font-inter">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4 font-poppins">
              Our Core Values
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              These principles guide every decision we make and every component we manufacture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophyItems.map((item, index) => (
              <div 
                key={item.title}
                className="bg-card border border-border rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 animate-scale-hover group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-full mb-6 shadow-md group-hover:scale-105 transition-transform duration-300 ${item.color}`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3 font-poppins group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-muted-foreground font-inter">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Owner's Message */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary mb-4 font-poppins">
              Message from Leadership
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-lg md:text-xl text-muted-foreground font-inter leading-relaxed text-center italic mb-8">
              "Our success is built on three pillars: uncompromising quality, continuous innovation, and genuine partnerships with our clients. Every day, we strive to exceed expectations and set new standards in precision manufacturing. The trust our clients place in us is not just a privilege—it's a responsibility we take seriously."
            </blockquote>
            
            <div className="text-center">
              <div className="inline-flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl font-poppins">MN</span>
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-primary font-poppins">
                    Managing Director
                  </div>
                  <div className="text-muted-foreground font-inter">
                    Maruti Nandan Enterprise
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;