import React from "react";

interface ItemCardProps {
  thumb: React.ReactNode;
  title: string;
  onClick: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ thumb, title, onClick }) => (
  <button
    className="bg-white rounded-xl shadow-md border border-neutral-200 p-0 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer focus:outline-none w-full max-w-xs mx-auto group"
    onClick={onClick}
    type="button"
    style={{ minHeight: 0 }}
  >
    <div
      className="w-full aspect-square flex items-center justify-center bg-neutral-100 rounded-t-xl overflow-hidden"
      style={{ minHeight: 0, background: "#f3f3f3" }}
    >
      {thumb}
    </div>
    <div className="w-full px-4 py-3 flex flex-col items-center">
      <div className="text-base font-semibold text-center text-neutral-900 line-clamp-2 mb-1 h-12 flex items-center justify-center">
        {title}
      </div>
    </div>
  </button>
);

export default ItemCard;
