import { mkdirSync, writeFileSync } from "node:fs";

// Alien Field Notes: The Two Day Earth Review
// One original one-line review of Earth by an alien tourist.
// The joke: golf, seen by a visitor who cannot believe the locals
// do this to themselves on purpose — and call it fun.
const line =
  "Gorgeous blue planet, friendly locals, but they spend whole afternoons chasing a tiny white ball with a metal stick, lose it in the grass, then do it all again tomorrow. 4/5 — they call this fun.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
