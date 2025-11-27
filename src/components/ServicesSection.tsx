import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Film, Camera, Sparkles, Clapperboard } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Film,
    title: 'Production Vidéo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon: Camera,
    title: 'Captation Live',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  },
  {
    icon: Sparkles,
    title: 'Post-Production',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
  },
  {
    icon: Clapperboard,
    title: 'Direction Artistique',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={cn(
        'group relative p-8 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-500 hover-lift',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="relative mb-6 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      {/* Content */}
      <h3 className="font-display text-xl md:text-2xl font-semibold mb-4 text-foreground group-hover:text-secondary transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {service.description}
      </p>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-500" />
    </div>
  );
}

export function ServicesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background glow - rouge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,hsl(8_72%_38%/0.03),transparent_60%)]" />

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div
          ref={titleRef}
          className={cn(
            'text-center max-w-2xl mx-auto mb-16 transition-all duration-700',
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Nos Services</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-muted-foreground text-lg">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cream-outline" size="lg" asChild>
            <a href="#contact">Nous contacter</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
