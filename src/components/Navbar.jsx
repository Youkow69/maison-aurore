import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'La Carte', href: '#carte' },
  { label: 'Notre Histoire', href: '#histoire' },
  { label: 'La Galerie', href: '#galerie' },
  { label: 'Réserver', href: '#reserver' },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);

  return (
    <>
      {/* Navbar bar — always visible, above overlay */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[70] px-8 md:px-16 lg:px-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 backdrop-blur-md"
          style={{
            backgroundColor: useTransform(bgOpacity, (v) =>
              menuOpen ? 'rgba(26,31,22,0)' : `rgba(26,31,22,${v})`
            ),
          }}
        />
        <div className="relative flex items-center justify-between h-20">
          <a href="#" className="font-serif text-xl font-normal text-cream no-underline tracking-tight">
            Maison Aurore
          </a>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="font-sans text-[11px] font-normal uppercase tracking-[0.3em] text-cream bg-transparent border-none cursor-pointer"
          >
            {menuOpen ? 'Fermer' : 'Menu'}
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen overlay — only rendered when open */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-bg flex flex-col pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Links */}
            <motion.div
              className="flex-1 flex flex-col items-center justify-center gap-6 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={staggerItem}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-cream no-underline hover:text-accent transition-colors duration-500"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>

            {/* Footer info */}
            <div className="px-8 md:px-16 lg:px-24 pb-10 flex justify-end">
              <div className="text-right space-y-1">
                <p className="font-sans text-sm font-light text-cream-muted">04 78 42 15 67</p>
                <p className="font-sans text-sm font-light text-cream-muted">contact@maison-aurore.fr</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
