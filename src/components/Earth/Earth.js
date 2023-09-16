import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

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
    </mesh>
  );
};

export default Earth;
