// One-Sentence Absurd Invention Pitch — writes the chosen pitch to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "For forgetting why you walked into a room, the Doorframe Stenograph clacks out whatever you mutter as you pass beneath it, then reads it back in courtroom monotone while you gape into the fridge: \"Scissors.\"";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
