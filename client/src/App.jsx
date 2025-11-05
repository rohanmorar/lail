import { useEffect, useState } from "react";
import "./App.css";
import Heading from "./components/Heading.jsx";
import Body from "./components/Body.jsx";

function App() {
  const layout = "container mx-auto px-32";
  const [style, setStyle] = useState("flex justify-between items-center");

  return (
    <>
      <Heading
        styling={`
          ${layout} ${style}
        `}
      ></Heading>
      <Body styling={layout}></Body>
    </>
  );
}

export default App;
