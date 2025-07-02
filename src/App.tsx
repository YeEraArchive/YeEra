import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Artworks from "./pages/Artworks";

function App() {
  return (
    <Router>
      <div
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: "#f8f9fa", color: "#232326" }}
      >
        <Header />
        <main className="flex-1 pt-10 pb-20">
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Navigate to="/artworks" replace />} />
              <Route path="/artworks" element={<Artworks />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
