import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Programs } from './components/Programs';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-accent-purple selection:text-white overflow-hidden">
      {/* Subtle global gradient background spotlights */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[700px] h-[700px] bg-accent-orange/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Sticky Navbar */}
      <Navbar onNavClick={scrollToSection} />

      {/* Hero Section */}
      <Hero onNavClick={scrollToSection} />

      {/* Stats Bar */}
      <Stats />

      {/* Programs Section */}
      <Programs onNavClick={scrollToSection} />

      {/* Process Section */}
      <Process />

      {/* Featured Projects Showcase */}
      <Projects onNavClick={scrollToSection} />

      {/* Pricing / Tuition plans */}
      <Pricing onNavClick={scrollToSection} />

      {/* Testimonials */}
      <Testimonials />

      {/* Team Section */}
      <Team />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Contact Form Section */}
      <Contact />

      {/* CTA Banner */}
      <CTABanner onNavClick={scrollToSection} />

      {/* Footer */}
      <Footer onNavClick={scrollToSection} />
    </div>
  );
}

export default App;
