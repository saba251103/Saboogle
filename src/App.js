// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/About";
import Project from "./components/Project";
import Life from "./components/Life";
import Hire from "./components/hire";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/life" element={<Life />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>
    </Router>
  );
}

export default App;
