import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import TextReveal from './ui/TextReveal';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop"
          alt="Restaurant Maison Aurore"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8">
        <FadeIn delay={0.3}>
          <p className="font-sans text-[11px] font-normal uppercase tracking-[0.3em] text-accent mb-8">
            Restaurant bistronomique
          </p>
        </FadeIn>

        <TextReveal delay={0.5}>
          <h1
            className="font-serif font-light text-cream leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(56px, 10vw, 120px)' }}
          >
            Maison Aurore
          </h1>
        </TextReveal>

        <motion.div
          className="w-16 h-[1px] bg-accent mx-auto my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.0 }}
        />

        <FadeIn delay={1.2}>
          <p className="font-serif italic font-light text-xl text-cream-muted">
            Tradition et audace au cœur de Lyon
          </p>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-cream-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
