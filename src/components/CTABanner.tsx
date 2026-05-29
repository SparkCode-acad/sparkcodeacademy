import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CTABannerProps {
  onNavClick: (sectionId: string) => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onNavClick }) => {
  return (
    <section className="py-20 bg-white relative z-10 overflow-hidden border-t border-slate-100 font-sans">
      {/* High-performance CSS particles background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-accent-purple/20 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-accent-orange/30 animate-ping [animation-duration:3s]" />
        <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-pink-500/10 animate-bounce [animation-duration:5s]" />
        <div className="absolute bottom-1/4 left-1/4 w-2.5 h-2.5 rounded-full bg-accent-purple/15 animate-pulse [animation-duration:4s]" />
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute -right-24 bottom-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -left-24 top-0 w-80 h-80 bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-sm">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-bold tracking-wider text-accent-purple uppercase block mb-4">
              READY TO LAUNCH?
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight leading-[1.15]">
              Start your application today and build the career you deserve.
            </h2>
          </div>
          
          <div className="flex-shrink-0 w-full md:w-auto">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavClick('contact');
              }}
              className="inline-flex items-center justify-center gap-1.5 w-full md:w-auto px-10 py-5 rounded-full bg-accent-purple hover:brightness-95 text-white font-bold text-base transition-all duration-300 shadow-[0_4px_12px_rgba(99,102,241,0.2)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.45)] hover:-translate-y-0.5 cursor-pointer"
            >
              Enroll in Academy
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
