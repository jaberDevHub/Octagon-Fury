import { Swords, Users, Target, Wifi, Shield, Gamepad2 } from "lucide-react";

const features = [
  {
    icon: Swords,
    title: "Deep Striking System",
    description: "Over 200 authentic strikes including jabs, hooks, uppercuts, head kicks, and devastating combos. Every punch matters.",
    accent: "primary",
  },
  {
    icon: Target,
    title: "Advanced Grappling",
    description: "Revolutionary clinch and ground game with position-based submissions, reversals, and cage work that rewards skill.",
    accent: "gold",
  },
  {
    icon: Users,
    title: "80+ Unique Fighters",
    description: "Each fighter with distinct styles, stats, and signature moves. Build your own legend in Career Mode.",
    accent: "primary",
  },
  {
    icon: Wifi,
    title: "Rollback Netcode",
    description: "Tournament-grade online multiplayer with GGPO-style rollback for buttery smooth, lag-free competitive play.",
    accent: "gold",
  },
  {
    icon: Shield,
    title: "Realistic Damage",
    description: "Cumulative damage system tracks body and head health. Stamina management is key to victory.",
    accent: "primary",
  },
  {
    icon: Gamepad2,
    title: "Dual Control Schemes",
    description: "Choose Simulation mode for depth or Arcade mode for accessibility. Full controller and keyboard support.",
    accent: "gold",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cage-dark to-background" />
      <div className="absolute inset-0 carbon-texture opacity-30" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/30 rounded-sm text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
            <span className="text-foreground">FIGHT</span>{" "}
            <span className="text-gradient-red">YOUR WAY</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Every system designed from the ground up for the ultimate mixed martial arts experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-gradient-card border border-border/50 rounded-lg p-6 md:p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                feature.accent === "primary" 
                  ? "bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground" 
                  : "bg-gold/20 text-gold group-hover:bg-gold group-hover:text-background"
              }`}>
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl md:text-2xl tracking-wide text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
