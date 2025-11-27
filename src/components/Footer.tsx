export function Footer() {
  return (
    <footer className="py-12 bg-noir border-t border-border/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl font-bold italic tracking-wide"
          >
            <span className="text-primary">Octa</span>
            <span className="text-secondary ml-1">Vitae</span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-secondary transition-colors">
              Services
            </a>
            <a href="#portfolio" className="hover:text-secondary transition-colors">
              Portfolio
            </a>
            <a href="#team" className="hover:text-secondary transition-colors">
              Équipe
            </a>
            <a href="#contact" className="hover:text-secondary transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Octa Vitae. Lorem ipsum.
          </p>
        </div>
      </div>
    </footer>
  );
}
