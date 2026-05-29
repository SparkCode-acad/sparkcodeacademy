import React from 'react';
import { Twitter, Linkedin, Instagram, Youtube, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const socialIcons = [
    { icon: <Twitter className="w-4 h-4" />, href: "https://x.com/sparkcode" },
    { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/company/sparkcode" },
    { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com/sparkcode" },
    { icon: <Youtube className="w-4 h-4" />, href: "https://youtube.com/sparkcode" },
  ];

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavClick('home');
  };

  const handleNav = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    onNavClick(sectionId);
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-20 pb-10 relative z-10 font-sans text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-200/60">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a
              href="#home"
              onClick={(e) => handleNav(e, 'home')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-accent-purple/10 rounded-lg border border-accent-purple/30 group-hover:border-accent-purple transition-all duration-300">
                <span className="text-accent-purple font-bold text-xl select-none">⚡</span>
              </div>
              <span className="font-display font-bold text-lg md:text-xl tracking-tight text-text-primary group-hover:text-accent-purple transition-colors">
                SPARKCODE ACADEMY
              </span>
            </a>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              SparkCode Academy is Lagos' premier design and code school building the next generation of digital creators.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-slate-200 text-text-secondary hover:text-accent-purple hover:border-accent-purple transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold font-sans tracking-[0.2em] text-text-primary uppercase mb-6">
              NAVIGATION
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#home" onClick={(e) => handleNav(e, 'home')} className="text-sm text-text-secondary hover:text-accent-purple transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleNav(e, 'programs')} className="text-sm text-text-secondary hover:text-accent-purple transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleNav(e, 'process')} className="text-sm text-text-secondary hover:text-accent-purple transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#showcase" onClick={(e) => handleNav(e, 'showcase')} className="text-sm text-text-secondary hover:text-accent-purple transition-colors">
                  Showcase
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleNav(e, 'pricing')} className="text-sm text-text-secondary hover:text-accent-purple transition-colors">
                  Tuition
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNav(e, 'faq')} className="text-sm text-text-secondary hover:text-accent-purple transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold font-sans tracking-[0.2em] text-text-primary uppercase mb-6">
              PROGRAMS
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#programs" onClick={(e) => handleNav(e, 'programs')} className="text-sm text-text-secondary hover:text-accent-purple transition-colors">
                  Frontend Development
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleNav(e, 'programs')} className="text-sm text-text-secondary hover:text-accent-purple transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleNav(e, 'programs')} className="text-sm text-text-secondary hover:text-accent-purple transition-colors">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold font-sans tracking-[0.2em] text-text-primary uppercase mb-6">
              RESOURCES
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#faq" onClick={(e) => handleNav(e, 'faq')} className="text-sm text-text-secondary hover:text-accent-purple transition-colors">
                  Student Help
                </a>
              </li>
              <li>
                <a href="#showcase" onClick={(e) => handleNav(e, 'showcase')} className="text-sm text-text-secondary hover:text-accent-purple transition-colors">
                  Design Cases
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNav(e, 'faq')} className="text-sm text-text-secondary hover:text-accent-purple transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="text-sm text-text-secondary hover:text-accent-purple transition-colors">
                  Apply Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <h3 className="text-xs font-bold font-sans tracking-[0.2em] text-text-primary uppercase mb-6">
                CONTACT
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <Mail className="w-4 h-4 text-accent-purple mt-0.5 flex-shrink-0" />
                  <a href="mailto:hello@sparkcode.dev" className="hover:text-accent-purple transition-colors break-all">
                    hello@sparkcode.dev
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <Phone className="w-4 h-4 text-accent-purple mt-0.5 flex-shrink-0" />
                  <a href="tel:+2349012345678" className="hover:text-accent-purple transition-colors">
                    +234 901 234 5678
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
                  <MapPin className="w-4 h-4 text-accent-purple mt-0.5 flex-shrink-0" />
                  <span>
                    1 Code Street, <br />Yaba, Lagos, <br />Nigeria
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
          <span className="text-xs text-text-secondary text-center md:text-left">
            © 2026 SparkCode Academy. All rights reserved.
          </span>

          <button
            onClick={handleScrollTop}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-text-secondary hover:text-accent-purple hover:border-accent-purple transition-all duration-300 shadow-sm group cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
