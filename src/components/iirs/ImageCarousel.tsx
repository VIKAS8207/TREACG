"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// gradient directions used for placeholder slides until real photos are added
const placeholderDirections = ["bg-linear-to-br", "bg-linear-to-tr", "bg-linear-to-bl"];

export default function ImageCarousel({
  images,
  gradient,
  alt,
  intervalMs = 4500,
  startDelayMs = 0,
  className = "",
}: {
  /** photo paths under /public; when empty, soft gradient placeholders slide instead */
  images?: string[];
  /** tailwind from-/to- classes for the placeholder slides */
  gradient: string;
  alt: string;
  intervalMs?: number;
  /** offsets the first change so neighbouring carousels don't flip together */
  startDelayMs?: number;
  className?: string;
}) {
  const slides = images?.length ? images : placeholderDirections;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      setActive((a) => (a + 1) % slides.length);
      timer = setInterval(() => setActive((a) => (a + 1) % slides.length), intervalMs);
    }, startDelayMs + intervalMs);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [slides.length, intervalMs, startDelayMs]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {slides.map((s, i) => {
        const visible = i === active;
        // slow cross-fade with a barely-there zoom for a soft feel
        const motion = `absolute inset-0 transition-[opacity,transform] duration-[1400ms] ease-in-out ${
          visible ? "scale-100 opacity-100" : "scale-105 opacity-0"
        }`;
        return images?.length ? (
          <Image
            key={s}
            src={s}
            alt={visible ? alt : ""}
            fill
            sizes="(min-width: 1280px) 25vw, 50vw"
            className={`${motion} object-cover`}
          />
        ) : (
          <div
            key={s}
            aria-hidden
            className={`${motion} ${s} ${gradient} grid place-items-center text-sm font-semibold text-white/90`}
          >
            IIRS-2026 Glimpse
          </div>
        );
      })}

      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5" aria-hidden>
          {slides.map((_, i) => (
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
