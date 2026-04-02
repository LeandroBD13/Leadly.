import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/3d-testimonials";
import { useMemo } from "react";

const testimonials = [
  { name: "Ava Green", username: "@ava", body: "Leadly made my workflow 10x faster!", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150", country: "🇦🇺" },
  { name: "Ana Miller", username: "@ana", body: "Scale quickly and effectively.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150", country: "🇩🇪" },
  { name: "Mateo Rossi", username: "@mat", body: "Their designs are buttery smooth!", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150", country: "🇮🇹" },
  { name: "Maya Patel", username: "@maya", body: "Setup was an absolute breeze!", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=150&h=150", country: "🇮🇳" },
  { name: "Noah Smith", username: "@noah", body: "Best conversions component!", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150", country: "🇺🇸" },
  { name: "Lucas Stone", username: "@luc", body: "Very customizable and smooth.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150", country: "🇫🇷" },
  { name: "Haruto Sato", username: "@haru", body: "Impressive performance on mobile!", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150", country: "🇯🇵" },
  { name: "Emma Lee", username: "@emma", body: "The design stands out distinctly.", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150", country: "🇨🇦" },
  { name: "Carlos Ray", username: "@carl", body: "Great for building huge trust.", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=150&h=150", country: "🇪🇸" },
  { name: "Suki Tanaka", username: "@suki", body: "Absolute game changer for my brand.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150", country: "🇯🇵" },
  { name: "Liam O'Brien", username: "@liam", body: "Efficiency is key, and Leadly delivers.", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150&h=150", country: "🇮🇪" },
  { name: "Elena Petrova", username: "@elena", body: "Top-tier design and performance.", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=150&h=150", country: "🇷🇺" },
  { name: "Zaid Khan", username: "@zaid", body: "Seamless integration process.", img: "https://images.unsplash.com/photo-1411032304191-f9baf86689d0?auto=format&fit=crop&q=80&w=150&h=150", country: "🇵🇰" },
  { name: "Olivia Brown", username: "@olivia", body: "Highly recommend for any SaaS.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150", country: "🇬🇧" },
  { name: "Aarav Sharma", username: "@aarav", body: "Clean code and beautiful results.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150", country: "🇮🇳" },
  { name: "Isabella Silva", username: "@isabella", body: "Fantastic customer support too!", img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=150&h=150", country: "🇧🇷" },
  { name: "Thomas Weber", username: "@thomas", body: "A must-have for modern agencies.", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&get=80&w=150&h=150", country: "🇦🇹" },
  { name: "Chen Wei", username: "@chen", body: "Perfectly optimized for speed.", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=150&h=150", country: "🇨🇳" },
  { name: "Sophia Garcia", username: "@sofia", body: "Everything works like a charm.", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=150&h=150", country: "🇲🇽" },
  { name: "Ali Ahmed", username: "@ali", body: "Best investment this quarter.", img: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=150&h=150", country: "🇦🇪" },
  { name: "Grace Kim", username: "@grace", body: "Stunning visual aesthetics.", img: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&q=80&w=150&h=150", country: "🇰🇷" },
  { name: "Ahmed Mansour", username: "@ahmed", body: "Scale without the headache.", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150&h=150", country: "🇪🇬" },
  { name: "Marie Dubois", username: "@marie", body: "Simplifies complex workflows.", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=150&h=150", country: "🇫🇷" },
  { name: "Jack Wilson", username: "@jack", body: "Reliable and high performing.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150", country: "🇳🇿" },
  { name: "Nina Kraus", username: "@nina", body: "Professional look and feel.", img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=150&h=150", country: "🇩🇪" },
];

const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  return (
    <Card className="w-64 max-w-full bg-[#27272a] border-white/10 hover:bg-black/80 transition-colors">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3">
          <Avatar className="size-10 border border-white/10">
            <AvatarImage src={img} alt={username} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-semibold text-white flex items-center gap-2">
              {name} <span className="text-xs opacity-70">{country}</span>
            </figcaption>
            <p className="text-xs font-medium text-gray-400">{username}</p>
          </div>
        </div>
        <blockquote className="mt-4 text-sm text-gray-300 leading-relaxed font-serif tracking-wide">"{body}"</blockquote>
      </CardContent>
    </Card>
  );
}

export function TestimonialsDemo() {
  const column1 = useMemo(() => shuffleArray(testimonials), []);
  const column2 = useMemo(() => shuffleArray(testimonials), []);
  const column3 = useMemo(() => shuffleArray(testimonials), []);
  const column4 = useMemo(() => shuffleArray(testimonials), []);

  return (
    <section className="w-full bg-black flex flex-col items-center pb-24 md:pb-32 pt-1 relative overflow-hidden">
      {/* Recreating the Hero Style Gradient at the top for seamless entry from TrustedBy */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />
      
      <div 
        className="relative flex h-[500px] md:h-[700px] w-full max-w-7xl flex-row items-center justify-center overflow-hidden gap-4 md:gap-6 [perspective:800px] mt-16 md:mt-24"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in"
        }}
      >
        <div
          className="flex flex-row items-center justify-center gap-6 md:gap-12 opacity-90"
          style={{
            transform:
              window.innerWidth < 768 
                ? "translateX(0px) translateY(0px) translateZ(-100px) rotateX(15deg) rotateY(0deg) rotateZ(0deg)"
                : "translateX(-110px) translateY(0px) translateZ(-150px) rotateX(25deg) rotateY(-10deg) rotateZ(10deg)",
          }}
        >
          {/* Vertical Marquees */}
          <Marquee vertical pauseOnHover repeat={4} className="[--duration:55s] hide-scrollbar">
            {column1.map((review, i) => (
              <TestimonialCard key={`c1-${i}`} {...review} />
            ))}
          </Marquee>
          <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:65s] mt-8 md:mt-12 hide-scrollbar">
            {column2.map((review, i) => (
              <TestimonialCard key={`c2-${i}`} {...review} />
            ))}
          </Marquee>
          <Marquee vertical pauseOnHover repeat={4} className="[--duration:50s] mt-16 md:mt-32 hidden sm:flex hide-scrollbar">
            {column3.map((review, i) => (
              <TestimonialCard key={`c3-${i}`} {...review} />
            ))}
          </Marquee>
          <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:60s] mt-4 hidden md:flex hide-scrollbar">
            {column4.map((review, i) => (
              <TestimonialCard key={`c4-${i}`} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
