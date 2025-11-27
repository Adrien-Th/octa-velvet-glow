import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ContactSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,hsl(8_72%_38%/0.05),transparent_60%)]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(38_55%_55%/0.03),transparent_60%)]" />

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div
          ref={titleRef}
          className={cn(
            'text-center max-w-2xl mx-auto mb-16 transition-all duration-700',
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Démarrons votre projet
          </h2>
          <p className="text-muted-foreground text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
          </p>
        </div>

        <div
          ref={formRef}
          className={cn(
            'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700',
            formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-6">
                Parlons de votre vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground">contact@octavitae.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Téléphone</p>
                  <p className="text-foreground">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Adresse</p>
                  <p className="text-foreground">123 Rue Lorem Ipsum, Paris</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Lorem Ipsum"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="lorem@ipsum.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Votre projet vidéo"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Décrivez votre projet..."
              />
            </div>

            <Button variant="crimson" size="xl" className="w-full sm:w-auto">
              Envoyer le message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
