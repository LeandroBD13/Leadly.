import { ShoppingCart, Search, Phone } from 'lucide-react';
import { Waves } from './components/Waves';
import { TrustedBy } from './components/TrustedBy';
import { TestimonialsDemo } from './components/TestimonialsDemo';
import { Services } from './components/Services';
import { Booking } from './components/Booking';
import { LegalFooter } from './components/LegalFooter';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const GlassyCursor = () => (
  <img 
    src="/3d-cursor-nobg.png" 
    alt="3D Cursor" 
    style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.6))' }}
    className="w-[90px] h-[90px] object-contain"
  />
);

function HomePage({ phase, cameraAnim, cameraTrans, typedText }: any) {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="w-full bg-black overflow-x-hidden min-h-screen flex flex-col pt-24 md:pt-32">
       <style>{`
        html, body { 
          background-color: black !important; 
          margin: 0; 
          padding: 0;
          overflow-x: hidden;
          width: 100%;
          position: relative;
        }
        .logo-bubble {
          position: relative;
          font-weight: 900;
          color: white;
          text-shadow: 0 0 20px rgba(255,255,255,0.3);
        }
      `}</style>

      {/* Intro Sequence Overlay */}
      <AnimatePresence>
        {phase !== 'hero' && (
          <motion.div
            key="preloader"
            initial={{ backgroundColor: '#000000' }}
            animate={{ backgroundColor: '#000000' }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ scale: 1.5, x: 80 }}
              animate={cameraAnim}
              transition={cameraTrans}
              className="flex justify-center items-center w-full h-full"
            >
              <AnimatePresence>
                {(phase === 'typing' || phase === 'search') && (
                <motion.div
                  key="search-box"
                  initial={{ padding: '1.2rem 2.5rem', backgroundColor: 'transparent', borderColor: 'transparent', borderWidth: '0px' }}
                  animate={{ padding: '1.2rem 2.5rem' }}
                  exit={{ 
                    scale: 0,
                    opacity: 0, 
                    transition: { duration: 0.4, ease: "backIn" } 
                  }}
                  className="flex items-center gap-4 md:gap-6 relative"
                >
                  <AnimatePresence>
                    {phase === 'search' && (
                      <motion.div
                        initial={{ scale: 2.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                        className="absolute inset-0 bg-[#111111] border border-[#333333] rounded-full drop-shadow-2xl -z-10"
                      />
                    )}
                  </AnimatePresence>
                  
                  <div className="flex items-center text-white text-3xl sm:text-5xl md:text-6xl tracking-tight font-medium"
                       style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    {typedText}
                    <motion.div
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="w-[3px] md:w-[4px] h-8 md:h-12 bg-blue-500 ml-1 rounded-full inline-block"
                    />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: phase === 'search' ? 1 : 0, 
                      scale: phase === 'search' ? 1 : 0.8 
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-slate-400 pl-2 md:pl-4"
                  >
                    <Search className="w-6 h-6 md:w-9 md:h-9" />
                  </motion.div>

                  {phase === 'search' && (
                    <motion.div
                      initial={{ x: 200, y: 300, opacity: 0 }}
                      animate={{ 
                        x: [200, 160, 160], 
                        y: [300, 20, 20], 
                        scale: [1, 1, 0.85],
                        opacity: [0, 1, 1]
                      }}
                      transition={{ 
                        duration: 1.2, 
                        times: [0, 0.8, 1],
                        ease: "easeOut" 
                      }}
                      className="absolute left-1/2 top-1/2 ml-[20px] md:ml-[30px] mt-[5px] md:mt-[10px]"
                    >
                      <GlassyCursor />
                    </motion.div>
                  )}
                </motion.div>
              )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {phase === 'logo' && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0.2, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 12 }}
              className="flex pointer-events-auto"
            >
              {"LEADLY".split('').map((char, i) => (
                <motion.span
                  key={`center-${i}`}
                  layoutId={`logo-char-${i}`}
                  className="logo-bubble text-5xl md:text-8xl tracking-tighter"
                  data-text={char}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="absolute inset-x-0 top-0 z-0 pointer-events-none overflow-hidden h-screen text-black">
        <div className="absolute inset-0 opacity-70">
          <Waves strokeColor="#ffffff" backgroundColor="transparent" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      {/* Navigation Bar - Stays in Hero */}
      <nav className="absolute top-0 left-0 right-0 z-[120] flex items-center justify-between px-6 py-8 md:px-12 md:py-10 w-full">
        <div className="flex w-[120px] md:w-[150px] items-center">
          {phase === 'hero' ? (
            <div className="flex cursor-default relative z-50">
              {"LEADLY".split('').map((char, i) => (
                <motion.span
                  key={`nav-${i}`}
                  layoutId={`logo-char-${i}`}
                  className="logo-bubble text-3xl md:text-4xl tracking-tighter"
                  data-text={char}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 100, 
                    damping: 15,
                    delay: i * 0.08
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ) : (
            <div className="h-[40px]" />
          )}
        </div>

        {phase === "hero" && <div className="flex items-center">
          <motion.button 
            onClick={scrollToBooking} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="px-4 py-2 md:px-8 md:py-4 bg-white text-black rounded-lg text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          >
            Call us
          </motion.button>
        </div>}
      </nav>

      <main className="relative z-10 flex-grow w-full px-6 md:px-12 flex flex-col min-h-[85vh] font-sans">
          <div className="w-full flex-grow"></div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 items-end pb-12 md:pb-20 mt-auto">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 max-w-full md:max-w-[450px]">
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl md:text-6xl font-bold uppercase leading-[1.0] tracking-tighter text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                       Boost Your<br />
                       Online Growth
                    </h1>
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] leading-relaxed opacity-60 font-medium text-white max-w-[300px] md:max-w-none">
                        HIGH CONVERTING WEBSITE DESIGN SOLUTIONS TO SCALE, ENGAGE, AND BOOST YOUR BRAND.
                    </p>
                </div>
                <motion.button 
                  onClick={scrollToBooking}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-black rounded-lg text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                >
                  Work With Us
                </motion.button>
            </div>
            <div className="flex flex-row md:flex-col justify-between md:justify-end items-end gap-8 md:gap-12 text-right w-full">
               <div className="flex flex-col gap-1 md:gap-2 text-left md:text-right">
                    <span className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-none text-white">95%</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-40 font-semibold max-w-[100px] md:max-w-[150px] md:ml-auto text-white">
                        Average Client Retention
                    </span>
               </div>
               <div className="flex flex-col gap-1 md:gap-2">
                    <span className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-none text-white">30+</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-40 font-semibold max-w-[100px] md:max-w-[150px] ml-auto text-white">
                        Industries Scaled
                    </span>
               </div>
            </div>
          </div>
      </main>

      <TrustedBy />
      <TestimonialsDemo />
      <Services />
      <Booking />
      <LegalFooter />
    </div>
  );
}

export default function App() {
  const [phase, setPhase] = useState<'typing' | 'search' | 'zoom' | 'logo' | 'hero'>('typing');
  const [cameraPhase, setCameraPhase] = useState<'following' | 'centering' | 'zoomingOut' | 'normal'>('following');
  const [typedText, setTypedText] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const textToType = "Who is the best?";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    
    let timers: NodeJS.Timeout[] = [];
    textToType.split('').forEach((char, i) => {
      timers.push(setTimeout(() => setTypedText(prev => prev + char), 80 * i));
    });
    timers.push(setTimeout(() => setCameraPhase('centering'), 1300));
    timers.push(setTimeout(() => setCameraPhase('zoomingOut'), 1500));
    timers.push(setTimeout(() => {
      setPhase('search');
      setCameraPhase('normal');
    }, 1600));
    timers.push(setTimeout(() => setPhase('zoom'), 3200));
    timers.push(setTimeout(() => setPhase('logo'), 3600));
    timers.push(setTimeout(() => setPhase('hero'), 4400));
    
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let cameraAnim = { scale: 1, x: 0 };
  let cameraTrans: any = { duration: 0.8, ease: "easeInOut" };

  switch (cameraPhase) {
    case 'following':
      cameraAnim = { scale: isMobile ? 1.2 : 1.5, x: isMobile ? -20 : -80 };
      cameraTrans = { duration: 1.3, ease: "linear" };
      break;
    case 'centering':
      cameraAnim = { scale: isMobile ? 1.2 : 1.5, x: 0 };
      cameraTrans = { duration: 0.2, ease: "easeInOut" };
      break;
    case 'zoomingOut':
    case 'normal':
      cameraAnim = { scale: 1, x: 0 };
      cameraTrans = { duration: 0.6, ease: "easeInOut" };
      break;
  }

  return <HomePage phase={phase} cameraAnim={cameraAnim} cameraTrans={cameraTrans} typedText={typedText} />;
}
