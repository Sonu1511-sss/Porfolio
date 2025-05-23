// StarRain.jsx
import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function StarRain({ count = 150 }) {
  const groupRef = useRef();
  const stars = useRef([]);

  useEffect(() => {
    stars.current = Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 20,
      y: Math.random() * 15,
      z: (Math.random() - 0.5) * 10,
      speed: 0.02 + Math.random() * 0.03,
    }));
  }, [count]);

  useFrame(() => {
    stars.current.forEach((star) => {
      star.y -= star.speed;
      if (star.y < -5) star.y = 10;
    });

    groupRef.current.children.forEach((mesh, i) => {
      const s = stars.current[i];
      mesh.position.set(s.x, s.y, s.z);
    });
  });

  return (
    <group ref={groupRef}>
      {stars.current.map((star, i) => (
        <mesh key={i} position={[star.x, star.y, star.z]}>
          <sphereGeometry args={[0.05, 6, 6]} />

          <meshStandardMaterial
            color="white"
            emissive="white"
            emissiveIntensity={1}
          />
        </mesh>
      ))}
    </group>
  );
}
