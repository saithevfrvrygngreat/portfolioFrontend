import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleScene = ({ isDarkMode }) => {
  const mainParticlesCount = isDarkMode ? 300 : 1000;
  const secondaryParticlesCount = isDarkMode ? 0 : 500;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(mainParticlesCount * 3);
    for (let i = 0; i < mainParticlesCount; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 20;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [mainParticlesCount]);

  const secondaryPositions = useMemo(() => {
    if (isDarkMode) return new Float32Array(0);
    const pos = new Float32Array(secondaryParticlesCount * 3);
    for (let i = 0; i < secondaryParticlesCount; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 15;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [secondaryParticlesCount, isDarkMode]);

  const pointsRef = useRef();
  const secondaryPointsRef = useRef();
  const dustRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.04;
    pointsRef.current.rotation.x = t * 0.02;
    if (secondaryPointsRef.current) {
        secondaryPointsRef.current.rotation.y = -t * 0.03;
        secondaryPointsRef.current.rotation.z = t * 0.01;
    }
    if (dustRef.current) {
        dustRef.current.rotation.y = -t * 0.01;
        dustRef.current.position.y = Math.sin(t * 0.3) * 0.3;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isDarkMode ? 0.06 : 0.02}
          color={isDarkMode ? '#DAA520' : '#C08552'}
          transparent
          opacity={isDarkMode ? 0.6 : 0.5}
          sizeAttenuation
        />
      </points>
      {!isDarkMode && (
        <points ref={secondaryPointsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={secondaryPositions.length / 3}
              array={secondaryPositions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.04}
            color="#DAA520"
            transparent
            opacity={0.3}
            sizeAttenuation
          />
        </points>
      )}
      {isDarkMode ? (
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      ) : (
        <group ref={dustRef}>
            <Stars radius={40} depth={40} count={1200} factor={1.5} saturation={0} fade speed={0.4} />
        </group>
      )}
    </group>
  );
};

const ThreeBackground = ({ isDarkMode }) => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ParticleScene isDarkMode={isDarkMode} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
