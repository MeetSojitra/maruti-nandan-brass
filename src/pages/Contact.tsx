import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91-80589-75797", "+91-96629-13469"],
      description: "Mon - Sat: 9:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@marutinandan.com", "sales@marutinandan.com"],
      description: "24/7 Email Support"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["SHED NO:- 524, GIDC, PHASE-2, DARED, Jamnagar, Gujarat 361006", "India"],
      description: "Visit our manufacturing facility"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Thursday", "9:00 AM - 6:00 PM IST", "Friday: Closed", "Saturday - Sunday","9:00 AM - 6:00 PM IST"],
      description: "Closed on Friday and holidays"
    }
  ];

  const officeFeatures = [
    "Modern manufacturing facility",
    "Quality testing laboratory", 
    "Customer meeting rooms",
    "Sample display center",
    "Technical consultation area",
    "Secure parking available"
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
            <MessageSquare className="w-4 h-4 mr-2 text-secondary" />
            <span className="text-secondary font-semibold text-sm">CONTACT US</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-inter">
            Ready to discuss your precision brass component requirements? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div key={method.title} className="bg-card border border-border rounded-lg p-6 text-center">
                <method.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-primary mb-3 font-poppins">{method.title}</h3>
                <div className="space-y-1 mb-2">
                  {method.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-sm font-medium text-muted-foreground">{detail}</div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground font-inter">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Office Information */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-poppins">
                Visit Our Facility
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-inter">
                Experience our manufacturing capabilities firsthand. Our modern facility 
                features state-of-the-art equipment and quality control systems.
              </p>
              
              <div className="space-y-3 mb-8">
                <h3 className="text-lg font-bold text-primary font-poppins">Facility Features</h3>
                {officeFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground font-inter">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-4 font-poppins">Office Address</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-primary">Maruti Nandan Enterprise</div>
                    <div className="text-muted-foreground text-sm">Shead NO:- 524, GIDC, PHASE-II, DARED</div>
                    <div className="text-muted-foreground text-sm">Jamnagar - 361006</div>
                    <div className="text-muted-foreground text-sm">Gujarat, India</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <div className="text-muted-foreground text-sm">+91-80589-75797</div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <div className="text-muted-foreground text-sm">info@marutinandan.com</div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-secondary" />
                  <div className="text-muted-foreground text-sm">Mon - Sat: 9:00 AM - 6:00 PM</div>
                </div>
              </div>

              {/* Map Placeholder */}
              {/* <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Interactive Map</div>
                  <div className="text-xs text-muted-foreground">Click to view in maps app</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-poppins">
              Urgent Requirements?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto font-inter">
              For urgent manufacturing requirements or technical emergencies, 
              contact our dedicated support team available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="font-medium text-primary">Emergency: +91-80589-75797</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="font-medium text-primary">urgent@marutinandan.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;