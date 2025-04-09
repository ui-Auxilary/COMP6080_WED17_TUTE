import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ComponentOne from "./components/ComponentOne/ComponentOne";
import ComponentTwo from "./components/ComponentTwo/ComponentTwo";
import CSSModule from "./components/CSSModule/CSSModule";
import { TailwindComponent } from "./components/TailwindComponent/TailwindComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ComponentOne />
      <ComponentTwo />

      <TailwindComponent />
    </>
  );
}

export default App;
