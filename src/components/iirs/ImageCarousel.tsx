"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageCarousel({
  images,
  alt,
  intervalMs = 4500,
  startDelayMs = 0,
  className = "",
}: {
  /** photo paths under /public */
  images: string[];
  alt: string;
  intervalMs?: number;
  /** offsets the first change so neighbouring carousels don't flip together */
  startDelayMs?: number;
  className?: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      setActive((a) => (a + 1) % images.length);
      timer = setInterval(() => setActive((a) => (a + 1) % images.length), intervalMs);
    }, startDelayMs + intervalMs);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [images.length, intervalMs, startDelayMs]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, i) => {
        const visible = i === active;
        return (
          <Image
            key={src}
            src={src}
            alt={visible ? alt : ""}
            fill
            sizes="(min-width: 1280px) 25vw, 50vw"
            // slow cross-fade with a barely-there zoom for a soft feel
            className={`absolute inset-0 object-cover transition-[opacity,transform] duration-[1400ms] ease-in-out ${
              visible ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          />
        );
      })}

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5" aria-hidden>
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full bg-white transition-all duration-700 ${
                i === active ? "w-5 opacity-95" : "w-1.5 opacity-50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
