import { Button } from '@/components/ui/button';
import { Play, ArrowDown } from 'lucide-react';
export function HeroSection() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cinematic">
      {/* Background gradient glow - rouge */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(8_72%_38%/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(38_55%_55%/0.05),transparent_50%)]" />
      
      {/* Spotlight effect at bottom */}
      <div className="absolute inset-0 bg-spotlight" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-vignette" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overline */}
          <p className="text-secondary/80 uppercase tracking-[0.3em] text-sm md:text-base mb-6 animate-fade-up">PRODUCTION VIDÉO</p>

          {/* Main headline - style vintage */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-up delay-100">
            <span className="text-primary italic text-glow-crimson">Octa</span>
            <br />
            <span className="text-secondary italic text-glow-cream">Vitae</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up delay-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up delay-300">
            <Button variant="crimson" size="xl" asChild>
              <a href="#contact">
                Nous contacter
              </a>
            </Button>
            <Button variant="cream-outline" size="lg" className="gap-3">
              <Play className="w-5 h-5" />
              Voir nos créations
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-muted-foreground hover:text-secondary transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>

      {/* Decorative lines - rouge/crème */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-48 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
    </section>;
}