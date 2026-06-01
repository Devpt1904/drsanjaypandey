// Pure CSS marquee — zero JS, zero re-renders, zero layout thrash.
// Doubles the items array so the loop is perfectly seamless.

const credentials = [
  "Director of Urology · Kokilaben Hospital",
  "MCh · DNB · FEBU · Fellow, European Board of Urology",
  "TEDx Speaker · Mumbai",
  "25+ Years Reconstructive Urology",
  "500+ Complex Procedures",
  "Gender Reassignment Surgery Pioneer in India",
  "Published in Reader's Digest",
  "Global Fellowships: Italy · Serbia · Germany · South Korea",
  "Andrology & Endourology",
  "Robotic-Assisted Urology",
];

// Separator between items
const Sep = () => (
  <span className="mx-8 text-navy/20 select-none" aria-hidden="true">
    ·
  </span>
);

export function MarqueeTicker() {
  // Duplicate to create seamless loop
  const items = [...credentials, ...credentials];

  return (
    <div
      className="w-full overflow-hidden border-y border-slate-100 bg-white py-4 select-none"
      aria-label="Credentials ticker"
    >
      {/* will-change only on the scrolling child, not the clipping parent */}
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ willChange: "transform" }}
      >
        {items.map((text, i) => (
          <span
            key={i}
            className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/40"
          >
            {text}
            <Sep />
          </span>
        ))}
      </div>
    </div>
  );
}
