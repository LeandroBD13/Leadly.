import { motion } from "motion/react";
import { Calendar, Mail, User, MessageSquare, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Booking() {
  return (
    <section id="booking" className="w-full bg-black py-20 md:py-32 px-6 overflow-hidden relative" style={{ perspective: "2000px" }}>
       {/* Background ambient glow - matching Services */}
       <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
       <div className="absolute top-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />

       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-20 items-center">
          
          {/* Header Content */}
          <div className="flex flex-col gap-6 md:gap-8 max-w-xl lg:w-1/2 text-center lg:text-left items-center lg:items-start">
             <div className="flex flex-col gap-4">
                <h2 className="text-[10px] md:text-sm font-medium uppercase tracking-[0.4em] text-white/40">Next Step</h2>
                <h3 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none italic uppercase">
                   Ready to <br/> <span className="text-white">Elevate</span>?
                </h3>
             </div>
             <p className="text-gray-500 text-base md:text-xl font-medium tracking-tight max-w-md lg:max-w-none">
                Secure your slot for a bespoke digital strategy session. We only take on a limited number of projects to ensure elite quality.
             </p>
             
             <div className="flex flex-col gap-6 mt-4">
                <div className="flex items-center gap-4 text-white/60">
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                   </div>
                   <span className="text-[10px] md:text-sm font-medium uppercase tracking-widest">Available for Q2 2026</span>
                </div>
             </div>
          </div>

          {/* 3D Window Component */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center pt-6 md:pt-10">
             <motion.div
               animate={{ 
                 y: [-10, 10, -10],
                 rotateX: [1, -1, 1],
                 rotateY: [-2, 2, -2]
               }}
               transition={{ 
                 duration: 6, 
                 repeat: Infinity, 
                 ease: "linear" 
               }}
               style={{ transformStyle: "preserve-3d" }}
               className="relative w-full max-w-[450px] aspect-[4/5] md:aspect-[3/4]"
             >
                {/* Outer Glass Window */}
                <div className="absolute inset-0 bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden">
                   {/* Top Window Bar */}
                   <div className="absolute top-0 left-0 right-0 h-10 md:h-14 bg-white/5 border-b border-white/5 flex items-center px-6 md:px-8 gap-2">
                       <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/40" />
                       <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/40" />
                       <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500/40" />
                       <div className="ml-3 md:ml-4 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/20">Booking_Console.sh</div>
                   </div>

                   {/* Form Container with Inner Depth */}
                   <div className="mt-14 md:mt-20 p-6 md:p-10 flex flex-col h-full">
                      <div className="flex flex-col gap-2 mb-6 md:mb-8" style={{ transform: "translateZ(30px)" }}>
                         <h4 className="text-lg md:text-xl font-bold tracking-tight text-white uppercase">Secure Your Slot</h4>
                         <div className="h-1 w-10 md:w-12 bg-blue-500/50 rounded-full" />
                      </div>

                      <div className="flex flex-col gap-3 md:gap-4 flex-grow mb-4" style={{ transform: "translateZ(20px)" }}>
                         <div className="group relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 md:w-4 md:h-4 text-white/20 group-focus-within:text-blue-400 transition-colors" />
                            <input 
                              type="text" 
                              placeholder="FULL NAME" 
                              className="w-full bg-black/40 border border-white/5 rounded-xl py-3.5 md:py-4 pl-10 md:pl-12 pr-4 text-[9px] md:text-[10px] font-bold tracking-widest text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 transition-all uppercase"
                            />
                         </div>
                         
                         <div className="group relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 md:w-4 md:h-4 text-white/20 group-focus-within:text-blue-400 transition-colors" />
                            <input 
                              type="email" 
                              placeholder="EMAIL ADDRESS" 
                              className="w-full bg-black/40 border border-white/5 rounded-xl py-3.5 md:py-4 pl-10 md:pl-12 pr-4 text-[9px] md:text-[10px] font-bold tracking-widest text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 transition-all uppercase"
                            />
                         </div>

                         <div className="group relative mb-2 md:mb-4">
                            <MessageSquare className="absolute left-4 top-5 w-3.5 h-3.5 md:w-4 md:h-4 text-white/20 group-focus-within:text-blue-400 transition-colors" />
                            <textarea 
                              placeholder="PROJECT SUMMARY" 
                              rows={3}
                              className="w-full bg-black/40 border border-white/5 rounded-xl py-4 pl-10 md:pl-12 pr-4 text-[9px] md:text-[10px] font-bold tracking-widest text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 transition-all uppercase resize-none md:rows-4"
                            />
                         </div>
                         
                         {/* Integrated Buttons under Project Brief */}
                         <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full" style={{ transform: "translateZ(40px)" }}>
                            <button className="flex-1 py-3.5 md:py-4 bg-white text-black rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-center gap-2 hover:bg-gray-200 transition-all shadow-xl">
                               <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" /> Call us
                            </button>
                            <button className="flex-1 py-3.5 md:py-4 bg-white text-black rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-center gap-2 hover:bg-gray-200 transition-all shadow-xl">
                               <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" /> Email us
                            </button>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Decorative floating elements for extra 3D feel */}
                <motion.div 
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 md:w-20 h-16 md:h-20 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"
                />
                <motion.div 
                  animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-8 -left-8 md:-bottom-10 md:-left-10 w-24 md:w-32 h-24 md:h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
                />
             </motion.div>
          </div>
       </div>
    </section>
  );
}
