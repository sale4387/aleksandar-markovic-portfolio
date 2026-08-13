/* eslint-disable @next/next/no-img-element */

import type { Hobby } from "@/data/portfolio";

const galleryOrder = [0, 2, 4, 5, 3, 1];
const layouts = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1 row-span-2",
  "col-span-2 row-span-2",
];
const focus = ["50% 43%", "49% 50%", "52% 38%", "53% 43%", "42% 35%", "50% 53%"];

export function WoodworkingGallery({ hobby }: { hobby: Hobby }) {
  return (
    <div className="grid aspect-square grid-cols-4 grid-rows-4 gap-2.5 rounded-3xl bg-white/35 p-2.5 shadow-[0_16px_36px_rgba(15,23,42,.08)] sm:gap-3 sm:p-3">
      {galleryOrder.map((imageIndex, index) => {
        const image = hobby.images[imageIndex];
        if (!image) return null;

        return (
        <figure key={image} className={`group relative overflow-hidden rounded-2xl bg-slate-200 ${layouts[index]}`}>
          <img src={image} alt={`${hobby.title}, project photo ${imageIndex + 1}`} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-[1.025]" style={{ objectPosition: focus[index] }} />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,.14),transparent_48%,rgba(15,23,42,.08))]" />
        </figure>
        );
      })}
    </div>
  );
}
