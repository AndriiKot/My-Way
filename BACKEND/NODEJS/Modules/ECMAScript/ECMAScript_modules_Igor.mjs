import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const filePath = fileURLToPath(import.meta.url);

readFile(filePath, "utf-8").then((content) => console.log(content));

const content = await readFile(filePath, "utf-8");
console.log(content);
