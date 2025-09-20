import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productInterest: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and email address",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Inquiry Submitted Successfully",
      description: "Our team will contact you within 24 hours.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productInterest: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Manufacturing Facility",
      details: ["SHED NO:- 524, GIDC, PHASE-2, DARED", "Jamnagar, Gujarat, India 361006"],
      color: "text-accent"
    },
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: ["+91 80589 75797", "+91 96629 13469", "Available 9 AM - 6 PM IST"],
      color: "text-accent"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["sales@marutinandan.com", "info@marutinandan.com", "export@marutinandan.com"],
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Thursday : 9:00 AM - 6:00 PM IST", "Friday: Closed", "Saturday - Sunday : 9:00 AM - 6:00 PM IST"],
      color: "text-primary"
    }
  ];

  const productOptions = [
    "PPR/CPVC/UPVC Inserts",
    "Precision Turned Parts",
    "Valves & Fittings",
    "Electric Fittings",
    "Bushes & Fasteners",
    "Hardware Components",
    "General Inquiry"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary font-semibold text-sm tracking-wide">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-poppins">
            Let's Discuss Your Requirements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Ready to source precision brass components? Our technical team is here to help you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 font-poppins">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="flex items-start space-x-4"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-secondary rounded-lg shadow-md ${info.color}`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2 font-poppins">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground font-inter">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}

          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6 font-poppins">
              Request a Quote
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-primary font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="border-border focus:border-secondary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-primary font-medium">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your company name"
                      className="border-border focus:border-secondary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="border-border focus:border-secondary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-primary font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 80589 75797"
                      className="border-border focus:border-secondary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product-interest" className="text-primary font-medium">
                    Product Interest
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('productInterest', value)}>
                    <SelectTrigger className="border-border focus:border-secondary">
                      <SelectValue placeholder="Select your area of interest" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border shadow-lg">
                      {productOptions.map((option) => (
                        <SelectItem key={option} value={option} className="focus:bg-secondary/10">
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary font-medium">
                    Message / Specifications
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Please describe your requirements, quantities, specifications, or any other details..."
                    rows={5}
                    className="border-border focus:border-secondary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold py-3 shadow-brass"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-secondary-foreground mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Inquiry
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-success/20 to-success/10 rounded-full mb-6">
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3 font-poppins">
                  Thank You for Your Inquiry!
                </h4>
                <p className="text-muted-foreground mb-6 font-inter">
                  We've received your message and our technical team will review your requirements.
                  Expect a response within 24 hours.
                </p>
                <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                  <p className="text-sm text-success font-medium font-inter">
                    Reference ID: MNE-{Date.now().toString().slice(-6)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-muted rounded-2xl h-64 flex items-center justify-center border border-border shadow-inner mt-16">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground font-inter">
              Interactive Map Location
            </p>
            <p className="text-sm text-muted-foreground mt-1 font-inter">
              Jamnagar, Gujarat, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;