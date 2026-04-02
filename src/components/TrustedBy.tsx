import { Layers, LayoutTemplate, Activity, Infinity } from "lucide-react";

const logos = [
  { name: "monday.com", el: <span className="font-bold text-2xl tracking-tighter flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">monday<span className="font-normal text-xl">.com</span></span> },
  { name: "amplemarket", el: <span className="font-semibold text-2xl flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"><Layers size={24} strokeWidth={2.5}/> amplemarket</span> },
  { name: "zendesk", el: <span className="font-bold text-3xl opacity-70 hover:opacity-100 transition-opacity" style={{ fontFamily: "system-ui" }}>zendesk</span> },
  { name: "glean", el: <span className="font-medium text-3xl tracking-tight opacity-70 hover:opacity-100 transition-opacity">glean</span> },
  { name: "synthesia", el: <span className="font-bold text-2xl tracking-tight flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"><LayoutTemplate size={24} strokeWidth={2.5}/> synthesia</span> },
  { name: "REUTERS", el: <span className="font-bold text-xl tracking-[0.2em] opacity-70 hover:opacity-100 transition-opacity">REUTERS</span> },
  { name: "Little Otter", el: <span className="font-bold text-3xl opacity-70 hover:opacity-100 transition-opacity" style={{ fontFamily: "'Playfair Display', serif" }}>Little Otter</span> },
  { name: "waymark", el: <span className="font-semibold text-3xl tracking-tighter opacity-70 hover:opacity-100 transition-opacity">waymark</span> },
  { name: "offacoustic", el: <span className="font-bold text-2xl tracking-tight flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"><Activity strokeWidth={3}/> offacoustic</span> },
  { name: "BUSINESS INSIDER", el: <span className="font-black text-xl tracking-tighter opacity-70 hover:opacity-100 transition-opacity">BUSINESS INSIDER</span> },
];

export const TrustedBy = () => {
  return (
    <section className="w-full pt-24 md:pt-48 pb-16 md:pb-32 bg-black relative overflow-hidden">
      {/* Top Gradient (from hero) */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 via-transparent to-transparent pointer-events-none" />
      {/* Bottom Gradient (to testimonials) - Recreating hero style */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      
      <p className="text-center text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-widest mb-8 md:mb-12 relative z-10">
        Trusted by
      </p>
      
      {/* Marquee Container */}
      <div className="flex overflow-hidden relative z-10 w-full">
        <div className="flex animate-marquee whitespace-nowrap items-center shrink-0 min-w-full gap-16 md:gap-24 px-8 md:px-12">
          {logos.map((logo, i) => (
            <div key={i} className="text-white grayscale shrink-0 scale-75 md:scale-100 origin-center">
              {logo.el}
            </div>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap items-center shrink-0 min-w-full gap-16 md:gap-24 px-8 md:px-12" aria-hidden="true">
          {logos.map((logo, i) => (
            <div key={`dup-${i}`} className="text-white grayscale shrink-0 scale-75 md:scale-100 origin-center">
              {logo.el}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
