import React, { useEffect, useRef } from "react";

interface ItemModalProps {
  thumb: React.ReactNode;
  title: string;
  artType: string;
  projectType: string;
  use: string;
  description: string;
  onClose: () => void;
}

const ItemModal: React.FC<ItemModalProps> = ({
  thumb,
  title,
  artType,
  projectType,
  use,
  description,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-2 transition-opacity duration-300 animate-fadein"
      onMouseDown={handleBackdropClick}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div
        ref={modalRef}
        className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-xs md:max-w-xl p-0 relative mx-4 flex flex-col items-center overflow-hidden border border-white/30"
        onMouseDown={(e) => e.stopPropagation()}
        style={{ maxHeight: "90vh" }}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-gray-500 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300 z-10 border border-white/30 hover:scale-110"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div
          className="w-full aspect-square flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-3xl overflow-hidden"
          style={{ minHeight: 0 }}
        >
          {thumb}
        </div>
        <div className="w-full px-8 py-8 flex flex-col items-center">
          <div className="text-2xl font-bold text-center text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {title}
          </div>
          <div className="flex gap-3 mb-6 flex-wrap justify-center">
            <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full border border-blue-200/50 shadow-sm">
              {artType}
            </span>
            <span className="inline-block bg-gradient-to-r from-green-100 to-green-50 text-green-700 text-xs font-semibold px-4 py-2 rounded-full border border-green-200/50 shadow-sm">
              {projectType}
            </span>
            <span className="inline-block bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 text-xs font-semibold px-4 py-2 rounded-full border border-purple-200/50 shadow-sm">
              {use}
            </span>
          </div>
          <div
            className="bg-gradient-to-br from-gray-50/80 to-gray-100/60 backdrop-blur-sm rounded-2xl p-6 shadow-inner text-base text-gray-700 whitespace-pre-line leading-relaxed border border-gray-200/50 w-full overflow-y-auto"
            style={{ maxHeight: "12rem" }}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
