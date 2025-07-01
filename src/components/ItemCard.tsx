import React from "react";

interface ItemCardProps {
  img: string;
  title: string;
  onClick: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ img, title, onClick }) => (
  <button
    className="bg-white rounded-lg shadow border p-4 flex flex-col items-center hover:shadow-lg transition cursor-pointer focus:outline-none w-full max-w-xs mx-auto"
    onClick={onClick}
    type="button"
    style={{ minHeight: 0 }}
  >
    <div
      className="w-full flex-1 flex items-center justify-center mb-3"
      style={{ minHeight: 0 }}
    >
      <img
        src={
          img.startsWith(import.meta.env.BASE_URL)
            ? img
            : `${import.meta.env.BASE_URL}${img.replace(/^\//, "")}`
        }
        alt={title}
        className="w-full max-h-60 object-contain rounded"
        style={{ aspectRatio: "1/1", background: "#f3f3f3" }}
      />
    </div>
    <div className="text-lg font-semibold text-center">{title}</div>
  </button>
);

export default ItemCard;
