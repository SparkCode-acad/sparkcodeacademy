import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, PenTool, LayoutTemplate, ArrowRight, Clock, Award, BookOpen, ChevronDown } from 'lucide-react';

interface ProgramsProps {
  onNavClick: (sectionId: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onNavClick }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const programs = [
    {
      icon: <Code2 className="w-6 h-6 text-accent-purple" />,
      title: "Frontend Development",
      desc: "Master HTML, CSS, JavaScript, React, and Tailwind to build modern, responsive web applications.",
      duration: "12 Weeks",
      level: "Beginner to Pro",
      projectsCount: "10+ Projects",
      badgeColor: "bg-indigo-50 border-indigo-100 text-accent-purple",
      modules: [
        "Weeks 1-3: HTML5, CSS3, Flexbox & CSS Grid Layouts",
        "Weeks 4-6: JavaScript Essentials, Async programming, & DOM",
        "Weeks 7-9: React Framework, Hook state management, & API fetch",
        "Weeks 10-12: Tailwind CSS, Git/GitHub, & Final Capstone Project"
      ]
    },
    {
      icon: <LayoutTemplate className="w-6 h-6 text-pink-500" />,
      title: "UI/UX Design",
      desc: "Learn user research, wireframing, prototyping, and usability testing to build stunning user interfaces in Figma.",
      duration: "10 Weeks",
      level: "Beginner to Pro",
      projectsCount: "4 Portfolio Case Studies",
      badgeColor: "bg-pink-50 border-pink-100 text-pink-500",
      modules: [
        "Weeks 1-2: Design Thinking, User Research, & Personas",
        "Weeks 3-4: User Flows, Information Architecture, & Wireframing",
        "Weeks 5-7: High-Fidelity UI Design & Vector Assets in Figma",
        "Weeks 8-10: Interactive Prototyping, Design Systems, & Usability Testing"
      ]
    },
    {
      icon: <PenTool className="w-6 h-6 text-emerald-500" />,
      title: "Graphic Design",
      desc: "Master typography, color theory, layout design, and brand identity using Adobe Illustrator and Photoshop.",
      duration: "8 Weeks",
      level: "Beginner to Pro",
      projectsCount: "Brand Style Guide Book",
      badgeColor: "bg-emerald-50 border-emerald-100 text-emerald-500",
      modules: [
        "Weeks 1-2: Vector Illustration & Logo Design (Illustrator)",
        "Weeks 3-4: Photo Editing, Masking & Ad Compositing (Photoshop)",
        "Weeks 5-6: Typography Systems, Editorial Layout, & Grids",
        "Weeks 7-8: Brand Identity, Package Mockups, & Final Presentation"
      ]
    },
  ];

  const toggleExpand = (idx: number) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(idx);
    }
  };

  return (
    <section id="programs" className="py-24 bg-white relative z-10 font-sans">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider text-accent-purple uppercase block mb-3">
            OUR PROGRAMS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight leading-tight">
            Learn the skills. <br />Build the tech careers of tomorrow.
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white border border-slate-100 hover:border-slate-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between text-left h-fit"
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                    {prog.icon}
                  </div>
                  <span className={`text-[10px] font-bold tracking-wider px-3 py-1 rounded-full border ${prog.badgeColor}`}>
                    {prog.duration}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="font-display font-bold text-2xl text-text-primary mb-3">
                  {prog.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {prog.desc}
                </p>

                {/* Course Metadata */}
                <div className="flex flex-col gap-2.5 mb-6 border-t border-slate-50 pt-6">
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Duration: <strong>{prog.duration}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <Award className="w-4 h-4 text-slate-400" />
                    <span>Level: <strong>{prog.level}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <BookOpen className="w-4 h-4 text-slate-400" />
                    <span>Focus: <strong>{prog.projectsCount}</strong></span>
                  </div>
                </div>

                 {/* Accordion Toggle */}
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-bold text-text-primary transition-colors mb-4 cursor-pointer"
                >
                  <span>Curriculum Breakdown</span>
                  <motion.div
                    animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {expandedIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="flex flex-col gap-3 py-2 text-[11px] text-text-secondary border-b border-slate-100 mb-4 pl-1">
                        {prog.modules.map((mod, midx) => (
                          <li key={midx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-accent-purple font-bold mt-0.5">•</span>
                            <span>{mod}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action Buttons */}
              <div className="mt-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick('contact');
                  }}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-accent-purple hover:brightness-95 text-white font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                >
                  Apply to Program
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
