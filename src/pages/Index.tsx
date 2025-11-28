import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ClientsSection } from '@/components/ClientsSection';
import { TeamSection } from '@/components/TeamSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Film grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <TeamSection />
        <PortfolioSection />
        <ProcessSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
