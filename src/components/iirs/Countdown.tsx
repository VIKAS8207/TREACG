"use client";

import { useEffect, useState } from "react";

// 20 Jan 2027, 00:00 India time. The event's start time of day is not specified, so the count is to the start of the day.
const EVENT_START = new Date("2027-01-20T00:00:00+05:30").getTime();

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown() {
  // null until mounted, so server and client markup match
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(Math.max(0, EVENT_START - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (left === 0) {
    return <p className="py-4 text-lg font-semibold text-amber-400">IIRS 2027 has begun</p>;
  }

  const s = left === null ? null : Math.floor(left / 1000);
  const units = [
    { label: "Days", value: s === null ? "--" : String(Math.floor(s / 86400)) },
    { label: "Hours", value: s === null ? "--" : pad(Math.floor((s % 86400) / 3600)) },
    { label: "Minutes", value: s === null ? "--" : pad(Math.floor((s % 3600) / 60)) },
    { label: "Seconds", value: s === null ? "--" : pad(s % 60) },
  ];

  return (
    // open layout, no tiles: bold numbers with small spaced labels underneath
    <div
      className="mx-auto flex w-full max-w-4xl justify-between gap-3 px-2 sm:px-8"
      role="timer"
      aria-label="Time left until IIRS 2027"
    >
      {units.map((u) => (
        <div key={u.label} className="flex-1 text-center">
          <p className="text-5xl font-extrabold leading-none tabular-nums tracking-tight sm:text-7xl lg:text-8xl">{u.value}</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-800 sm:text-base">{u.label}</p>
        </div>
      ))}
    </div>
  );
}
