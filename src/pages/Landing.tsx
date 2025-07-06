import React from "react";
import { useNavigate } from "react-router-dom";
import mainVideo from "/site-src/main.mp4";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleArtworkClick = () => {
    navigate("/artworks");
  };

  return (
    <div
      className="min-h-screen w-full overflow-hidden flex items-center justify-center relative select-none"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <video
        className="h-screen object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        style={{
          width: "auto",
          height: "100vh",
        }}
      >
        <source src={mainVideo} type="video/mp4" />
        브라우저가 비디오를 지원하지 않습니다.
      </video>

      <div className="absolute inset-0 flex items-start justify-center z-10 pt-16">
        <h1 className="text-white text-6xl md:text-8xl font-bold tracking-wider bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md px-12 py-6 rounded-3xl border border-white/20 shadow-2xl">
          Ye Era
        </h1>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={handleArtworkClick}
          className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md text-white px-10 py-4 rounded-full border border-white/30 hover:from-white/30 hover:to-white/20 transition-all duration-500 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105"
        >
          Artworks 보기
        </button>
      </div>
    </div>
  );
};

export default Landing;
