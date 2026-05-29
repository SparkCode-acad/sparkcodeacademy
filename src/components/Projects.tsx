import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code, Layout, Palette } from 'lucide-react';

interface ProjectsProps {
  onNavClick: (sectionId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onNavClick }) => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'uiux' | 'graphics'>('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'frontend', name: 'Frontend Dev' },
    { id: 'uiux', name: 'UI/UX Design' },
    { id: 'graphics', name: 'Graphic Design' },
  ];

  const works = [
    {
      title: "EduStream React Portal",
      category: "frontend",
      categoryName: "Frontend Development",
      studentName: "Adewale K.",
      desc: "A responsive virtual classroom dashboard built with React, Framer Motion, and Tailwind CSS.",
      accentColor: "border-indigo-100 bg-indigo-50/30 text-accent-purple",
      icon: <Code className="w-4 h-4" />,
      preview: (
        <div className="w-full h-full bg-slate-950 p-4 flex flex-col justify-between rounded-t-2xl border border-b-0 border-slate-800 text-left font-sans">
          <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="flex flex-col gap-2 my-2">
            <div className="h-6 w-32 bg-slate-800 rounded animate-pulse" />
            <div className="h-4 w-48 bg-slate-900 rounded" />
            <div className="grid grid-cols-3 gap-2 mt-1">
              <div className="h-10 bg-slate-900 border border-slate-800 rounded p-1.5 flex flex-col justify-between">
                <span className="text-[7px] text-slate-500">Class</span>
                <span className="text-[8px] font-bold text-white">Lec 14</span>
              </div>
              <div className="h-10 bg-slate-900 border border-slate-800 rounded p-1.5 flex flex-col justify-between">
                <span className="text-[7px] text-slate-500">Tasks</span>
                <span className="text-[8px] font-bold text-accent-purple">5/8 Done</span>
              </div>
              <div className="h-10 bg-slate-900 border border-slate-800 rounded p-1.5 flex flex-col justify-between">
                <span className="text-[7px] text-slate-500">Grade</span>
                <span className="text-[8px] font-bold text-emerald-400 font-mono">A+</span>
              </div>
            </div>
          </div>
          <div className="py-1.5 bg-accent-purple hover:bg-accent-purple/90 text-white rounded text-[8px] font-bold text-center tracking-wide uppercase">
            Launch Classroom
          </div>
        </div>
      )
    },
    {
      title: "HealthKeep App Design",
      category: "uiux",
      categoryName: "UI/UX Design",
      studentName: "Zainab K.",
      desc: "Comprehensive user research, Figma wireframes, and interactive click prototype for medical tracking.",
      accentColor: "border-pink-100 bg-pink-50/30 text-pink-500",
      icon: <Layout className="w-4 h-4" />,
      preview: (
        <div className="w-full h-full bg-white p-4 flex flex-col justify-between rounded-t-2xl border border-b-0 border-slate-100 text-left font-sans shadow-inner">
          <div className="flex items-center justify-between border-b border-slate-50 pb-2">
            <span className="text-[9px] font-bold text-slate-400 tracking-wider">HealthKeep v1</span>
            <span className="text-[8px] font-bold text-pink-500 bg-pink-50 px-1.5 py-0.5 rounded">Active</span>
          </div>
          <div className="my-2 flex flex-col gap-2">
            <div className="h-3 w-16 bg-slate-100 rounded" />
            <div className="bg-slate-50 border border-slate-100 p-2 rounded-lg flex items-center justify-between shadow-sm">
              <div className="flex flex-col">
                <span className="text-[7px] text-slate-400">Heart Rate</span>
                <span className="text-[10px] font-bold text-slate-800">76 BPM</span>
              </div>
              <div className="w-6 h-4 bg-pink-100 rounded-sm flex items-center justify-center">
                <span className="text-[6px] text-pink-500 font-bold">♥</span>
              </div>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-pink-500 h-full w-[80%] rounded-full" />
            </div>
          </div>
          <div className="py-1 bg-slate-900 text-white rounded text-[8px] font-bold text-center">
            View Research Deck
          </div>
        </div>
      )
    },
    {
      title: "Lagos Transit Identity",
      category: "graphics",
      categoryName: "Graphic Design",
      studentName: "Tomiwa A.",
      desc: "A complete vector branding packet, color guide systems, typography manuals, and public coach wrapping.",
      accentColor: "border-emerald-100 bg-emerald-50/30 text-emerald-500",
      icon: <Palette className="w-4 h-4" />,
      preview: (
        <div className="w-full h-full bg-emerald-50 p-4 flex flex-col justify-between rounded-t-2xl border border-b-0 border-emerald-100 text-left font-sans">
          <div className="flex items-center justify-between border-b border-emerald-100/60 pb-2">
            <span className="text-[8px] font-bold text-emerald-800 font-mono">BRAND BOOK</span>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <div className="my-4 flex flex-col items-center justify-center gap-1.5">
            <div className="w-10 h-10 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin duration-1000 flex items-center justify-center">
              <span className="text-[9px] font-bold text-emerald-800">LT</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-950">LAGOS TRANSIT</span>
            <span className="text-[7px] text-emerald-700 tracking-widest font-mono">RGB 16, 185, 129</span>
          </div>
          <div className="py-1 bg-emerald-600 text-white rounded text-[7px] font-bold text-center">
            Download PDF Guidelines
          </div>
        </div>
      )
    },
    {
      title: "KudiPay Fintech App",
      category: "frontend",
      categoryName: "Frontend Development",
      studentName: "Daniel O.",
      desc: "Simulated quick bank transactions, animated charge meters, and multi-wallet components built using React.",
      accentColor: "border-indigo-100 bg-indigo-50/30 text-accent-purple",
      icon: <Code className="w-4 h-4" />,
      preview: (
        <div className="w-full h-full bg-slate-950 p-4 flex flex-col justify-between rounded-t-2xl border border-b-0 border-slate-800 text-left font-sans">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <span className="text-[9px] text-slate-500 font-mono">KUDIPAY.EXE</span>
            <span className="text-[8px] font-mono text-emerald-400 font-bold bg-emerald-400/10 px-1.5 rounded">CONNECTED</span>
          </div>
          <div className="my-2 flex flex-col gap-2">
            <span className="text-[9px] text-slate-400">Total Balance</span>
            <span className="text-sm font-bold text-white font-mono">$4,820.00</span>
            <div className="h-6 bg-slate-900 border border-slate-800 rounded p-1 flex items-center justify-between">
              <span className="text-[8px] text-slate-400">Sent to Mama</span>
              <span className="text-[8px] font-bold text-emerald-400 font-mono">-$200.00</span>
            </div>
          </div>
          <div className="py-1.5 bg-slate-800 text-slate-300 rounded text-[8px] font-bold text-center">
            Open Web App
          </div>
        </div>
      )
    },
    {
      title: "EcoShop Mobile Flow",
      category: "uiux",
      categoryName: "UI/UX Design",
      studentName: "Zayd T.",
      desc: "Green e-commerce mobile wireframes, clickable user checkout pipelines, and testing reports.",
      accentColor: "border-pink-100 bg-pink-50/30 text-pink-500",
      icon: <Layout className="w-4 h-4" />,
      preview: (
        <div className="w-full h-full bg-white p-4 flex flex-col justify-between rounded-t-2xl border border-b-0 border-slate-100 text-left font-sans shadow-inner">
          <div className="flex items-center justify-between border-b border-slate-50 pb-2">
            <span className="text-[9px] font-bold text-slate-400 tracking-wider">ECOSHOP.FIG</span>
            <span className="text-[8px] font-bold text-slate-600 bg-slate-50 px-1.5 py-0.5 rounded">PROTOTYPE</span>
          </div>
          <div className="my-2 flex flex-col gap-2">
            <div className="flex justify-between items-center text-[8px] text-slate-500">
              <span>Checkout Flow</span>
              <span>Screen 3 of 6</span>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-2 rounded-lg flex flex-col gap-1 shadow-sm">
              <span className="text-[8px] font-bold text-slate-800">Review Items</span>
              <div className="h-1 w-16 bg-slate-200 rounded" />
              <div className="h-1 w-24 bg-slate-200 rounded" />
            </div>
          </div>
          <div className="py-1 bg-pink-500 text-white rounded text-[8px] font-bold text-center">
            Run Figma Prototype
          </div>
        </div>
      )
    },
    {
      title: "Nourish Juice Branding",
      category: "graphics",
      categoryName: "Graphic Design",
      studentName: "Jafar B.",
      desc: "Fruit beverage typographic assets, custom color labels, packaging renders, and social templates.",
      accentColor: "border-emerald-100 bg-emerald-50/30 text-emerald-500",
      icon: <Palette className="w-4 h-4" />,
      preview: (
        <div className="w-full h-full bg-emerald-50 p-4 flex flex-col justify-between rounded-t-2xl border border-b-0 border-emerald-100 text-left font-sans">
          <div className="flex items-center justify-between border-b border-emerald-100/60 pb-2">
            <span className="text-[8px] font-bold text-emerald-800 font-mono">PACKAGING</span>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <div className="my-4 flex flex-col items-center justify-center gap-1.5">
            <div className="w-8 h-12 bg-emerald-600/20 border-2 border-emerald-500 rounded-lg flex flex-col items-center justify-center p-1 relative overflow-hidden">
              <div className="w-full bg-emerald-500 h-2 absolute top-0" />
              <span className="text-[8px] font-bold text-emerald-950 font-display mt-2">Nourish</span>
              <span className="text-[5px] text-emerald-700 font-mono">100% ORGANIC</span>
            </div>
          </div>
          <div className="py-1 bg-emerald-600 text-white rounded text-[7px] font-bold text-center">
            View Dribbble Case
          </div>
        </div>
      )
    },
  ];

  const filteredWorks = filter === 'all' ? works : works.filter(w => w.category === filter);

  return (
    <section id="showcase" className="py-24 bg-slate-50 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="text-left max-w-xl">
            <span className="text-xs font-bold tracking-wider text-accent-purple uppercase block mb-3">
              STUDENT WORK
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight">
              Built by our students. <br />From scratch to final pitch.
            </h2>
          </div>
          
          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-2 bg-white border border-slate-100 p-1.5 rounded-2xl shadow-sm self-start lg:self-end">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  filter === cat.id
                    ? 'bg-accent-purple text-white shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-slate-50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Work Showcase Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                layout
                key={work.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white border border-slate-100 hover:border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left"
              >
                {/* Mockup Preview Panel */}
                <div className="p-6 pb-0 bg-slate-50 border-b border-slate-100 aspect-[16/11] overflow-hidden flex items-end">
                  <div className="w-full transform translate-y-3 group-hover:translate-y-0.5 transition-transform duration-500">
                    {work.preview}
                  </div>
                </div>

                {/* Metadata details */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1 text-[9px] font-bold tracking-wider px-2 py-0.5 rounded border ${work.accentColor}`}>
                        {work.icon}
                        {work.categoryName}
                      </span>
                      <span className="text-[9px] text-slate-400 font-bold">
                        by {work.studentName}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                      {work.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      {work.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-50 flex justify-start">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavClick('contact');
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-accent-purple group-hover:gap-2 transition-all duration-300"
                    >
                      Learn Student Program
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
