import FadeIn from './ui/FadeIn';
import SplitTitle from './ui/SplitTitle';
import ImageReveal from './ui/ImageReveal';

const menuLinks = [
  { label: 'Menu à la carte', href: '#' },
  { label: 'Menu du midi', href: '#' },
  { label: 'Carte des vins', href: '#' },
];

export default function Menu() {
  return (
    <section id="carte" className="py-32 md:py-40 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <FadeIn delay={0}>
            <p className="font-sans text-[11px] font-normal uppercase tracking-[0.3em] text-accent mb-8">
              la carte
            </p>
          </FadeIn>

          <SplitTitle
            text="Des recettes *sincères*"
            className="font-serif font-light text-cream leading-[1.1] tracking-tight mb-10"
            delay={0.1}
          />

          <FadeIn delay={0.3}>
            <p className="font-sans font-light text-lg text-cream-muted leading-[1.8] max-w-xl mx-auto mb-12">
              Notre menu à la carte propose des spécialités et plats traditionnels revisités avec créativité, toujours autour de produits de saison et de producteurs locaux.
            </p>
          </FadeIn>

          {/* Menu links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            {menuLinks.map((link, i) => (
              <FadeIn key={link.label} delay={0.4 + i * 0.1}>
                <a
                  href={link.href}
                  className="font-serif text-lg text-cream no-underline border-b border-accent/40 pb-1 hover:text-accent hover:border-accent transition-all duration-500"
                >
                  {link.label}
                </a>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Full-width image */}
        <div className="mt-16 md:mt-20">
          <ImageReveal
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=800&fit=crop"
            alt="Intérieur du restaurant"
            className="h-[40vh] md:h-[50vh] w-full rounded-sm"
            direction="up"
          />
        </div>
      </div>
    </section>
  );
}
