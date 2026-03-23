import FadeIn from './ui/FadeIn';
import SplitTitle from './ui/SplitTitle';
import ImageReveal from './ui/ImageReveal';

export default function Chef() {
  return (
    <section className="py-20 md:py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Text */}
        <div className="flex-1 lg:max-w-[40%] order-2 lg:order-1">
          <FadeIn delay={0}>
            <p className="font-sans text-[11px] font-normal uppercase tracking-[0.3em] text-accent mb-6">
              notre chef
            </p>
          </FadeIn>

          <SplitTitle
            text="Chef Antoine *Marchand*"
            className="font-serif font-light text-cream leading-[1.1] tracking-tight mb-8"
            delay={0.1}
          />

          <FadeIn delay={0.3}>
            <p className="font-sans font-light text-base text-cream-muted leading-[1.8]">
              Guidé par l'expérience et la curiosité, le Chef Antoine transforme des matières premières fraîches et saisonnières en plats qui reflètent un lien profond avec le terroir lyonnais. Des recettes traditionnelles aux touches plus contemporaines, chaque détail est soigné.
            </p>
          </FadeIn>
        </div>

        {/* Image */}
        <div className="flex-1 lg:max-w-[55%] w-full order-1 lg:order-2">
          <ImageReveal
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&h=1200&fit=crop"
            alt="Chef Antoine Marchand"
            className="h-[50vh] md:h-[70vh] rounded-lg"
            direction="right"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
