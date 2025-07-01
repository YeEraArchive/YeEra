import React, { useEffect, useRef } from "react";

interface ItemModalProps {
  img: string;
  title: string;
  artType: string;
  projectType: string;
  use: string;
  description: string;
  onClose: () => void;
}

const ItemModal: React.FC<ItemModalProps> = ({
  img,
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-2 transition-opacity duration-300 animate-fadein"
      onMouseDown={handleBackdropClick}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-xl w-full max-w-xs md:max-w-xl p-0 relative mx-4 flex flex-col items-center overflow-hidden"
        onMouseDown={(e) => e.stopPropagation()}
        style={{ maxHeight: "90vh" }}
      >
        <button
          className="absolute top-3 right-3 text-2xl text-neutral-500 bg-white/80 hover:bg-neutral-200 rounded-full w-9 h-9 flex items-center justify-center shadow transition z-10 border border-neutral-200"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div
          className="w-full flex items-center justify-center mb-3 bg-neutral-100"
          style={{ aspectRatio: "1/1", minHeight: 0, maxHeight: "15rem" }}
        >
          <img
            src={
              img.startsWith(import.meta.env.BASE_URL)
                ? img
                : `${import.meta.env.BASE_URL}${img.replace(/^\//, "")}`
            }
            alt={title}
            className="w-full max-h-60 object-contain rounded-t-xl"
            style={{ aspectRatio: "1/1", background: "#f3f3f3" }}
          />
        </div>
        <div className="px-6 pb-6 w-full flex flex-col items-center">
          <div className="text-lg font-semibold text-center text-neutral-900 mb-2">
            {title}
          </div>
          <div className="flex gap-2 mb-4 flex-wrap justify-center">
            <span className="inline-block bg-neutral-200 text-neutral-700 text-xs font-semibold px-3 py-1 rounded-full border border-neutral-300">
              {artType}
            </span>
            <span className="inline-block bg-neutral-200 text-neutral-700 text-xs font-semibold px-3 py-1 rounded-full border border-neutral-300">
              {projectType}
            </span>
            <span className="inline-block bg-neutral-200 text-neutral-700 text-xs font-semibold px-3 py-1 rounded-full border border-neutral-300">
              {use}
            </span>
          </div>
          <div
            className="bg-neutral-50 rounded-lg p-4 shadow-inner text-base text-neutral-800 whitespace-pre-line leading-relaxed border border-neutral-200 w-full overflow-y-auto"
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
