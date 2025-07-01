import React, { useState } from "react";
import { yeezus2Items } from "../items/yeezus2";
import { ArtItem } from "../items/artItems";
import ItemCard from "../components/ItemCard";
import ItemModal from "../components/ItemModal";

const Yeezus2Page: React.FC = () => {
  const [selected, setSelected] = useState<ArtItem | null>(null);
  return (
    <div className="mx-4 md:mx-8">
      <h2 className="text-2xl font-light tracking-tight text-left transition-all duration-300 mb-8">
        Yeezus 2
      </h2>
      <div className="w-full">
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(288px,1fr))] justify-center">
          {yeezus2Items.map((item: ArtItem, idx: number) => (
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

export default Yeezus2Page;
