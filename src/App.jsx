import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  console.log('render');
  const [name, setName] = useState();

  const updateState = () => {
    setName("reza");
    setName("ahmad");
    setName("akbar");
    setName("hossein");
    setName("ali");
  };
  useEffect(() => {
    setName("hassan");
  }, []);
  return (
    <>
      <span>{name}</span>
      <hr/>
      <button onClick={updateState}>update state</button>
    </>
  );
}

export default App;
