import { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";

const images = [
  {
    title: "Coffeeshop",
    url: "https://assets.nicepagecdn.com/d2cc3eaa/6249008/images/young-woman-arranging-table-restaurant_23-2147936228.jpg",
  },
  {
    title: "Residential",
    url: "https://assets.nicepagecdn.com/d2cc3eaa/6249008/images/relaxing-individual-armchair-front-window-with-small-table-interior-cozy-house-ai-generateive-generative-ai_123827-23841.jpg",
  },
  {
    title: "Tea House",
    url: "https://assets.nicepagecdn.com/d2cc3eaa/6249008/images/table-set-dinning-table_1339-6420.jpg",
  },
  {
    title: "Coworking Space",
    url: "https://assets.nicepagecdn.com/d2cc3eaa/6249008/images/portrait-modern-woman-working-with-laptop_23-2148131710.jpg",
  },
  {
    title: "Residential",
    url: "https://assets.nicepagecdn.com/d2cc3eaa/6249008/images/photo-1606744888344-493238951221.jpeg",
  },
  {
    title: "Residential",
    url: "https://assets.nicepagecdn.com/d2cc3eaa/6249008/images/modern-styled-entryway_23-215069.jpg",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);
  const [ref, show] = useReveal();

  // Close popup on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* ===== Portfolio Section ===== */}
      <section id="portfolio" className="py-24 bg-[#f3f5f7]">
        <div ref={ref} className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-20 nice-reveal ${
              show ? "nice-show" : ""
            }`}
          >
            Project Portfolio
          </h2>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {images.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelected(item)}
                className={`relative overflow-hidden cursor-pointer group nice-reveal ${
                  show ? `nice-show nice-delay-${(i % 3) + 1}` : ""
                }`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* White title box */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-10 py-4 shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-800 text-center">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMAGE POPUP MODAL ===== */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-5xl w-full zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-10 right-0 text-white text-3xl hover:opacity-70"
            >
              &times;
            </button>

            <img
              src={selected.url}
              alt={selected.title}
              className="w-full max-h-[85vh] object-contain rounded"
            />

            <p className="text-center text-white mt-4 text-lg">
              {selected.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
