import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const clients = [
  'ACME Corp',
  'Globex Inc',
  'Umbrella Co',
  'Stark Industries',
  'Wayne Enterprises',
  'Oscorp',
  'LexCorp',
  'Massive Dynamic',
];

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center mx-8 opacity-50 hover:opacity-100 transition-opacity duration-300">
      <span className="font-display text-lg text-muted-foreground tracking-wider">
        {name}
      </span>
    </div>
  );
}

export function ClientsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  // Duplicate clients for infinite scroll effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <section
      id="clients"
      ref={ref}
      className={cn(
        'py-20 bg-smoke/50 border-y border-border/30 overflow-hidden transition-all duration-700',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
    >
      <div className="container mx-auto px-4 mb-12">
        <p className="text-center text-primary uppercase tracking-[0.2em] text-sm mb-2">
          Ils nous font confiance
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground/90">
          Nos Clients
        </h2>
      </div>

      {/* Infinite slider */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-smoke/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-smoke/50 to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex animate-slide-left">
          {duplicatedClients.map((client, index) => (
            <LogoPlaceholder key={`${client}-${index}`} name={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
