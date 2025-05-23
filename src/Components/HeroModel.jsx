// HeroModel.jsx
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import StarRain from "./StarRain";

function RotatingCube() {
  const meshRef = useRef();

  useEffect(() => {
    gsap.to(meshRef.current.scale, {
      x: 1.2,
      y: 1.2,
      z: 1.2,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#14B8A6" />
    </mesh>
  );
}

export default function ModelCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 5]} />
      <StarRain count={200} />
      <RotatingCube />
    </Canvas>
  );
}
