// Small stroke icons (24x24) used across the partnership blocks.
const paths = {
  logo: "M12 3l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.3 6.8 19l1-5.8L3.6 9.1l5.8-.8z",
  directory: "M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2zM4 19V5M8 7h6",
  led: "M3 5h18v11H3zM8 20h8M12 16v4",
  speaker: "M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zM6 11a6 6 0 0 0 12 0M12 17v4",
  pickup: "M5 16l1.5-5.5A2 2 0 0 1 8.4 9h7.2a2 2 0 0 1 1.9 1.5L19 16M4 16h16v3H4zM7.5 19v1.5M16.5 19v1.5",
  tech: "M7 7h10v10H7zM10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4",
  exhibitor: "M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9a2.6 2.6 0 0 0 5.3 0 2.6 2.6 0 0 0 5.4 0A2.6 2.6 0 0 0 20 9M10 20v-5h4v5",
  media: "M3 6h18v12H3zM10 9.5v5l4.5-2.5z",
  category: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  check: "m5 12.5 4.5 4.5L19 7.5",
  chevron: "m6 9 6 6 6-6",
  arrow: "M7 17 17 7M8 7h9v9",
} as const;

export type IconName = keyof typeof paths;

export default function Icon({ name, className = "h-4 w-4" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={paths[name]} />
    </svg>
  );
}
