import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 cage-pattern opacity-5" />
      
      {/* Red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-1 bg-primary/20 border border-primary/50 rounded-sm text-primary text-xs font-semibold uppercase tracking-widest mb-6">
            Be First to Fight
          </span>

          {/* Title */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
            <span className="text-foreground">ENTER THE</span>
            <br />
            <span className="text-gradient-red">OCTAGON</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of fighters waiting for the ultimate MMA experience. 
            Wishlist now and get exclusive early access, beta invites, and in-game rewards.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" className="w-full sm:w-auto animate-pulse-glow">
              Wishlist on Steam
            </Button>
            <Button variant="gold" size="xl" className="w-full sm:w-auto">
              Join Discord
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-border/30">
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl text-foreground">125K+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Wishlists</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl text-foreground">50K+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Discord Members</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl text-foreground">Q2 2025</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Release Window</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
