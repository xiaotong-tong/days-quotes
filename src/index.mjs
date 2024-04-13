import marchOf2024 from "./lib/2024.json" assert { type: "json" };

export const list = [].concat(marchOf2024);

export const itemByKey = (key) => list.find((item) => item.key === key);
