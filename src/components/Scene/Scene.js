import { Canvas } from "@react-three/fiber";
import classes from "./Scene.module.css";

import { Stars } from "@react-three/drei";

const Scene = () => {
  return (
    <Canvas className={classes.canvas}>
      <Stars />
    </Canvas>
  );
};

export default Scene;
