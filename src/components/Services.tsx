import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Check, Zap, Sparkles, Globe, Monitor, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const services = [
  {
    title: "Core Web Design",
    description: "We build high-performance, conversion-optimized websites that turn visitors into loyal customers. Our process focuses on clean aesthetics and strategic UX.",
    icon: <Monitor className="w-12 h-12 text-white/90" />,
    image: "/assets/web_design_abstract.png",
    className: "md:col-span-2 md:row-span-2 py-12 px-8 bg-black/40 border-white/10 backdrop-blur-sm",
  },
  {
    title: "Brand Strategy",
    description: "Defining your digital identity with bespoke visual systems.",
    icon: <Palette className="w-6 h-6 text-blue-400/80" />,
    image: "/assets/brand_strategy_abstract.png",
    className: "md:col-span-1 bg-[#0a0a0a]/60 border-white/10",
  },
  {
    title: "Animations",
    description: "Fluid, high-end motion that makes your brand feel alive.",
    icon: <Sparkles className="w-6 h-6 text-purple-400/80" />,
    image: "/assets/animations.png",
    className: "md:col-span-1 bg-[#111111]/40 border-white/10",
  },
  {
    title: "Global Scale",
    description: "Architecture built for speed across any device or location.",
    icon: <Globe className="w-6 h-6 text-emerald-400/80" />,
    image: "/assets/global_scale_abstract.png",
    className: "md:col-span-2 bg-black/40 border-white/10",
  },
  {
    title: "Future Ready",
    description: "Fluid design systems built for infinite scalability.",
    image: "/assets/bento_visual.png",
    className: "md:col-span-1 bg-black/40 border-white/10",
  },
];

const tiers = [
  {
    name: "Easy",
    price: "$500",
    description: "Perfect for a simple, elegant web presence.",
    features: ["Single Page Launch", "Mobile Optimized", "Contact Integration", "Performance Setup"],
    cta: "Start Here",
  },
  {
    name: "Intermediate",
    price: "$1,000",
    description: "Our most popular tier for growing brands.",
    features: ["Multi-Page Experience", "Custom Fluid Animations", "CMS Ready", "Premium Support", "SEO Mastery"],
    cta: "Select Pro",
    popular: true,
  },
  {
    name: "Best One",
    price: "$2,000",
    description: "The ultimate digital experience for industry leaders.",
    features: ["3D Immersive Design", "Custom Micro-interactions", "Strategic Funnels", "Vip Priority Access", "Bespoke Logic"],
    cta: "Get Elite",
  },
];

function PricingCard({ tier, i }: { tier: typeof tiers[0] & { popular?: boolean }, i: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const sheenY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable tilt on mobile touch
    if (window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative flex flex-col p-6 md:p-8 rounded-[2rem] border transition-all h-full cursor-default group/card",
        tier.popular 
          ? "bg-zinc-900/60 border-white/20 shadow-2xl shadow-blue-900/10" 
          : "bg-white/[0.03] border-white/5 opacity-90 hover:opacity-100"
      )}
    >
      {/* Sheen effect */}
      <motion.div 
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 80%)",
          left: sheenX,
          top: sheenY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-64 h-64 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity blur-3xl z-0 hidden md:block"
      />

      {tier.popular && (
        <div 
          style={{ transform: "translateZ(40px)" }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/20 z-20"
        >
          Most Popular
        </div>
      )}

      <div className="relative z-10 flex flex-col gap-4 md:gap-6 mb-8" style={{ transform: "translateZ(30px)" }}>
         <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-gray-500">{tier.name}</span>
         <div className="flex items-baseline gap-1">
            <span className="text-4xl md:text-5xl font-black tracking-tighter text-white">{tier.price}</span>
            <span className="text-gray-600 text-xs md:text-sm font-medium">/ launch</span>
         </div>
         <p className="text-gray-400 text-xs md:text-sm leading-relaxed min-h-[40px] uppercase font-bold tracking-tight">
           {tier.description}
         </p>
      </div>

      <div className="relative z-10 flex flex-col gap-3 md:gap-4 flex-grow mb-12" style={{ transform: "translateZ(20px)" }}>
         {tier.features.map((feature, j) => (
           <div key={j} className="flex items-center gap-3 text-xs md:text-sm text-gray-300 font-medium">
              <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                 <Check className="w-3 h-3 text-white/60" />
              </div>
              {feature}
           </div>
         ))}
      </div>

      <button 
        style={{ transform: "translateZ(50px)" }}
        className={cn(
          "relative z-10 w-full py-4 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all shadow-xl",
          "bg-white text-black hover:bg-gray-200"
        )}
      >
         {tier.cta}
      </button>
      
      {/* Glossy overlay */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none z-0" />
    </motion.div>
  );
}

export function Services() {
  return (
    <section className="w-full bg-black py-20 md:py-32 px-6 overflow-hidden relative" style={{ perspective: "1500px" }}>
       {/* Background ambient glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

       <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
          
          {/* Header */}
          <div className="flex flex-col gap-4 md:gap-6 max-w-2xl px-4 text-center md:text-left">
             <h2 className="text-[10px] md:text-sm font-medium uppercase tracking-[0.4em] text-white/40">Services & What We Do</h2>
             <h3 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none italic uppercase">
                Bespoke Design <br/> For the <span className="text-white">Next Era</span>.
             </h3>
             <p className="text-gray-500 text-base md:text-xl font-medium tracking-tight">
                Our core offering is high-end web design, built to convert and scale your digital footprint.
             </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={cn(
                  "relative group rounded-3xl border border-white/5 p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-all hover:border-white/20",
                  service.className
                )}
              >
                {service.image && (
                   <img src={service.image} className="absolute inset-0 w-full h-full object-cover opacity-20 md:opacity-30 group-hover:opacity-50 transition-all duration-700 pointer-events-none" alt="" />
                )}
                <div className="relative z-10 flex flex-col gap-4 md:gap-6">
                   <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                     {service.icon || <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-blue-400/80" />}
                   </div>
                   <div className="flex flex-col gap-2 md:gap-3">
                      <h4 className="text-xl md:text-2xl font-bold tracking-tight text-white">{service.title}</h4>
                      <p className="text-gray-400 leading-relaxed font-medium text-xs md:text-base">
                        {service.description}
                      </p>
                   </div>
                </div>
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* Pricing Row */}
          <div className="flex flex-col gap-8 md:gap-12 mt-8 md:mt-12">
             <div className="flex flex-col gap-2 px-4 text-center md:text-left">
               <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-400">Pricing Tiers</h4>
               <p className="text-gray-400 text-xs md:text-sm">Choose the right path for your digital evolution.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {tiers.map((tier, i) => (
                   <PricingCard key={i} tier={tier} i={i} />
                ))}
             </div>
          </div>
       </div>
    </section>
  );
}
