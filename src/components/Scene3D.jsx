import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef();

  const timeRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta;
    if (meshRef.current) {
      meshRef.current.rotation.x = timeRef.current * 0.15;
      meshRef.current.rotation.y = timeRef.current * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1.8, 128, 128]}>
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function ParticleRing() {
  const pointsRef = useRef();
  const count = 300;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.8 + (Math.random() - 0.5) * 0.3;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, []);

  const timeRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = timeRef.current * 0.1;
      pointsRef.current.rotation.x = Math.sin(timeRef.current * 0.3) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#a78bfa" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#a78bfa" />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#06b6d4" />
      <pointLight position={[0, 3, 0]} intensity={0.8} color="#f472b6" />
      <AnimatedSphere />
      <ParticleRing />
    </Canvas>
  );
}
