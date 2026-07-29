// Verifies every text/surface token pair meets WCAG AA contrast.
// Run: pnpm check-contrast

const tokens = {
  bg: "#12100e",
  "surface-1": "#1a1714",
  "surface-2": "#221e1a",
  text: "#f2ede6",
  "text-secondary": "#b5aca1",
  "text-muted": "#8f8579",
  accent: "#e0a458",
  "accent-hover": "#f0b978",
};

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function relativeLuminance([r, g, b]: [number, number, number]): number {
  const linearize = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}

function contrastRatio(hexA: string, hexB: string): number {
  const lumA = relativeLuminance(hexToRgb(hexA));
  const lumB = relativeLuminance(hexToRgb(hexB));
  const lighter = Math.max(lumA, lumB);
  const darker = Math.min(lumA, lumB);
  return (lighter + 0.05) / (darker + 0.05);
}

type Pair = { fg: keyof typeof tokens; bg: keyof typeof tokens; minRatio: number; context: string };

const pairs: Pair[] = [
  { fg: "text", bg: "bg", minRatio: 4.5, context: "body text on canvas" },
  { fg: "text-secondary", bg: "bg", minRatio: 4.5, context: "secondary text on canvas" },
  { fg: "text-muted", bg: "bg", minRatio: 4.5, context: "muted/mono labels on canvas" },
  { fg: "text", bg: "surface-1", minRatio: 4.5, context: "body text on card" },
  { fg: "text-secondary", bg: "surface-1", minRatio: 4.5, context: "secondary text on card" },
  { fg: "text-muted", bg: "surface-1", minRatio: 4.5, context: "muted text on card" },
  { fg: "text", bg: "surface-2", minRatio: 4.5, context: "body text on mobile sheet" },
  { fg: "text-secondary", bg: "surface-2", minRatio: 4.5, context: "secondary text on mobile sheet" },
  { fg: "accent", bg: "bg", minRatio: 3, context: "accent link on canvas (large/UI)" },
  { fg: "accent", bg: "surface-1", minRatio: 3, context: "accent link on card (large/UI)" },
  { fg: "bg", bg: "accent", minRatio: 4.5, context: "button text on accent fill" },
  { fg: "bg", bg: "accent-hover", minRatio: 4.5, context: "button text on accent hover" },
];

let failed = false;
console.log("Contrast check (WCAG AA)\n");
for (const { fg, bg, minRatio, context } of pairs) {
  const ratio = contrastRatio(tokens[fg], tokens[bg]);
  const pass = ratio >= minRatio;
  if (!pass) failed = true;
  const status = pass ? "PASS" : "FAIL";
  console.log(
    `${status}  ${fg.padEnd(15)} on ${bg.padEnd(12)} → ${ratio.toFixed(2)}:1  (min ${minRatio}:1)  ${context}`,
  );
}

if (failed) {
  console.error("\nOne or more token pairs fail WCAG AA contrast.");
  process.exit(1);
} else {
  console.log("\nAll token pairs pass WCAG AA contrast.");
}
