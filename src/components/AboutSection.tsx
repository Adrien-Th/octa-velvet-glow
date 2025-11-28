import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>(0.15);

  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,hsl(35_56%_50%/0.04),transparent_70%)]" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div
            ref={titleRef}
            className={cn(
              'transition-all duration-700',
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">À propos</p>
            <h2 className="font-heading text-foreground mb-6">
              {/* REMPLACER: Titre à propos */}
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {/* REMPLACER: Paragraphe 1 */}
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {/* REMPLACER: Paragraphe 2 */}
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <Button variant="champagne-outline" size="lg" asChild>
              <a href="#contact">En savoir plus</a>
            </Button>
          </div>

          {/* Image placeholder */}
          <div
            ref={contentRef}
            className={cn(
              'transition-all duration-700 delay-200',
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted border border-border/50">
              {/* REMPLACER: Image à propos - 800x600px recommandé */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-background flex items-center justify-center">
                <span className="text-muted-foreground text-sm uppercase tracking-wider">Image / Vidéo</span>
              </div>
              {/* Glow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
