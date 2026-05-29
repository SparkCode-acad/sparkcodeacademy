import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { ArrowUpRight, PenTool, LayoutTemplate, MousePointer } from 'lucide-react';
import * as THREE from 'three';

interface HeroProps {
  onNavClick: (sectionId: string) => void;
}

// 3D Glassmorphic Floating shapes for the Canvas background
const Floating3DShapes: React.FC = () => {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (meshRef1.current) {
      meshRef1.current.rotation.x = elapsed * 0.3;
      meshRef1.current.rotation.y = elapsed * 0.2;
      meshRef1.current.position.y = Math.sin(elapsed * 0.5) * 0.3 + 1.2;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.y = elapsed * 0.4;
      meshRef2.current.rotation.z = elapsed * 0.2;
      meshRef2.current.position.y = Math.cos(elapsed * 0.6) * 0.4 - 1.0;
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.x = elapsed * 0.2;
      meshRef3.current.rotation.z = elapsed * 0.5;
      meshRef3.current.position.x = Math.sin(elapsed * 0.4) * 0.5 + 1.5;
    }
  });

  return (
    <group>
      {/* Torus */}
      <mesh ref={meshRef1} position={[-1.5, 1.2, 0]}>
        <torusGeometry args={[0.6, 0.2, 16, 100]} />
        <meshStandardMaterial
          color="#6366f1"
          roughness={0.2}
          metalness={0.15}
        />
      </mesh>

      {/* Cone */}
      <mesh ref={meshRef2} position={[1.8, -1.0, 0]}>
        <coneGeometry args={[0.5, 1.0, 32]} />
        <meshStandardMaterial
          color="#f97316"
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>

      {/* Sphere */}
      <mesh ref={meshRef3} position={[1.5, 1.0, -1.0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#ec4899"
          roughness={0.2}
          metalness={0.2}
        />
      </mesh>
    </group>
  );
};

export const Hero: React.FC<HeroProps> = ({ onNavClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-white bg-grid-pattern font-sans"
    >
      {/* Dynamic colorful gradients in background */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-left flex flex-col justify-center"
        >

          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-5xl sm:text-6xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-6 text-text-primary"
          >
            Launch Your Career in
            <span className="text-accent-purple">
              &nbsp; Design & Code
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-text-secondary mb-10 max-w-xl leading-relaxed"
          >
            Master the most in-demand digital crafts at SparkCode Academy. Real-world project training, mentored by industry experts, built to transition you into tech.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavClick('contact');
              }}
              className="inline-flex items-center justify-center gap-1.5 px-8 py-4 rounded-full bg-accent-purple hover:brightness-95 text-white font-bold text-base transition-all duration-300 shadow-[0_4px_16px_rgba(99,102,241,0.25)] hover:shadow-[0_4px_24px_rgba(99,102,241,0.45)] hover:-translate-y-0.5 cursor-pointer"
            >
              Apply to Academy
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="#programs"
              onClick={(e) => {
                e.preventDefault();
                onNavClick('programs');
              }}
              className="inline-flex items-center justify-center gap-1.5 px-8 py-4 rounded-full border border-slate-200 hover:border-slate-300 bg-white text-text-primary font-bold text-base transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Programs
            </a>
          </motion.div>

          {/* Quick stats tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-text-secondary border-t border-slate-100 pt-8"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-bold">100% Practical</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span className="font-bold">Expert Mentors</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="font-bold">Lagos Office & Remote</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Interactive Workspace & 3D Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="lg:col-span-5 relative w-full h-[450px] lg:h-[550px] flex items-center justify-center"
        >
          {/* Three.js canvas in background */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[2, 3, 4]} intensity={1.5} />
              <Floating3DShapes />
            </Canvas>
          </div>

          {/* Layered Workstation UI Mockup */}
          <div className="relative w-full max-w-[400px] aspect-square z-10">
            {/* UI/UX Design Workbench Panel */}
            <motion.div
              initial={{ x: -20, y: -20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute top-4 left-0 w-[240px] bg-white border border-slate-100 rounded-2xl shadow-xl p-4 text-left"
            >
              <div className="flex items-center gap-2 mb-3">
                <LayoutTemplate className="w-4 h-4 text-accent-purple" />
                <span className="text-xs font-bold font-display text-text-primary uppercase tracking-wider">UI/UX Canvas</span>
              </div>
              <div className="h-28 bg-slate-50 border border-dashed border-slate-200 rounded-xl relative overflow-hidden flex flex-col justify-center items-center gap-2 p-4">
                <div className="w-full bg-white border border-slate-100 rounded-lg p-2 flex items-center gap-2 shadow-sm">
                  <div className="w-4 h-4 rounded-full bg-accent-purple/20" />
                  <div className="h-2 w-16 bg-slate-200 rounded" />
                </div>
                <div className="w-full bg-white border border-slate-100 rounded-lg p-2 flex items-center gap-2 shadow-sm opacity-60">
                  <div className="w-4 h-4 rounded-full bg-slate-100" />
                  <div className="h-2 w-20 bg-slate-100 rounded" />
                </div>
                <motion.div
                  animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute bottom-4 right-6 text-accent-purple"
                >
                  <MousePointer className="w-4 h-4 fill-current" />
                </motion.div>
              </div>
            </motion.div>

            {/* Frontend Code Editor Panel */}
            <motion.div
              initial={{ x: 20, y: 40, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-4 right-0 w-[260px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 text-left font-mono"
            >
              <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <span className="text-[10px] text-slate-500">App.tsx</span>
              </div>
              <div className="text-[11px] leading-relaxed text-slate-300">
                <p><span className="text-pink-400">const</span> <span className="text-blue-400">Frontend</span> = () =&gt; &#123;</p>
                <p className="pl-3"><span className="text-pink-400">return</span> (</p>
                <p className="pl-6 text-emerald-400">&lt;<span className="text-blue-400">SparkCode</span></p>
                <p className="pl-9 text-yellow-400">mode=<span className="text-slate-200">"expert"</span></p>
                <p className="pl-6 text-emerald-400">/&gt;</p>
                <p className="pl-3">);</p>
                <p>&#125;;</p>
              </div>
            </motion.div>

            {/* Graphic Design Color Palette Swatch */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="absolute bottom-16 left-4 w-[160px] bg-white border border-slate-100 rounded-2xl shadow-lg p-3 text-left"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <PenTool className="w-3.5 h-3.5 text-pink-500" />
                <span className="text-[10px] font-bold text-text-primary uppercase tracking-wider">Palette</span>
              </div>
              <div className="flex justify-between items-center gap-1">
                <div className="w-8 h-8 rounded-lg bg-[#6366f1] shadow-sm" />
                <div className="w-8 h-8 rounded-lg bg-[#f97316] shadow-sm" />
                <div className="w-8 h-8 rounded-lg bg-[#ec4899] shadow-sm" />
                <div className="w-8 h-8 rounded-lg bg-[#10b981] shadow-sm" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
