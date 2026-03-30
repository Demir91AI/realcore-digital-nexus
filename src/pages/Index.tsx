import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import AISolutionsSection from "@/components/AISolutionsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <CustomCursor />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ProcessSection />
    <AISolutionsSection />
    <PortfolioSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
    <BackToTop />
  </div>
);

export default Index;
