import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";
import heroFighters from "@/assets/hero-fighters.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroFighters})` }}
      />
      {/* Background Effects */}
      <div className="absolute inset-0 cage-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      
      {/* Red accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Pre-title */}
          <div className="opacity-0 animate-slide-up">
            <span className="inline-block px-4 py-1 bg-primary/20 border border-primary/50 rounded-sm text-primary text-xs font-semibold uppercase tracking-widest mb-6">
              Coming 2026
            </span>
          </div>

          {/* Main Title */}
          <h1 className="opacity-0 animate-slide-up delay-100">
            <span className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none">
              <span className="text-foreground">OCTAGON</span>
              <br />
              <span className="text-gradient-red">FURY</span>
            </span>
          </h1>

          {/* Tagline */}
          <p className="opacity-0 animate-slide-up delay-200 mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
            The most authentic MMA experience ever created. 
            <span className="text-foreground"> Master the octagon.</span>
          </p>

          {/* Stats Row */}
          <div className="opacity-0 animate-slide-up delay-300 flex flex-wrap justify-center gap-8 md:gap-16 mt-10 md:mt-12">
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-gradient-gold">80+</div>
              <div className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mt-1">Fighters</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-gradient-gold">12</div>
              <div className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mt-1">Weight Classes</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-gradient-gold">200+</div>
              <div className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mt-1">Moves</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="opacity-0 animate-slide-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 md:mt-12">
            <Button variant="hero" size="xl" className="w-full sm:w-auto animate-pulse-glow">
              Wishlist on Steam
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Trailer
            </Button>
          </div>

          {/* Platform Icons */}
          <div className="opacity-0 animate-slide-up delay-500 flex items-center justify-center gap-6 mt-10 text-muted-foreground">
            <span className="text-xs uppercase tracking-wider">Available on</span>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <span className="font-display text-sm">PC</span>
              </div>
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <span className="font-display text-sm">PS</span>
              </div>
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <span className="font-display text-sm">XB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>

      {/* Side accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-40 bg-primary/50 blur-sm" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-40 bg-primary/50 blur-sm" />
    </section>
  );
};

export default HeroSection;
