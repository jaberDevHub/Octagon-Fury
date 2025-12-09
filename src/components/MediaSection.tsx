import { useState } from "react";
import { Play, ImageIcon, Film } from "lucide-react";

const screenshots = [
  { id: 1, type: "screenshot", title: "Octagon Action" },
  { id: 2, type: "screenshot", title: "Ground Game" },
  { id: 3, type: "screenshot", title: "Career Mode" },
  { id: 4, type: "video", title: "Gameplay Trailer" },
  { id: 5, type: "screenshot", title: "Fighter Select" },
  { id: 6, type: "screenshot", title: "Knockout Replay" },
];

const MediaSection = () => {
  const [activeMedia, setActiveMedia] = useState<number | null>(null);

  return (
    <section id="media" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-cage-dark/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-gold/10 border border-gold/30 rounded-sm text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Media
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
            <span className="text-foreground">SEE IT IN</span>{" "}
            <span className="text-gradient-gold">ACTION</span>
          </h2>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {screenshots.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveMedia(item.id)}
              className={`group relative aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Placeholder background */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-cage-dark flex items-center justify-center">
                {item.type === "video" ? (
                  <Film className="w-12 h-12 text-muted-foreground/30" />
                ) : (
                  <ImageIcon className="w-12 h-12 text-muted-foreground/30" />
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                {item.type === "video" && (
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                )}
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                <span className="text-sm font-semibold text-foreground">{item.title}</span>
                {item.type === "video" && (
                  <span className="ml-2 text-xs text-primary uppercase">Video</span>
                )}
              </div>

              {/* Border accent */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-lg transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-semibold uppercase tracking-wider text-sm">
            <span>View Full Gallery</span>
            <span className="text-primary">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
