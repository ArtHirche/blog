import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/theme.css";
import Welcome from "./components/home/Welcome/Welcome";
import About from "./components/about/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
