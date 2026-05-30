import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: 'Frontend Development',
    motivation: '',
    newsletter: false,
  });

  const programs = [
    "Frontend Development",
    "UI/UX Design",
    "Graphic Design",
  ];

  return (
    <section id="contact" className="py-24 bg-white relative z-10 border-t border-slate-100 font-sans">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 text-left flex flex-col gap-6">
            <span className="text-xs font-bold tracking-wider text-accent-purple uppercase block">
              APPLY NOW
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight">
              Ready to learn <br />with SparkCode?
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-md">
              Admissions are currently open for our upcoming cohort. Fill out the application form and our team will get in touch with you shortly.
            </p>

            <div className="flex flex-col gap-6 mt-6 border-t border-slate-100 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-xl">
                  <Mail className="w-4 h-4 text-accent-purple" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-text-primary uppercase tracking-wider mb-1">EMAIL US</h4>
                  <a href="mailto:hello@sparkcode.dev" className="text-sm text-text-secondary hover:text-accent-purple transition-colors">
                    hello@sparkcode.dev
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-xl">
                  <Phone className="w-4 h-4 text-accent-purple" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-text-primary uppercase tracking-wider mb-1">CALL US</h4>
                  <a href="tel:+2349012345678" className="text-sm text-text-secondary hover:text-accent-purple transition-colors">
                    +234 901 234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-xl">
                  <MapPin className="w-4 h-4 text-accent-purple" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-text-primary uppercase tracking-wider mb-1">OUR LAB</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    1 Code Street, Yaba, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden">
              <form action="https://formsubmit.co/sparkcodeacad@gmail.com" method="POST" className="flex flex-col gap-6 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-bold text-[10px] tracking-wider text-text-secondary uppercase">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          name="Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full bg-slate-50 border border-slate-200 focus:border-accent-purple focus:bg-white rounded-xl px-4 py-3 text-sm text-text-primary placeholder-slate-400 outline-none transition-all duration-300"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-bold text-[10px] tracking-wider text-text-secondary uppercase">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="Email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. john@example.com"
                          className="w-full bg-slate-50 border border-slate-200 focus:border-accent-purple focus:bg-white rounded-xl px-4 py-3 text-sm text-text-primary placeholder-slate-400 outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="program" className="font-bold text-[10px] tracking-wider text-text-secondary uppercase">
                        Select Program Track
                      </label>
                      <select
                        id="program"
                        name="Program"
                        required
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-accent-purple focus:bg-white rounded-xl px-4 py-3 text-sm text-text-primary outline-none transition-all duration-300 cursor-pointer"
                      >
                        {programs.map((prog, idx) => (
                          <option key={idx} value={prog} className="bg-white">
                            {prog}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="motivation" className="font-bold text-[10px] tracking-wider text-text-secondary uppercase">
                        Why do you want to join SparkCode Academy?
                      </label>
                      <textarea
                        id="motivation"
                        rows={4}
                        name="Message"
                        required
                        value={formData.motivation}
                        onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                        placeholder="Tell us about your background, goals, and what you hope to achieve..."
                        className="w-full bg-slate-50 border border-slate-200 focus:border-accent-purple focus:bg-white rounded-xl px-4 py-3 text-sm text-text-primary placeholder-slate-400 outline-none resize-none transition-all duration-300"
                      />
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer select-none">
                      <label className="relative flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.newsletter}
                          name="Newsletter"
                          onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-5 h-5 bg-slate-50 border border-slate-200 peer-checked:bg-accent-purple peer-checked:border-accent-purple rounded transition-all duration-300 flex items-center justify-center">
                          {formData.newsletter && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                      </label>
                      <span className="text-xs text-text-secondary leading-relaxed">
                        I want to receive class alerts, events, and resources from SparkCode Academy.
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-4 rounded-xl bg-accent-purple hover:brightness-95 text-white font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-[0_4px_12px_rgba(99,102,241,0.2)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.4)] cursor-pointer"
                    >
                      Submit Application
                    </button>
                  </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
