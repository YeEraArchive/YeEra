import React, { useState } from "react";
import { items } from "../items/Artworks";
import ItemCard from "../components/ItemCard";
import ItemModal from "../components/ItemModal";
import Header from "../components/Header";

interface Item {
  id: number;
  era: string;
  name: string;
  notes: string;
  designer: string;
  artType: string;
  projectType: string;
  use: string;
}

const checkFileExists = async (url: string) => {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok;
  } catch {
    return false;
  }
};

const Artworks: React.FC = () => {
  const eras = Array.from(new Set(items.map((item: Item) => item.era))).filter(
    Boolean
  );
  const [selectedEra, setSelectedEra] = useState<string>(eras[0] || "");
  const [fileStates, setFileStates] = useState<
    Record<number, { img?: boolean; txt?: string | null }>
  >({});
  const [selected, setSelected] = useState<Item | null>(null);

  React.useEffect(() => {
    const filtered = items.filter((item: Item) => item.era === selectedEra);
    filtered.forEach(async (item) => {
      const imgUrl = `Images/Images/${item.era}/${item.id}.jpg`;
      const txtUrl = `Images/Images/${item.era}/${item.id}.txt`;
      const imgExists = await checkFileExists(imgUrl);
      let txtValue: string | null = null;
      try {
        const txtRes = await fetch(txtUrl);
        if (txtRes.ok) {
          txtValue = await txtRes.text();
        }
      } catch {}
      setFileStates((prev) => ({
        ...prev,
        [item.id]: { img: imgExists, txt: txtValue },
      }));
    });
  }, [selectedEra]);

  const filteredItems = items.filter((item: Item) => item.era === selectedEra);

  // 썸네일 생성 함수
  const getThumb = (item: Item) => {
    const file = fileStates[item.id];
    if (file?.img) {
      return (
        <img
          src={`Images/Images/${item.era}/${item.id}.jpg`}
          alt={item.name}
          className="w-full max-h-60 object-contain rounded"
          style={{ aspectRatio: "1/1", background: "#f3f3f3" }}
        />
      );
    } else if (file?.txt) {
      return (
        <iframe
          width="250"
          height="140"
          src={
            file.txt.trim().startsWith("http")
              ? file.txt.trim().replace("watch?v=", "embed/")
              : file.txt.trim()
          }
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    } else {
      return <span className="text-gray-400">N/A</span>;
    }
  };

  return (
    <div className="mx-4 md:mx-8">
      <Header era={selectedEra} />
      <h2 className="text-2xl font-bold mb-8">Artworks</h2>
      <div className="mb-8">
        <select
          value={selectedEra}
          onChange={(e) => setSelectedEra(e.target.value)}
          className="border rounded px-3 py-2"
        >
          {eras.map((era) => (
            <option key={era} value={era}>
              {era}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(288px,1fr))] justify-center">
          {filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              thumb={getThumb(item)}
              title={item.name}
              onClick={() => setSelected(item)}
            />
          ))}
        </div>
      </div>
      {selected && (
        <ItemModal
          thumb={getThumb(selected)}
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

export default Artworks;
