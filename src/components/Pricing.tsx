import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onNavClick: (sectionId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onNavClick }) => {
  const [billingCycle, setBillingCycle] = useState<'upfront' | 'monthly'>('upfront');

  const plans = [
    {
      name: "Graphic Design",
      price: { upfront: 180000, monthly: 35000 },
      period: { upfront: "One-Time Pay", monthly: "For 6 Months" },
      desc: "Master vector layouts, photo manipulation, and core brand guidelines.",
      accent: false,
      features: [
        "8 Weeks practical training",
        "1-on-1 Portfolio review",
        "Illustrator & Photoshop manuals",
        "Branding capstone project",
        "Access to Yaba workspace",
        "Slack student community"
      ]
    },
    {
      name: "UI/UX Design",
      price: { upfront: 250000, monthly: 50000 },
      period: { upfront: "One-Time Pay", monthly: "For 6 Months" },
      desc: "Learn wireframing, interactive prototyping, and design systems in Figma.",
      accent: true, // popular
      features: [
        "10 Weeks practical training",
        "4 Figma portfolio case projects",
        "Design system workflow guides",
        "Review by lead design mentors",
        "Mock client presentations",
        "Job interview prep & resume help",
        "Access to Yaba workspace",
        "Lifetime Slack access"
      ]
    },
    {
      name: "Frontend Development",
      price: { upfront: 350000, monthly: 70000 },
      period: { upfront: "One-Time Pay", monthly: "For 6 Months" },
      desc: "Master JavaScript, React, Tailwind CSS, Git, and web deployment pipelines.",
      accent: false,
      features: [
        "12 Weeks intensive coding bootcamp",
        "10+ Production projects",
        "React state & routing masters",
        "1-on-1 code reviews with devs",
        "Full Git & Github tutorials",
        "Hiring partner placement grid",
        "Access to Yaba workspace",
        "Lifetime support channel"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative z-10 border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider text-accent-purple uppercase block mb-3">
            TUITION PLANS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight mb-6">
            Transparent pricing. <br />No hidden costs.
          </h2>
          
          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white p-1.5 rounded-full border border-slate-100 shadow-sm">
            <button
              onClick={() => setBillingCycle('upfront')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                billingCycle === 'upfront'
                  ? 'bg-accent-purple text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Upfront Pay
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-accent-purple text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Monthly Installments
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`bg-white border rounded-3xl p-8 flex flex-col justify-between text-left relative ${
                plan.accent 
                  ? 'border-accent-purple shadow-xl glow-purple' 
                  : 'border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300'
              }`}
            >
              {plan.accent && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-purple text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                  Most Popular
                </span>
              )}

              <div>
                {/* Plan Header */}
                <h3 className="font-display font-bold text-2xl text-text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-6">
                  {plan.desc}
                </p>

                {/* Price Display */}
                <div className="mb-6 flex items-baseline gap-1 border-b border-slate-50 pb-6">
                  <span className="text-3xl sm:text-4xl font-display font-black text-text-primary">
                    ₦{(billingCycle === 'upfront' ? plan.price.upfront : plan.price.monthly).toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-400 font-bold">
                    / {billingCycle === 'upfront' ? plan.period.upfront : plan.period.monthly}
                  </span>
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-4 text-xs text-text-secondary mb-8">
                  {plan.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent-purple" />
                      </div>
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick('contact');
                  }}
                  className={`inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
                    plan.accent
                      ? 'bg-accent-purple hover:brightness-95 text-white shadow-sm hover:shadow-md'
                      : 'bg-slate-900 hover:brightness-95 text-white shadow-sm hover:shadow-md'
                  }`}
                >
                  Enroll Now
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
