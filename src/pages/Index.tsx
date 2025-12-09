import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FightersSection from "@/components/FightersSection";
import GameModesSection from "@/components/GameModesSection";
import MediaSection from "@/components/MediaSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FightersSection />
      <GameModesSection />
      <MediaSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
