import { motion } from 'framer-motion';

export default function ImageReveal({ src, alt, className = '', delay = 0, direction = 'up' }) {
  const overlayInitial =
    direction === 'up'   ? { y: '0%', x: '0%' } :
    direction === 'left' ? { x: '0%', y: '0%' } :
                           { x: '0%', y: '0%' };

  const overlayAnimate =
    direction === 'up'   ? { y: '-101%' } :
    direction === 'left' ? { x: '-101%' } :
                           { x: '101%' };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        width={900}
        height={600}
        className="w-full h-full object-cover"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay }}
        loading="lazy"
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-bg"
        style={{ zIndex: 10 }}
        initial={overlayInitial}
        whileInView={overlayAnimate}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay }}
      />
    </div>
  );
}
