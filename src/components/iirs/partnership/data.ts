// Single source of truth for the Partnership Opportunities section.

export const ENQUIRE_HREF = "#contact";

// ---- hero: Co-Sponsor ----------------------------------------------------
export const coSponsor = {
  name: "Co-Sponsor",
  pill: "Top tier · 1 spot",
  blurb: "The top partnership tier at IIRS 2027.",
  perks: [
    { icon: "logo", text: "IIRS logo at the bottom of promotional material" },
    { icon: "directory", text: "Full-page event directory ad (1st advt)" },
    { icon: "led", text: "LED screens in conference hall and pre-function area" },
    { icon: "speaker", text: "Speaker slots" },
    { icon: "pickup", text: "Pick-up & drop" },
  ],
  stats: [
    { value: "36 m²", label: "exhibition space" },
    { value: "15", label: "digital posts" },
    { value: "7", label: "print media" },
    { value: "8", label: "VIP passes" },
    { value: "15", label: "visitor passes" },
    { value: "2 + 2", label: "suite + executive rooms" },
  ],
} as const;

// ---- graded tier cards: Diamond / Gold / Silver ---------------------------
export const tiers = [
  {
    name: "Diamond",
    spots: 1,
    tint: "bg-brand-mint",
    stats: [
      { value: "36 m²", label: "branding stall" },
      { value: "10 + 5", label: "digital + print media" },
      { value: "5 + 15", label: "VIP + visitor passes" },
      { value: "1 + 2", label: "suite + exec rooms" },
    ],
    benefits: [
      { icon: "logo", text: "Logo at the bottom of promotional material" },
      { icon: "directory", text: "Full-page directory" },
      { icon: "led", text: "LED screens" },
      { icon: "speaker", text: "Speaker slots" },
      { icon: "pickup", text: "Pick-up & drop" },
    ],
  },
  {
    name: "Gold",
    spots: 2,
    tint: "bg-amber-100",
    stats: [
      { value: "27 m²", label: "exhibition space" },
      { value: "5 + 5", label: "digital + print media" },
      { value: "3 + 10", label: "VIP + visitor passes" },
      { value: "1 + 1", label: "suite + exec rooms" },
    ],
    benefits: [
      { icon: "logo", text: "Logo with IIRS logo on every promotional material" },
      { icon: "directory", text: "Full-page directory" },
      { icon: "led", text: "LED screens" },
      { icon: "speaker", text: "Speaker slots" },
      { icon: "pickup", text: "Pick-up & drop" },
    ],
  },
  {
    name: "Silver",
    spots: 3,
    tint: "bg-neutral-100",
    stats: [
      { value: "18 m²", label: "exhibition space" },
      { value: "5 + 3", label: "digital + print media" },
      { value: "2 + 7", label: "VIP + visitor passes" },
      { value: "1", label: "exec room" },
    ],
    benefits: [
      { icon: "logo", text: "Logo with IIRS logo on every promotional material" },
      { icon: "directory", text: "Full-page directory" },
      { icon: "led", text: "LED screens" },
      { icon: "speaker", text: "Speaker slots" },
      { icon: "pickup", text: "Pick-up & drop" },
    ],
  },
] as const;

// ---- category partnerships ------------------------------------------------
export const categoryIntro = "Focused packages, separate from the tier ladder.";

export const categories = [
  {
    name: "Technology Partner",
    icon: "tech",
    spots: null,
    summary: "Gate branding and a full-page directory listing.",
    facts: [
      "Logo at main gate",
      "Billboard promotion + 5 print media",
      "Full-page directory",
      "LED screens",
      "Speaker slots",
      "18 m²",
      "1 VIP + 3 visitor passes",
      "Pick-up & drop",
    ],
  },
  {
    name: "Exhibitor Sponsor",
    icon: "exhibitor",
    spots: "30 spots",
    summary: "Billboard promotion and a stall at the summit.",
    facts: [
      "Billboard promotion + 5 print media",
      "Half-page directory",
      "LED screens",
      "9 m²",
      "1 VIP + 5 visitor passes",
      "Pick-up & drop",
    ],
  },
  {
    name: "Media Partner",
    icon: "media",
    spots: null,
    summary: "Gate branding and a speaker slot.",
    facts: [
      "Logo at main gate",
      "Billboard promotion + 5 print media",
      "1/4 page directory",
      "LED screens",
      "Speaker slots",
      "9 m²",
      "1 VIP + 3 visitor passes",
    ],
  },
  {
    name: "Category Partners",
    icon: "category",
    spots: null,
    summary: "One package shared by each of these categories.",
    chips: ["Gifting", "Food", "Hydration", "Delegate Kit", "Gala Dinner", "Conference"],
    facts: [
      "Logo at main gate",
      "Billboard promotion + 5 print media",
      "1/4 page directory",
      "LED screens in conference hall and pre-function area",
      "1 VIP + 3 visitor passes",
    ],
  },
] as const;
