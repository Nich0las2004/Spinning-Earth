import Scene from "./components/Scene/Scene";

const App = () => {
  return (
    <div
      id="canvas-container"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Scene />
    </div>
  );
};

export default App;
