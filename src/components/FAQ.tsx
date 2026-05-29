import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do I need prior tech or design experience to enroll?",
      a: "No prior experience is required! All of our tracks (Frontend, UI/UX, Graphic Design) are built from absolute scratch. We start with the core fundamentals and gradually guide you through advanced concepts and frameworks."
    },
    {
      q: "Is SparkCode Academy remote or local in Lagos?",
      a: "We offer a flexible hybrid learning structure. You can participate in all classes remotely via live online sessions, or work from our modern physical developer lab situated at Yaba, Lagos, Nigeria."
    },
    {
      q: "What is the job placement support process?",
      a: "We provide comprehensive career mentorship. We work with you to refine your portfolios, conduct simulated technical and design interviews, optimize your resume, and pitch your capstone projects directly to our network of 45+ hiring partners."
    },
    {
      q: "What laptop specs and software tools do I need?",
      a: "You'll need a laptop with at least 8GB RAM. For the Frontend track, we use Visual Studio Code, Git, and Node.js (all free). For UI/UX and Graphics, we use Figma (free tier), and Adobe Photoshop/Illustrator."
    },
    {
      q: "How do tuition installments work?",
      a: "You can pay in full upfront to receive a discount, or choose our monthly installment plan, which splits the tuition into 6 equal monthly payments over the course duration and beyond."
    }
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white relative z-10 border-t border-slate-100 font-sans">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider text-accent-purple uppercase block mb-3">
            COMMON QUESTIONS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-between p-6 text-left outline-none cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-accent-purple flex-shrink-0" />
                  <span className="font-sans font-bold text-sm sm:text-base text-text-primary">
                    {faq.q}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-slate-400"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 pl-14 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
