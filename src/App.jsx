import { useState } from "react";
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Yellow from "./components/Yellow";
import Donotclick from "./components/Donotclick";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/yellow">Yellow</Link>
          <Link to="/doNot">Do Not Click Here</Link>

        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/yellow" element={<Yellow />} />
            <Route path="/doNot" element={<Donotclick />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
