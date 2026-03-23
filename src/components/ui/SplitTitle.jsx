import TextReveal from './TextReveal';

export default function SplitTitle({ text, className = '', delay = 0, as: Tag = 'h2' }) {
  const parts = text.split(/(\*[^*]+\*)/g);

  const sizeStyle = Tag === 'h1'
    ? { fontSize: 'clamp(48px, 8vw, 96px)' }
    : { fontSize: 'clamp(36px, 5vw, 64px)' };

  return (
    <TextReveal delay={delay}>
      <Tag className={className} style={sizeStyle}>
        {parts.map((part, i) => {
          if (part.startsWith('*') && part.endsWith('*')) {
            return (
              <em key={i} className="font-serif italic font-light">
                {part.slice(1, -1)}
              </em>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </Tag>
    </TextReveal>
  );
}
