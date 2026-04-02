export function LegalFooter() {
  return (
    <footer className="w-full bg-black py-16 px-6 text-center text-[9px] md:text-[10px] text-white/30 font-sans tracking-widest">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <div className="flex flex-wrap gap-6 items-center justify-center uppercase font-medium">
          <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          <span className="hover:text-white transition-colors cursor-pointer">Cookie Notice</span>
        </div>
        
        <div className="flex flex-col items-center gap-2">
           <div className="uppercase tracking-[0.4em] font-medium text-white/30">Driven by Nadja Berger</div>
           <div className="opacity-20 uppercase text-[8px]">© {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
