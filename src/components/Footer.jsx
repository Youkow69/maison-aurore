const navLinks = [
  { label: 'La Carte', href: '#carte' },
  { label: 'Notre Histoire', href: '#histoire' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Réserver', href: '#reserver' },
];

export default function Footer() {
  return (
    <footer className="bg-bg-footer px-8 md:px-16 lg:px-24 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left */}
          <div className="space-y-4">
            <a href="#" className="font-serif text-2xl font-normal text-cream no-underline tracking-tight">
              Maison Aurore
            </a>
            <p className="font-sans text-[13px] font-light text-cream-muted leading-relaxed">
              24 Rue des Marronniers,<br />69002 Lyon
            </p>
            <p className="font-sans text-[13px] font-light text-cream-muted">04 78 42 15 67</p>
            <p className="font-sans text-[13px] font-light text-cream-muted">contact@maison-aurore.fr</p>
          </div>

          {/* Center */}
          <div className="space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block font-sans text-[13px] font-light text-cream-muted no-underline hover:text-accent transition-colors duration-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="space-y-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-sans text-[13px] font-light text-cream-muted no-underline hover:text-accent transition-colors duration-500"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-sans text-[13px] font-light text-cream-muted no-underline hover:text-accent transition-colors duration-500"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="h-[1px] bg-border-subtle my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[12px] font-light text-cream-muted/60">
            &copy; 2025 Maison Aurore. Tous droits réservés.
          </p>
          <a
            href="https://katrava.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[12px] font-light text-cream-muted/60 no-underline hover:text-accent transition-colors duration-500"
          >
            Propulsé par Katrava
          </a>
        </div>
      </div>
    </footer>
  );
}
