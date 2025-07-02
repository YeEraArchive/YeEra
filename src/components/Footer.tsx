import React from "react";

const Footer: React.FC = () => (
  <footer
    className="bg-muted text-primary-foreground border-t w-full"
    style={{ height: "64px" }}
  >
    <div className="max-w-3xl mx-auto px-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm h-full">
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <span className="font-semibold tracking-widest">YeEra</span>
        <span className="text-primary-foreground/60 font-bold">|</span>
        <span className="hover:underline cursor-pointer relative group">
          Disclaimer
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-3 py-2 rounded bg-neutral-800 text-neutral-100 text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-pre-line text-center">
            This site is an unofficial fan project and has no commercial
            purpose.
          </span>
        </span>
        <span className="text-primary-foreground/60 font-bold">|</span>
        <span className="hover:underline cursor-pointer relative group">
          Team
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-3 py-2 rounded bg-neutral-800 text-neutral-100 text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-pre-line text-center">
            @ye_era_archive
          </span>
        </span>
        <span className="text-primary-foreground/60 font-bold">|</span>
        <a
          href="https://www.instagram.com/ye_era_archive/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition ml-2"
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
            className="text-primary-foreground"
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
