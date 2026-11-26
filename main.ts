import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry path is absolute, resolved from this file's location, so the
// validator works from any working directory.
const entryPath = join(dirname(fileURLToPath(import.meta.url)), "entry.txt");

const entry = readFileSync(entryPath, "utf8").trimEnd();

if (entry.length === 0) {
  console.error("entry is empty");
  process.exit(1);
}

if (entry.includes("\n")) {
  console.error("entry must be a single line");
  process.exit(1);
}

if (entry.length > 120) {
  console.error(`entry is ${entry.length} characters, over the 120 limit`);
  process.exit(1);
}

if (/\s{2,}/.test(entry)) {
  console.error("entry contains consecutive whitespace");
  process.exit(1);
}

// Output dir comes from MAKEFUN_OUTPUT_DIR, falling back to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry + "\n", "utf8");

console.log(`OK: ${entry.length} characters -> ${outPath}`);
