"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useEffect, useState, Component, ReactNode } from "react";
import * as THREE from "three";

class WebGLErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}

function Particles({ count = 150 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const [positions, speeds, offsets] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    const off = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      spd[i] = 0.002 + Math.random() * 0.003;
      off[i] = Math.random() * Math.PI * 2;
    }
    return [pos, spd, off];
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const pos = mesh.current.geometry.attributes.position
      .array as Float32Array;
    const t = clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += speeds[i];
      pos[i * 3] += Math.sin(t * 0.5 + offsets[i]) * 0.003;
      pos[i * 3 + 2] += Math.cos(t * 0.3 + offsets[i]) * 0.001;
      if (pos[i * 3 + 1] > 10) pos[i * 3 + 1] = -10;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#C9A84C"
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function ParticleCanvas({ count }: { count: number }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      gl={{ alpha: true }}
      style={{ background: "transparent" }}
    >
      <Particles count={count} />
    </Canvas>
  );
}

export default function ParticleField() {
  const [count, setCount] = useState(150);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) setCount(80);
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setSupported(false);
    } catch {
      setSupported(false);
    }
  }, []);

  if (!supported) return null;

  return (
    <div className="absolute inset-0 z-0" style={{ opacity: 0.4 }}>
      <WebGLErrorBoundary>
        <ParticleCanvas count={count} />
      </WebGLErrorBoundary>
    </div>
  );
}
