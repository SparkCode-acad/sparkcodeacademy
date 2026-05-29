import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Programs', href: 'programs' },
    { name: 'Process', href: 'process' },
    { name: 'Showcase', href: 'showcase' },
    { name: 'Pricing', href: 'pricing' },
    { name: 'FAQ', href: 'faq' },
    { name: 'Contact', href: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavClick(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, 'home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="relative w-8 h-8 flex items-center justify-center bg-accent-purple/10 rounded-lg border border-accent-purple/30 group-hover:border-accent-purple transition-all duration-300">
            <span className="text-accent-purple font-bold text-xl select-none group-hover:scale-110 transition-transform duration-300">⚡</span>
          </div>
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-text-primary group-hover:text-accent-purple transition-colors duration-300">
            SPARKCODE ACADEMY
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => handleClick(e, link.href)}
              className="font-sans font-semibold text-sm text-text-secondary hover:text-accent-purple transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-purple transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, 'contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-accent-purple hover:brightness-95 text-white font-sans font-bold text-sm transition-all duration-300 shadow-[0_4px_12px_rgba(99,102,241,0.2)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Apply Now
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-lg"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => handleClick(e, link.href)}
                  className="font-display font-bold text-lg text-text-secondary hover:text-accent-purple transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleClick(e, 'contact')}
                className="inline-flex items-center justify-center gap-1.5 w-full py-3.5 rounded-full bg-accent-purple hover:brightness-95 text-white font-sans font-bold text-base transition-all duration-300 shadow-[0_4px_12px_rgba(99,102,241,0.2)] cursor-pointer"
              >
                Apply Now
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
