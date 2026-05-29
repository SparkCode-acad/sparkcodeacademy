import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, ArrowUpRight } from 'lucide-react';

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  image: string;
  course: 'Frontend' | 'UI/UX' | 'Graphic Design';
  rating: number;
  highlight: string;
  accentClass: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      quote: "SparkCode didn't just teach me coding. They transformed my entire creative approach. Today, I build high-performance React portals and production apps.",
      name: "Tomiwa A.",
      role: "Frontend Graduate",
      image: "/Images/Zayd.png",
      course: "Frontend",
      rating: 5,
      highlight: "React & Tailwind",
      accentClass: "border-t-accent-purple shadow-sm hover:shadow-[0_20px_40px_rgba(249,115,22,0.08)]"
    },
    {
      quote: "The Figma design system workflows and client project sprints are unmatched. It's where industry-ready designers are forged in Lagos.",
      name: "Zainab K.",
      role: "UI/UX Graduate",
      image: "/Images/Jafar.jpeg",
      course: "UI/UX",
      rating: 5,
      highlight: "Figma Systems",
      accentClass: "border-t-accent-orange shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)]"
    },
    {
      quote: "From designing basic vectors to launching professional brand guides. The mentors gave me the design confidence I needed.",
      name: "Daniel O.",
      role: "Graphic Design Graduate",
      image: "/Images/Muhsin.png",
      course: "Graphic Design",
      rating: 5,
      highlight: "Branding Capstone",
      accentClass: "border-t-pink-500 shadow-sm hover:shadow-[0_20px_40px_rgba(236,72,153,0.08)]"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative z-10 border-t border-slate-100 font-sans overflow-hidden">
      {/* Dynamic background accents */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20"
          >
            <MessageSquare className="w-4 h-4 text-accent-purple" />
            <span className="text-xs font-bold tracking-wider text-accent-purple uppercase">
              STUDENT SUCCESS STORIES
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight"
          >
            Loved by students. <br />Trusted by top creative labs.
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`bg-white border-t-4 border-x border-b border-slate-100 rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${item.accentClass}`}
            >
              {/* Top Card Section */}
              <div>
                {/* Stars and Course tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, sidx) => (
                      <Star key={sidx} className="w-4 h-4 fill-accent-purple text-accent-purple" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-text-secondary bg-slate-50 border border-slate-100 px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>

                {/* Quote block */}
                <blockquote className="relative">
                  <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed font-normal mb-8 relative z-10">
                    "{item.quote}"
                  </p>
                </blockquote>
              </div>

              {/* User Bio and dynamic tag footer */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100 shadow-inner flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=f97316&color=fff`;
                      }}
                    />
                  </div>
                  <div className="text-left flex flex-col">
                    <span className="font-display font-bold text-sm text-text-primary leading-tight">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-text-secondary font-medium">
                      {item.role}
                    </span>
                  </div>
                </div>

                {/* Arrow up right details */}
                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-text-secondary hover:text-accent-purple hover:bg-accent-purple/10 hover:border-accent-purple transition-colors duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
