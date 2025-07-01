import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TgfdPage from "./pages/TgfdPage";
import YeezusPage from "./pages/YeezusPage";
import Yeezus2Page from "./pages/Yeezus2Page";

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
              <Route path="/" element={<Navigate to="/tgfd" replace />} />
              <Route path="/tgfd" element={<TgfdPage />} />
              <Route path="/yeezus" element={<YeezusPage />} />
              <Route path="/yeezus2" element={<Yeezus2Page />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
