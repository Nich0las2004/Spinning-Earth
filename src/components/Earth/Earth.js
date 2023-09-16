import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { OrbitControls } from "@react-three/drei";

const Earth = () => {
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={earthRef}>
      <meshBasicMaterial wireframe={true} />
      <sphereGeometry />
      <OrbitControls
        minDistance={3}
        maxDistance={8}
        enableZoom={true}
        dampingFactor={0.1}
      />
    </mesh>
  );
};

export default Earth;
