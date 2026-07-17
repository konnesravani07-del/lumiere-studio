import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Sparkles } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh, Group } from "three";

function Camera3D() {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.3;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
  });

  return (
    <group ref={group} scale={1.1}>
      {/* Body */}
      <mesh castShadow>
        <boxGeometry args={[2.2, 1.4, 1.2]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.25} />
      </mesh>
      {/* Top viewfinder bump */}
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[0.8, 0.35, 0.9]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.3} />
      </mesh>
      {/* Grip */}
      <mesh position={[-0.9, -0.05, 0]}>
        <boxGeometry args={[0.5, 1.3, 1.2]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.85} roughness={0.4} />
      </mesh>
      {/* Lens barrel */}
      <mesh position={[0.2, 0, 0.9]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.75, 0.75, 1.2, 48]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.95} roughness={0.15} />
      </mesh>
      {/* Lens ring gold */}
      <mesh position={[0.2, 0, 1.35]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.78, 0.78, 0.15, 48]} />
        <meshStandardMaterial color="#d4a24c" metalness={1} roughness={0.15} emissive="#8a5a10" emissiveIntensity={0.3} />
      </mesh>
      {/* Front glass */}
      <mesh position={[0.2, 0, 1.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.05, 48]} />
        <meshStandardMaterial color="#0a1a2a" metalness={0.9} roughness={0.05} emissive="#1e3a8a" emissiveIntensity={0.5} />
      </mesh>
      {/* Shutter button */}
      <mesh position={[-0.6, 0.75, 0.3]}>
        <cylinderGeometry args={[0.12, 0.12, 0.1, 32]} />
        <meshStandardMaterial color="#d4a24c" metalness={1} roughness={0.2} emissive="#8a5a10" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

function OrbitingLens() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * 0.6;
    ref.current.position.x = Math.cos(t) * 3.5;
    ref.current.position.z = Math.sin(t) * 3.5;
    ref.current.position.y = Math.sin(t * 2) * 0.5;
    ref.current.rotation.y = t * 2;
  });
  return (
    <mesh ref={ref} scale={0.5}>
      <cylinderGeometry args={[0.6, 0.5, 1, 32]} />
      <meshStandardMaterial color="#d4a24c" metalness={1} roughness={0.2} emissive="#8a5a10" emissiveIntensity={0.4} />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0.5, 6], fov: 45 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.25} />
        <spotLight position={[6, 8, 6]} intensity={2.4} angle={0.4} penumbra={0.5} color="#f4c470" castShadow />
        <spotLight position={[-6, 4, 4]} intensity={1.2} angle={0.6} penumbra={0.7} color="#4dd0e1" />
        <pointLight position={[0, -4, 3]} intensity={0.6} color="#d4a24c" />

        <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
          <Camera3D />
        </Float>

        <OrbitingLens />

        <Sparkles count={80} scale={12} size={3} speed={0.4} color="#d4a24c" opacity={0.7} />
        <Sparkles count={40} scale={10} size={2} speed={0.3} color="#4dd0e1" opacity={0.5} />

        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
