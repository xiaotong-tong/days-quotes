import marchOf1To100 from "./lib/1-100.json" assert { type: "json" };
import marchOf101To200 from "./lib/101-200.json" assert { type: "json" };

import poetryOf1To100 from "./poetryLib/lib/1-100.json" assert { type: "json" };

// 每日一句日语学习
export const list = [].concat(marchOf1To100, marchOf101To200);
export const itemByKey = (key) => list.find((item) => item.key === key);
export const quotesCount = list.length;

// 诗词学习
export const poetryList = [].concat(poetryOf1To100);
export const poetryItemByKey = (key) => poetryList.find((item) => item.key === key);
export const poetryCount = poetryList.length;
