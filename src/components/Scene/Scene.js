import { Canvas } from "@react-three/fiber";
import classes from "./Scene.module.css";

import { Stars } from "@react-three/drei";

import Earth from "../Earth/Earth";
import { Suspense } from "react";

const Scene = () => {
  return (
    <Canvas className={classes.canvas}>
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
      <Stars />
    </Canvas>
  );
};

export default Scene;
