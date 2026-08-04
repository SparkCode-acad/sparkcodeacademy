import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Globe, Users } from 'lucide-react';

import ZaydPicture from "../assets/ZaydPicture.png"
import JafarPicture from "../assets/JafarPicture.jpeg"
import MuhsinPicture from "../assets/MuhsinPicture.jpeg"

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  accentClass: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
}

export const Team: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "Jafar",
      role: "FOUNDER",
      bio: "Graphic designer and social media manager steering SparkCode's visual direction and engagement strategy.",
      avatar: JafarPicture,
      accentClass: "border-t-accent-purple shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)]",
      socials: {}
    },
    {
      name: "Zayd Tahir",
      role: "CO-FOUNDER",
      bio: "Fullstack developer with 2 years of experience designing and building scalable web products and robust architectures.",
      avatar: ZaydPicture,
      accentClass: "border-t-accent-orange shadow-sm hover:shadow-[0_20px_40px_rgba(249,115,22,0.08)]",
      socials: {
        linkedin: "https://www.linkedin.com/in/zayd-tahir-1376073a8/",
        portfolio: "https://zayd-portfolio.vercel.app/"
      }
    },
    {
      name: "Muhsin",
      role: "CO-FOUNDER",
      bio: "Product designer and a videographer shaping immersive digital user interfaces and high-quality visual media production.",
      avatar: MuhsinPicture,
      accentClass: "border-t-pink-500 shadow-sm hover:shadow-[0_20px_40px_rgba(236,72,153,0.08)]",
      socials: {}
    }
  ];

  return (
    <section id="team" className="py-24 bg-white relative z-10 border-t border-slate-100 font-sans overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20"
          >
            <Users className="w-4 h-4 text-accent-purple" />
            <span className="text-xs font-bold tracking-wider text-accent-purple uppercase">
              MEET OUR TEAM
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight"
          >
            The minds behind SparkCode.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm text-text-secondary max-w-lg mx-auto"
          >
            Passionate creators and engineers building the next generation of Nigerian digital talent.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-slate-100 hover:border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left relative h-full"
            >
              <div>
                {/* Large Image Frame */}
                <div className="w-full aspect-[4/5] overflow-hidden bg-slate-50 relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=6366f1&color=fff&size=512`;
                    }}
                  />
                  {/* Subtle color highlight indicator strip */}
                  <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${member.accentClass.includes('purple') ? 'from-accent-purple to-indigo-500' :
                    member.accentClass.includes('orange') ? 'from-accent-orange to-amber-500' :
                      'from-pink-500 to-rose-400'
                    }`} />
                </div>

                {/* Member Top Bio */}
                <div className="p-8">
                  <span className="text-[10px] font-bold tracking-wider text-accent-purple uppercase block mb-1">
                    {member.role}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-text-primary mb-3">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="px-8 pb-8 flex items-center gap-4 pt-4 border-t border-slate-50 w-full justify-start min-h-[45px] mt-auto">
                {Object.keys(member.socials).length === 0 ? (
                  <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase">SparkCode Team</span>
                ) : (
                  <>
                    {member.socials.portfolio && (
                      <a
                        href={member.socials.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-accent-purple transition-colors p-1"
                        title="Portfolio"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-accent-purple transition-colors p-1"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-accent-purple transition-colors p-1"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-accent-purple transition-colors p-1"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
