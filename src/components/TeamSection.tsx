import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const teamMembers = [
  { name: 'Lorem Ipsum', role: 'Directeur Créatif', initials: 'LI' },
  { name: 'Dolor Sit', role: 'Réalisateur', initials: 'DS' },
  { name: 'Amet Consectetur', role: 'Chef Opérateur', initials: 'AC' },
  { name: 'Adipiscing Elit', role: 'Monteur', initials: 'AE' },
  { name: 'Sed Tempor', role: 'Productrice', initials: 'ST' },
  { name: 'Incididunt Labore', role: 'Sound Designer', initials: 'IL' },
  { name: 'Magna Aliqua', role: 'Coloriste', initials: 'MA' },
  { name: 'Enim Minim', role: 'Motion Designer', initials: 'EM' },
];

function TeamCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.15);

  return (
    <div
      ref={ref}
      className={cn(
        'group text-center transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      {/* Avatar placeholder */}
      <div className="relative mx-auto mb-5 w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-muted to-card border-2 border-border/50 overflow-hidden group-hover:border-primary/50 transition-all duration-500">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(42_76%_46%/0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl md:text-3xl text-muted-foreground group-hover:text-primary transition-colors duration-300">
            {member.initials}
          </span>
        </div>
      </div>

      {/* Info */}
      <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
        {member.name}
      </h3>
      <p className="text-sm text-muted-foreground">
        {member.role}
      </p>
    </div>
  );
}

export function TeamSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="team" className="section-padding bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,hsl(8_72%_35%/0.05),transparent_70%)]" />

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div
          ref={titleRef}
          className={cn(
            'text-center max-w-2xl mx-auto mb-16 transition-all duration-700',
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Notre Équipe</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Les artisans derrière la caméra
          </h2>
          <p className="text-muted-foreground text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="brass-outline" size="lg" asChild>
            <a href="#contact">Rejoindre l'aventure</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
