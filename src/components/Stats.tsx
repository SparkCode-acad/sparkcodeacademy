import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Star, Building2 } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      icon: <GraduationCap className="w-6 h-6 text-accent-purple" />,
      number: "1,200+",
      title: "Students Graduated",
      desc: "Trained across core digital skills.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-accent-purple" />,
      number: "92%",
      title: "Employment Rate",
      desc: "Within 6 months of graduation.",
    },
    {
      icon: <Star className="w-6 h-6 text-accent-orange" />,
      number: "4.9/5",
      title: "Student Rating",
      desc: "Top reviewed academy in Lagos.",
    },
    {
      icon: <Building2 className="w-6 h-6 text-accent-purple" />,
      number: "45+",
      title: "Hiring Partners",
      desc: "Top startups & international firms.",
    },
  ];

  return (
    <section id="about" className="py-12 bg-slate-50 border-y border-slate-100 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex items-center gap-4 p-4 hover:bg-slate-50/50 rounded-2xl transition-colors duration-200"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-xl">
                {stat.icon}
              </div>
              <div className="text-left">
                <h3 className="font-display font-bold text-2xl text-text-primary mb-0.5">
                  {stat.number}
                </h3>
                <h4 className="font-sans font-bold text-xs text-text-secondary uppercase tracking-wider mb-0.5">
                  {stat.title}
                </h4>
                <p className="font-sans text-[11px] text-slate-500 leading-normal">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
