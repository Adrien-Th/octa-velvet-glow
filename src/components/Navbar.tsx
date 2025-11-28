import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Clients', href: '#clients' },
  { label: 'Équipe', href: '#team' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50 py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-2xl md:text-3xl font-bold italic tracking-wide"
          >
            <span className="text-primary text-glow-crimson">Octa</span>
            <span className="text-secondary text-glow-cream ml-1">Vitae</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-secondary transition-colors duration-300 focus-visible-crimson"
              >
                {link.label}
              </a>
            ))}
            <Button variant="champagne" size="sm" asChild>
              <a href="#contact">Nous contacter</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors focus-visible-crimson"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-500 ease-out',
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col gap-4 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-foreground/80 hover:text-secondary transition-colors py-2 border-b border-border/30"
              >
                {link.label}
              </a>
            ))}
            <Button variant="champagne" className="mt-4" asChild>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Nous contacter
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
