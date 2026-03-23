import FadeIn from './ui/FadeIn';
import SplitTitle from './ui/SplitTitle';

export default function Intro() {
  return (
    <section id="histoire" className="py-32 md:py-40 lg:py-48 px-8 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn delay={0}>
          <p className="font-sans text-[11px] font-normal uppercase tracking-[0.3em] text-accent mb-8">
            notre philosophie
          </p>
        </FadeIn>

        <SplitTitle
          text="Des saveurs *sincères*"
          className="font-serif font-light text-cream leading-[1.1] tracking-tight mb-10"
          delay={0.1}
        />

        <FadeIn delay={0.3}>
          <p className="font-sans font-light text-lg text-cream-muted leading-[1.8] max-w-xl mx-auto">
            Notre cuisine naît d'une vision claire : valoriser la matière première, respecter ses temps, exalter son essence. Des cuissons maîtrisées, des ingrédients sélectionnés avec soin et des producteurs locaux qui partagent notre exigence de qualité.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
