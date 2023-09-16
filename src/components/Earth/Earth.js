import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import earthTexture from "../../assets/earth-texture.jpg";

import bumpMap from "../../assets/bump-map.jpg";

import { TextureLoader } from "three";

import { OrbitControls } from "@react-three/drei";

const Earth = () => {
  const earthRef = useRef();

  const texture = new TextureLoader().load(earthTexture);

  const bumpMapTexture = new TextureLoader().load(bumpMap);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={earthRef}>
      {/* <meshStandardMaterial
        map={texture}
        bumpMap={bumpMapTexture}
        bumpScale={0.05}
      /> */}
      <meshBasicMaterial map={texture} />
      <sphereGeometry args={[1, 128, 128]} />
      <OrbitControls
        minDistance={2}
        maxDistance={6}
        enableZoom={true}
        dampingFactor={0.1}
      />
    </mesh>
  );
};

export default Earth;
