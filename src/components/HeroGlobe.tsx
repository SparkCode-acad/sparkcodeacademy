import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Sub-component to manage rotating components inside Canvas
const GlobeGroup: React.FC = () => {
  const globeRef = useRef<THREE.Group>(null);
  
  // Rotate the globe group on every frame
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  const r = 2.0;

  // Generate vertices on a sphere for network nodes
  const nodes = useMemo(() => {
    const coords: [number, number, number][] = [];
    const latSegments = 8;
    const lonSegments = 12;
    for (let i = 1; i < latSegments; i++) {
      const phi = (i / latSegments) * Math.PI;
      for (let j = 0; j < lonSegments; j++) {
        const theta = (j / lonSegments) * 2 * Math.PI;
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        coords.push([x, y, z]);
      }
    }
    return coords;
  }, [r]);

  // Create connections (lines) between nodes for the network lines
  const lines = useMemo(() => {
    const paths: THREE.Vector3[][] = [];
    const latSegments = 8;
    const lonSegments = 12;
    
    // Connect along longitudes
    for (let j = 0; j < lonSegments; j++) {
      const path: THREE.Vector3[] = [];
      for (let i = 0; i <= latSegments; i++) {
        const phi = (i / latSegments) * Math.PI;
        const theta = (j / lonSegments) * 2 * Math.PI;
        path.push(new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        ));
      }
      paths.push(path);
    }

    // Connect along latitudes
    for (let i = 1; i < latSegments; i++) {
      const path: THREE.Vector3[] = [];
      for (let j = 0; j <= lonSegments; j++) {
        const phi = (i / latSegments) * Math.PI;
        const theta = (j / lonSegments) * 2 * Math.PI;
        path.push(new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        ));
      }
      paths.push(path);
    }
    return paths;
  }, [r]);

  return (
    <group ref={globeRef}>
      {/* Base Globe */}
      <mesh>
        <sphereGeometry args={[r, 32, 32]} />
        <meshStandardMaterial
          color="#0d0d0d"
          roughness={0.4}
          metalness={0.9}
          bumpScale={0.05}
        />
      </mesh>

      {/* Network Lines */}
      {lines.map((path, idx) => {
        const points = new THREE.BufferGeometry().setFromPoints(path);
        return (
          <lineSegments key={`line-${idx}`} geometry={points}>
            <lineBasicMaterial color="#f97316" opacity={0.3} transparent />
          </lineSegments>
        );
      })}

      {/* Network Nodes */}
      {nodes.map((pos, idx) => (
        <mesh key={`node-${idx}`} position={pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#f97316" />
        </mesh>
      ))}

      {/* Glowing Ring Platform Underneath */}
      <mesh position={[0, -2.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.05, 8, 64]} />
        <meshBasicMaterial color="#f97316" transparent opacity={0.6} />
      </mesh>

      <mesh position={[0, -2.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.15, 2, 64]} />
        <meshBasicMaterial color="#f97316" transparent opacity={0.15} />
      </mesh>
    </group>
  );
};

export const HeroGlobe: React.FC = () => {
  return (
    <div className="w-full h-[400px] md:h-[550px] relative select-none">
      {/* Background orange glow spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-orange/15 rounded-full blur-[100px] pointer-events-none" />
      
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[0, 5, 0]} intensity={1.0} color="#f97316" />
        
        {/* Globe System */}
        <GlobeGroup />
        
        {/* Stars / Particles */}
        <Stars radius={40} depth={20} count={400} factor={4} saturation={0.5} fade speed={1.2} />
        
        {/* Orbit Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.0}
        />
      </Canvas>
    </div>
  );
};
