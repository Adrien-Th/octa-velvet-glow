import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Search, PenTool, Video, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Découverte',
    // REMPLACER: Description étape 1
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Conception',
    // REMPLACER: Description étape 2
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    icon: Video,
    number: '03',
    title: 'Tournage',
    // REMPLACER: Description étape 3
    description: 'Ut enim ad minim veniam, quis nostrud exercitation.',
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'Post-prod',
    // REMPLACER: Description étape 4
    description: 'Duis aute irure dolor in reprehenderit in voluptate.',
  },
];

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2);
  const Icon = step.icon;
  const isLast = index === steps.length - 1;

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex flex-col items-center text-center transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Connector line (desktop) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
      )}

      {/* Number badge */}
      <div className="relative mb-4">
        <div className="w-24 h-24 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors duration-300 glow">
          <Icon className="w-10 h-10 text-primary" />
        </div>
        <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-heading font-bold flex items-center justify-center">
          {step.number}
        </span>
      </div>

      {/* Content */}
      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
        {step.title}
      </h3>
      <p className="text-muted-foreground text-sm max-w-[200px]">
        {step.description}
      </p>
    </div>
  );
}

// Mobile vertical timeline
function ProcessStepMobile({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.2);
  const Icon = step.icon;
  const isLast = index === steps.length - 1;

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex gap-6 transition-all duration-500',
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center glow">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-primary/50 to-transparent mt-2" />}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <span className="text-primary text-sm font-heading font-bold">{step.number}</span>
        <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
          {step.title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export function ProcessSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="process" className="section-padding bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,hsl(0_65%_33%/0.05),transparent_70%)]" />

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div
          ref={titleRef}
          className={cn(
            'text-center max-w-2xl mx-auto mb-16 transition-all duration-700',
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Notre Processus</p>
          <h2 className="font-heading text-foreground mb-6">
            {/* REMPLACER: Titre processus */}
            De l'idée à l'écran
          </h2>
          <p className="text-muted-foreground text-lg">
            {/* REMPLACER: Sous-titre processus */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden lg:grid grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Mobile/Tablet: Vertical timeline */}
        <div className="lg:hidden mb-12">
          {steps.map((step, index) => (
            <ProcessStepMobile key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="champagne-outline" size="lg" asChild>
            <a href="#contact">Démarrer un projet</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
