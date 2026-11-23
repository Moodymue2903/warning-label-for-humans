import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one single-line safety warning label for every human being.
// Picked by a blind tournament: 10 candidates, two independent blind judges
// (full 45-pair round-robins each), then a head-to-head tiebreak in both orders.
const LINE =
  "WARNING: Human may suddenly explain a dream in full. There is no off switch. Nodding is the only approved response.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters.
// Refuse to write an invalid entry rather than ship one the gate rejects.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry is ${LINE.length} characters; the gate needs 1-160`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
