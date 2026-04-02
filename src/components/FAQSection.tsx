import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What industries do you work with?",
    answer: "We specialize in high-growth B2B SaaS, FinTech, and premium lifestyle brands. Our expertise lies in scaling digital presence for companies that prioritize design and user experience as core growth drivers."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. A bespoke landing page typically takes 2-4 weeks, while a full digital ecosystem or platform design can range from 8-12 weeks."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Absolutely. We offer elite maintenance packages that include performance optimization, regular security updates, and iterative design improvements to ensure your brand stays ahead of the curve."
  },
  {
    question: "What is your design process like?",
    answer: "Our process is highly collaborative and iterative. We start with deep strategy and discovery, moving into high-fidelity wireframing and 3D modeling, followed by seamless development and final performance tuning."
  }
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-black py-32 px-6 overflow-hidden relative">
      <div className="max-w-4xl mx-auto relative z-10">
         <div className="flex flex-col gap-4 mb-20 text-center">
            <h2 className="text-sm font-medium uppercase tracking-[0.4em] text-white/40 flex items-center justify-center gap-2">
               <HelpCircle className="w-4 h-4" /> Support_Center.sh
            </h2>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic uppercase leading-none">
               Common <br/> <span className="text-blue-500">Inquiries</span>
            </h1>
         </div>

         <div className="flex flex-col gap-4 w-full">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div 
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="cursor-pointer bg-white/[0.03] border border-white/10 hover:border-white/30 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 transition-all duration-300"
                >
                   <div className="flex items-center justify-between gap-6">
                      <h3 className="text-lg md:text-2xl font-bold tracking-tight uppercase italic">{item.question}</h3>
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 text-white">
                         {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </div>
                   </div>

                   <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                           <div className="pt-8 text-gray-400 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                              {item.answer}
                           </div>
                        </motion.div>
                      )}
                   </AnimatePresence>
                </div>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
}
