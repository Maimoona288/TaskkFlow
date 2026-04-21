import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1587612049655-c1030366a74a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1100",
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFza3MlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D?w=1100",
  "https://images.unsplash.com/photo-1769413085127-8381b222ae30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1100",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3500); // 3.5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">

      {/* FRAME */}
      <div className="overflow-hidden rounded-2xl shadow-2xl border border-slate-200 bg-white">

        {/* SLIDES */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
      {images.map((img, i) => (
  <img
    key={i}
    src={img}
    alt={`slide-${i}`}
    className="w-full h-[280px] sm:h-[380px] md:h-[420px] object-cover flex-shrink-0"
  />
))}
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
              index === i ? "bg-indigo-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
}