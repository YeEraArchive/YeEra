import React from "react";

interface ItemCardProps {
  thumb: React.ReactNode;
  title: string;
  onClick: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ thumb, title, onClick }) => (
  <button
    className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 p-0 flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer focus:outline-none w-full max-w-xs mx-auto group"
    onClick={onClick}
    type="button"
    style={{ minHeight: 0 }}
  >
    <div
      className="w-full aspect-square flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-2xl overflow-hidden"
      style={{ minHeight: 0 }}
    >
      {thumb}
    </div>
    <div className="w-full px-6 py-4 flex flex-col items-center">
      <div className="text-base font-semibold text-center text-gray-800 line-clamp-2 mb-1 h-12 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
        {title}
      </div>
    </div>
  </button>
);

export default ItemCard;
