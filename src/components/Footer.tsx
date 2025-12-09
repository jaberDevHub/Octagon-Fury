const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    game: [
      { label: "Features", href: "#features" },
      { label: "Fighters", href: "#fighters" },
      { label: "Game Modes", href: "#modes" },
      { label: "Media", href: "#media" },
    ],
    community: [
      { label: "Discord", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Twitch", href: "#" },
    ],
    support: [
      { label: "FAQ", href: "#" },
      { label: "System Requirements", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "EULA", href: "#" },
    ],
  };

  return (
    <footer className="relative bg-cage-dark border-t border-border/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="font-display text-xl text-primary-foreground">O</span>
              </div>
              <span className="font-display text-xl tracking-wider">
                OCTAGON<span className="text-primary">FURY</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The most authentic MMA simulation ever created. Coming 2026.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-4">Game</h4>
            <ul className="space-y-2">
              {footerLinks.game.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>© {currentYear} Octagon Fury. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <span className="hidden md:inline">Not affiliated with UFC or Zuffa LLC.</span>
            </div>
            
            {/* Rating placeholder */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-bold text-muted-foreground">T</span>
              </div>
              <span className="text-xs text-muted-foreground">TEEN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Red accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-gold to-primary opacity-50" />
    </footer>
  );
};

export default Footer;
