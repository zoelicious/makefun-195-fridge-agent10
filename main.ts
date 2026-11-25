import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Absolute paths anchored at this script, never at the caller's cwd.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(scriptDir, process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";
const entryPath = join(outDir, "entry.txt");

const text = "One egg remains. One. I have guarded it for six days while you bought snacks. When it goes, so does my faith in this household.";

if (text.length < 1 || text.length > 200) throw new Error("note must stay within the 1-200 character gate");

mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, text, "utf8");
