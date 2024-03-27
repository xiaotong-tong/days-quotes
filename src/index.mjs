import marchOf2024 from "./lib/202403.mjs";

export const list = [...marchOf2024];

export const itemByDay = (day) => list.find((item) => item.date === day);
