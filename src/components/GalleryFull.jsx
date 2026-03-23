import FadeIn from './ui/FadeIn';
import SplitTitle from './ui/SplitTitle';
import ImageReveal from './ui/ImageReveal';

const row1 = [
  { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=800&fit=crop', alt: 'Plat 1', h: 'h-[45vh] md:h-[60vh]' },
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=800&fit=crop', alt: 'Plat 2', h: 'h-[50vh] md:h-[68vh]' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=800&fit=crop', alt: 'Plat 3', h: 'h-[42vh] md:h-[55vh]' },
];

const row2 = [
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=800&fit=crop', alt: 'Plat 4', h: 'h-[42vh] md:h-[55vh]' },
  { src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=800&fit=crop', alt: 'Plat 5', h: 'h-[50vh] md:h-[65vh]' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=800&fit=crop', alt: 'Plat 6', h: 'h-[45vh] md:h-[58vh]' },
];

export default function GalleryFull() {
  return (
    <section id="galerie" className="py-20 md:py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <FadeIn delay={0}>
            <p className="font-sans text-[11px] font-normal uppercase tracking-[0.3em] text-accent mb-8">
              les plats de Chef Antoine
            </p>
          </FadeIn>

          <SplitTitle
            text="Assiettes *d'exception*"
            className="font-serif font-light text-cream leading-[1.1] tracking-tight"
            delay={0.1}
          />
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-end">
          {row1.map((img, i) => (
            <ImageReveal
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className={`${img.h} rounded-sm`}
              direction="up"
              delay={i * 0.15}
            />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-end mt-3 md:mt-4">
          {row2.map((img, i) => (
            <ImageReveal
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className={`${img.h} rounded-sm`}
              direction="up"
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
