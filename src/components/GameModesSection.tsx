import { Trophy, Users, Dumbbell, Globe, Bot, Sparkles } from "lucide-react";

const modes = [
  {
    icon: Trophy,
    title: "Career Mode",
    description: "Rise from unknown prospect to undisputed champion. Train, sign contracts, build rivalries, and cement your legacy across 10+ years of career.",
    features: ["Dynamic storylines", "Training camps", "Contract negotiations"],
    highlight: true,
  },
  {
    icon: Globe,
    title: "Online Ranked",
    description: "Test your skills against fighters worldwide. Climb the leaderboards with our ELO-based ranking system and earn exclusive rewards.",
    features: ["Skill-based matchmaking", "Seasonal rankings", "Tournament mode"],
    highlight: false,
  },
  {
    icon: Bot,
    title: "Bot vs Human",
    description: "Face AI opponents with distinct fighting styles. Choose from Counter Striker, Wrestler, Grappler, or Balanced archetypes at 4 difficulty tiers.",
    features: ["4 AI archetypes", "Adaptive difficulty", "Training mode"],
    highlight: false,
  },
  {
    icon: Users,
    title: "Local Multiplayer",
    description: "Challenge friends on the same screen. Perfect for tournament nights and couch competition with full split-screen support.",
    features: ["1v1 battles", "Tournament brackets", "Custom rules"],
    highlight: false,
  },
  {
    icon: Dumbbell,
    title: "Practice Arena",
    description: "Master every technique in our comprehensive training facility. Frame data, combo trials, and AI partners with configurable behaviors.",
    features: ["Frame data display", "Combo challenges", "Replay analysis"],
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Fight Now",
    description: "Jump straight into the action. Quick match setup with random or custom fighters for instant octagon warfare.",
    features: ["Instant matchups", "Custom settings", "Fighter randomizer"],
    highlight: false,
  },
];

const GameModesSection = () => {
  return (
    <section id="modes" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cage-dark" />
      <div className="absolute inset-0 cage-pattern opacity-10" />
      
      {/* Red accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/30 rounded-sm text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Game Modes
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
            <span className="text-foreground">UNLIMITED</span>{" "}
            <span className="text-gradient-red">POSSIBILITIES</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're a solo competitor or social fighter, we've got you covered.
          </p>
        </div>

        {/* Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modes.map((mode, index) => (
            <div
              key={mode.title}
              className={`group relative rounded-lg p-6 transition-all duration-500 hover:translate-y-[-4px] ${
                mode.highlight
                  ? "bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/50 hover:border-primary lg:col-span-1 lg:row-span-2"
                  : "bg-gradient-card border border-border/50 hover:border-primary/30"
              }`}
            >
              {/* Featured badge */}
              {mode.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded">
                  Featured
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${
                mode.highlight 
                  ? "bg-primary/30 text-primary" 
                  : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
              }`}>
                <mode.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl md:text-2xl tracking-wide text-foreground mb-2">
                {mode.title}
              </h3>
              <p className={`text-muted-foreground leading-relaxed ${mode.highlight ? "mb-6" : "mb-4"}`}>
                {mode.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2">
                {mode.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full ${mode.highlight ? "bg-primary" : "bg-gold"}`} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover glow for featured */}
              {mode.highlight && (
                <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModesSection;
