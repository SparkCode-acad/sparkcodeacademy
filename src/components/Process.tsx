import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Code, Award, GraduationCap } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: <UserCheck className="w-6 h-6 text-accent-purple" />,
      step: "01",
      title: "Apply & Interview",
      desc: "Fill out our quick online application. We will reach out for a brief chat to gauge your goals and motivations."
    },
    {
      icon: <Code className="w-6 h-6 text-pink-500" />,
      step: "02",
      title: "Practical Learning",
      desc: "Attend structured classes and build real apps, client projects, and graphic books. 100% portfolio-based learning."
    },
    {
      icon: <Award className="w-6 h-6 text-emerald-500" />,
      step: "03",
      title: "Graduation Pitch",
      desc: "Pitch your capstone web app, user interface prototype, or brand identity to hiring partners and classmates."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-accent-orange" />,
      step: "04",
      title: "Career Placement",
      desc: "Join our network of hiring partners, polish your resume with design books, and land high-paying roles."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative z-10 border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-wider text-accent-purple uppercase block mb-3">
            ADMISSIONS PROCESS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight">
            Your road map from <br />complete beginner to hired tech pro.
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-white border border-slate-100 hover:border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-start text-left min-h-[250px]"
            >
              <div className="w-full flex items-center justify-between mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-2xl group-hover:border-accent-purple/20 transition-all duration-300">
                  {item.icon}
                </div>
                <span className="font-display font-black text-4xl text-slate-100 group-hover:text-accent-purple/10 transition-colors duration-300">
                  {item.step}
                </span>
              </div>
              
              <div>
                <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
