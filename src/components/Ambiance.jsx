import FadeIn from './ui/FadeIn';
import SplitTitle from './ui/SplitTitle';
import ImageReveal from './ui/ImageReveal';

const spaces = [
  {
    title: 'La Verrière',
    text: "Un espace lumineux et moderne, baigné de lumière naturelle. Parfait pour les déjeuners d'affaires et les dîners intimistes.",
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&h=600&fit=crop&q=80',
    imageDir: 'left',
    layout: 'image-left',
  },
  {
    title: 'Le Salon',
    text: "Chaleureux et feutré, avec son parquet ancien et sa cheminée. L'écrin idéal pour les grandes tablées en famille.",
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=900&h=600&fit=crop&q=80',
    imageDir: 'right',
    layout: 'image-right',
  },
  {
    title: 'La Terrasse',
    text: 'Sous les marronniers, une terrasse ombragée pour les beaux jours. Verdure, calme et saveurs estivales.',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=900&h=600&fit=crop&q=80',
    imageDir: 'left',
    layout: 'image-left',
  },
];

function SpaceBlock({ title, text, image, imageDir, layout }) {
  const isImageLeft = layout === 'image-left';

  return (
    <div className="py-16 md:py-20">
      <div className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-12`}>
        {/* Image */}
        <div className="w-full lg:w-[55%]">
          <ImageReveal
            src={image}
            alt={title}
            className="h-[35vh] md:h-[45vh] rounded-sm"
            direction={imageDir}
            delay={0.1}
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-[45%] space-y-6">
          <FadeIn delay={0.2}>
            <h3 className="font-serif font-light text-3xl md:text-4xl text-cream tracking-tight">
              {title}
            </h3>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="font-sans font-light text-base text-cream-muted leading-[1.8]">
              {text}
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export default function Ambiance() {
  return (
    <section className="py-20 md:py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <FadeIn delay={0}>
            <p className="font-sans text-[11px] font-normal uppercase tracking-[0.3em] text-accent mb-8">
              nos espaces
            </p>
          </FadeIn>

          <SplitTitle
            text="L'art de *recevoir*"
            className="font-serif font-light text-cream leading-[1.1] tracking-tight"
            delay={0.1}
          />
        </div>

        {spaces.map((space) => (
          <SpaceBlock key={space.title} {...space} />
        ))}
      </div>
    </section>
  );
}
