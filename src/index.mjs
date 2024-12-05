import marchOf1To100 from "./lib/1-100.json" with { type: "json" };
import marchOf101To200 from "./lib/101-200.json" with { type: "json" };

import poetryOf1To100 from "./poetryLib/lib/1-100.json" with { type: "json" };

import topicOf1To100WithCn from "./topic/cn/1-100.json" with { type: "json" };
import topicOf101To200WithCn from "./topic/cn/101-200.json" with { type: "json" };
import topicOf201To300WithCn from "./topic/cn/201-300.json" with { type: "json" };
import topicOf301To400WithCn from "./topic/cn/301-400.json" with { type: "json" };
import topicOf401To500WithCn from "./topic/cn/401-500.json" with { type: "json" };

import topicOf1To100WithJp from "./topic/jp/1-100.json" with { type: "json" };
import topicOf101To200WithJp from "./topic/jp/101-200.json" with { type: "json" };
import topicOf201To300WithJp from "./topic/jp/201-300.json" with { type: "json" };
import topicOf301To400WithJp from "./topic/jp/301-400.json" with { type: "json" };
import topicOf401To500WithJp from "./topic/jp/401-500.json" with { type: "json" };

// 每日一句日语学习
export const list = [].concat(marchOf1To100, marchOf101To200);
export const itemByKey = (key) => list.find((item) => item.key === key);
export const quotesCount = list.length;

// 诗词学习
export const poetryList = [].concat(poetryOf1To100);
export const poetryItemByKey = (key) => poetryList.find((item) => item.key === key);
export const poetryCount = poetryList.length;

const topicAllWithCn = [].concat(
	topicOf1To100WithCn,
	topicOf101To200WithCn,
	topicOf201To300WithCn,
	topicOf301To400WithCn,
	topicOf401To500WithCn
);

const topicAllWithJp = [].concat(
	topicOf1To100WithJp,
	topicOf101To200WithJp,
	topicOf201To300WithJp,
	topicOf301To400WithJp,
	topicOf401To500WithJp
);

// 三题故事
export const topic = {
	cn: {
		list: topicAllWithCn,
		count: topicAllWithCn.length,
	},
	jp: {
		list: topicAllWithJp,
		count: topicAllWithJp.length,
	},
};
