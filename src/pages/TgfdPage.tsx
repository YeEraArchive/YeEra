import React, { useState } from "react";
import { tgfdItems } from "../items/tgfd";
import { ArtItem } from "../items/artItems";
import ItemCard from "../components/ItemCard";
import ItemModal from "../components/ItemModal";

const TgfdPage: React.FC = () => {
  const [selected, setSelected] = useState<ArtItem | null>(null);
  return (
    <div className="mx-4 md:mx-8">
      <h2 className="text-2xl font-light tracking-tight text-left transition-all duration-300 mb-8">
        Thank God For Drugs
      </h2>
      <div className="w-full">
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(288px,1fr))] justify-center">
          {tgfdItems.map((item, idx) => (
            <ItemCard
              key={idx}
              img={`img_files/${item.name}.jpg`}
              title={item.name}
              onClick={() => setSelected(item)}
            />
          ))}
        </div>
      </div>
      {selected && (
        <ItemModal
          img={`img_files/${selected.name}.jpg`}
          title={selected.name}
          artType={selected.artType}
          projectType={selected.projectType}
          use={selected.use}
          description={selected.notes}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
};

export default TgfdPage;
