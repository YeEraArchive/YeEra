import React from "react";

const Footer: React.FC = () => (
  <footer
    className="bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md border-t border-white/30 shadow-lg w-full"
    style={{ height: "64px" }}
  >
    <div className="max-w-3xl mx-auto px-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm h-full">
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <span className="font-bold tracking-wider bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          YeEra
        </span>
        <span className="text-gray-400 font-bold">|</span>
        <span className="hover:underline cursor-pointer relative group text-gray-600 hover:text-gray-800 transition-colors duration-300">
          Disclaimer
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-800/95 to-gray-700/95 backdrop-blur-md text-white text-xs shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10 whitespace-pre-line text-center border border-white/20">
            This site is an unofficial fan project and has no commercial
            purpose.
          </span>
        </span>
        <span className="text-gray-400 font-bold">|</span>
        <span className="hover:underline cursor-pointer relative group text-gray-600 hover:text-gray-800 transition-colors duration-300">
          Team
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-800/95 to-gray-700/95 backdrop-blur-md text-white text-xs shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10 whitespace-pre-line text-center border border-white/20">
            @ye_era_archive
          </span>
        </span>
        <span className="text-gray-400 font-bold">|</span>
        <a
          href="https://www.instagram.com/ye_era_archive/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all duration-300 ml-2 text-gray-600 hover:text-gray-800"
          aria-label="Instagram"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
