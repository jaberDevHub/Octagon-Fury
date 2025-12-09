import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import fighterPortrait from "@/assets/fighter-portrait.jpg";

const fighters = [
  {
    name: "Marcus 'The Hurricane' Cole",
    style: "Striker",
    record: "24-3-0",
    weightClass: "Lightweight",
    country: "USA",
    signature: "Spinning Back Kick",
  },
  {
    name: "Dmitri 'The Bear' Volkov",
    style: "Wrestler",
    record: "19-2-0",
    weightClass: "Heavyweight",
    country: "Russia",
    signature: "Power Double Leg",
  },
  {
    name: "Kenji 'Silent Storm' Tanaka",
    style: "Balanced",
    record: "22-4-1",
    weightClass: "Welterweight",
    country: "Japan",
    signature: "Flying Knee",
  },
  {
    name: "Carlos 'El Tigre' Santos",
    style: "Grappler",
    record: "18-5-0",
    weightClass: "Middleweight",
    country: "Brazil",
    signature: "Rear Naked Choke",
  },
];

const FightersSection = () => {
  const [activeFighter, setActiveFighter] = useState(0);

  const nextFighter = () => {
    setActiveFighter((prev) => (prev + 1) % fighters.length);
  };

  const prevFighter = () => {
    setActiveFighter((prev) => (prev - 1 + fighters.length) % fighters.length);
  };

  const fighter = fighters[activeFighter];

  return (
    <section id="fighters" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-gold/10 border border-gold/30 rounded-sm text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Roster
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
            <span className="text-foreground">CHOOSE YOUR</span>{" "}
            <span className="text-gradient-gold">CHAMPION</span>
          </h2>
        </div>

        {/* Fighter Showcase */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Fighter Visual */}
            <div className="relative aspect-[3/4] bg-gradient-card border border-border/50 rounded-lg overflow-hidden group">
              {/* Octagon shape background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full max-w-[80%] max-h-[80%] border-2 border-primary/20 octagon-border" />
              </div>
              
              {/* Fighter image */}
              <img 
                src={fighterPortrait} 
                alt={fighter.name}
                className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute bottom-4 left-4">
                <div className="text-xs uppercase tracking-widest text-primary font-bold">{fighter.style}</div>
              </div>

              {/* Country flag accent */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-muted/80 backdrop-blur-sm rounded text-xs font-semibold uppercase tracking-wider">
                {fighter.country}
              </div>

              {/* Red corner accent */}
              <div className="absolute top-0 left-0 w-20 h-1 bg-primary" />
              <div className="absolute top-0 left-0 w-1 h-20 bg-primary" />
            </div>

            {/* Fighter Info */}
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground leading-tight">
                  {fighter.name}
                </h3>
                <div className="flex items-center gap-4 mt-3">
                  <span className="px-3 py-1 bg-primary/20 border border-primary/50 rounded text-primary text-sm font-semibold uppercase">
                    {fighter.style}
                  </span>
                  <span className="text-muted-foreground">{fighter.weightClass}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 border border-border/50 rounded-lg p-4">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Record</div>
                  <div className="font-display text-2xl text-foreground">{fighter.record}</div>
                </div>
                <div className="bg-muted/50 border border-border/50 rounded-lg p-4">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Signature Move</div>
                  <div className="font-display text-lg text-gold">{fighter.signature}</div>
                </div>
              </div>

              {/* Attributes */}
              <div className="space-y-3">
                {["Striking", "Grappling", "Stamina", "Defense"].map((attr, i) => (
                  <div key={attr}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground uppercase tracking-wider">{attr}</span>
                      <span className="text-foreground font-semibold">{75 + Math.floor(Math.random() * 20)}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-gold rounded-full transition-all duration-500"
                        style={{ width: `${75 + Math.floor(Math.random() * 20)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <Button variant="metallic" size="icon" onClick={prevFighter}>
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button variant="metallic" size="icon" onClick={nextFighter}>
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  {fighters.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveFighter(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === activeFighter ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {activeFighter + 1} / {fighters.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FightersSection;
