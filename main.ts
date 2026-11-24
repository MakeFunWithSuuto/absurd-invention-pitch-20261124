// One-Sentence Absurd Invention Pitch — writes the chosen pitch to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "The Couch That Coughs is a sofa whose cushions sense lost remotes, keys and loose change, then hack them up onto the rug with a wet, apologetic cough every time you stand.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
