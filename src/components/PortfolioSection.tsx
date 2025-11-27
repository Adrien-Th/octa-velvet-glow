import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

const portfolioItems = [
  { title: 'Lorem Ipsum', category: 'Film Corporate', size: 'large' },
  { title: 'Dolor Sit Amet', category: 'Publicité', size: 'small' },
  { title: 'Consectetur', category: 'Clip Musical', size: 'small' },
  { title: 'Adipiscing Elit', category: 'Documentaire', size: 'medium' },
  { title: 'Sed Tempor', category: 'Événementiel', size: 'medium' },
  { title: 'Magna Aliqua', category: 'Brand Content', size: 'large' },
];

function PortfolioCard({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1);

  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 md:row-span-2',
    small: 'md:col-span-1 md:row-span-1',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'group relative aspect-video md:aspect-auto overflow-hidden rounded-lg bg-card border border-border/30 cursor-pointer transition-all duration-500',
        sizeClasses[item.size as keyof typeof sizeClasses],
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Placeholder background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-noir" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23A33%22 fill-opacity=%220.4%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-noir/70 opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center glow-crimson">
          <Play className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground ml-1" />
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-secondary text-xs md:text-sm uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {item.category}
        </p>
        <h3 className="font-display text-lg md:text-2xl font-semibold text-foreground">
          {item.title}
        </h3>
      </div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-lg border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500" />
    </div>
  );
}

export function PortfolioSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="portfolio" className="section-padding bg-smoke/30 relative overflow-hidden">
      {/* Background glow - rouge */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(8_72%_38%/0.04),transparent_60%)]" />

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div
          ref={titleRef}
          className={cn(
            'text-center max-w-2xl mx-auto mb-16 transition-all duration-700',
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Portfolio</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Nos réalisations
          </h2>
          <p className="text-muted-foreground text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[180px] mb-12">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cream-outline" size="lg" asChild>
            <a href="#contact">Discuter de votre projet</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
