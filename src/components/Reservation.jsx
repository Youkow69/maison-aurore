import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './ui/FadeIn';
import SplitTitle from './ui/SplitTitle';

const hours = [
  'Mardi – Vendredi : 12h – 14h30 / 19h – 22h30',
  'Samedi : 19h – 23h',
  'Dimanche & Lundi : Fermé',
];

export default function Reservation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section id="reserver" ref={ref} className="relative py-32 md:py-40 overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-[-20%] z-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1920&h=1080&fit=crop"
          alt="Ambiance restaurant"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-bg/80 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-8 md:px-16 lg:px-24">
        <FadeIn delay={0}>
          <p className="font-sans text-[11px] font-normal uppercase tracking-[0.3em] text-accent mb-8">
            réservation
          </p>
        </FadeIn>

        <SplitTitle
          text="Votre table *vous attend*"
          as="h1"
          className="font-serif font-light text-cream leading-[1] tracking-tight mb-8"
          delay={0.1}
        />

        <motion.div
          className="w-16 h-[1px] bg-accent mx-auto my-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />

        <FadeIn delay={0.4}>
          <a
            href="tel:0478421567"
            className="font-serif font-light text-2xl md:text-3xl text-cream no-underline hover:text-accent transition-colors duration-500"
          >
            04 78 42 15 67
          </a>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-6">
            <a
              href="mailto:contact@maison-aurore.fr"
              className="inline-block font-sans text-sm font-normal text-cream-muted no-underline border border-accent/40 px-8 py-3 hover:border-accent hover:text-accent transition-all duration-500"
            >
              Réserver par email
            </a>
          </div>
        </FadeIn>

        <div className="mt-12 space-y-2">
          {hours.map((h, i) => (
            <FadeIn key={h} delay={0.6 + i * 0.1}>
              <p className="font-sans font-light text-sm text-cream-muted">{h}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
