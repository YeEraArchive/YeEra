import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Artworks from "./pages/Artworks";

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-hidden">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/artworks" element={<Artworks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
