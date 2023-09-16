import { Canvas } from "@react-three/fiber";
import classes from "./Scene.module.css";

import { Stars } from "@react-three/drei";

import Earth from "../Earth/Earth";

const Scene = () => {
  return (
    <Canvas className={classes.canvas}>
      <Earth />
      <Stars />
    </Canvas>
  );
};

export default Scene;
