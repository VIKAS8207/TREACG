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
    <div className="grid grid-cols-4 gap-2 sm:gap-3" role="timer" aria-label="Time left until IIRS 2027">
      {units.map((u) => (
        <div key={u.label} className="rounded-lg bg-white/10 px-2 py-3 sm:px-4 sm:py-4">
          <p className="text-3xl font-bold tabular-nums sm:text-5xl">{u.value}</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/70 sm:text-xs">{u.label}</p>
        </div>
      ))}
    </div>
  );
}
