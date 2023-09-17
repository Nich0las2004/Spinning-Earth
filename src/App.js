import { useEffect, useState } from "react";
import Scene from "./components/Scene/Scene";
import Loading from "./components/Loading/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div
      id="canvas-container"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {isLoading ? <Loading /> : <Scene />}
    </div>
  );
};

export default App;
