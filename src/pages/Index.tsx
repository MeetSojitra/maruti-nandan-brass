import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ProductCategories from "@/components/ProductCategories";
import CompanySection from "@/components/CompanySection";
import QualitySection from "@/components/QualitySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsSection />
      <ProductCategories />
      <CompanySection />
      <QualitySection />
      <ContactSection />
    </div>
  );
};

export default Index;
