export function Marquee() {
  const words = [
    "Relaxed",
    "Refined",
    "Ritual",
    "Renewal",
    "Radiance",
    "Rest",
    "Rejuvenate",
    "Restore",
  ];

  return (
    <div className="relative overflow-hidden py-12 border-y border-rose/10">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className="font-playfair text-6xl text-rose/10 mx-8 inline-block"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
