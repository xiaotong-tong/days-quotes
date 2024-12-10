const marchOf1To100 = require("./lib/1-100.json");
const marchOf101To200 = require("./lib/101-200.json");

// 每日一句日语学习
exports.list = [].concat(marchOf1To100, marchOf101To200);
exports.itemByKey = (key) => exports.list.find((item) => item.key === key);
exports.quotesCount = exports.list.length;

const poetryOf1To100 = require("./poetryLib/1-100.json");

// 诗词学习
exports.poetryList = [].concat(poetryOf1To100);
exports.poetryItemByKey = (key) => exports.poetryList.find((item) => item.key === key);
exports.poetryCount = exports.poetryList.length;

const topicOf1To100WithCn = require("./topic/cn/1-100.json");
const topicOf101To200WithCn = require("./topic/cn/101-200.json");
const topicOf201To300WithCn = require("./topic/cn/201-300.json");
const topicOf301To400WithCn = require("./topic/cn/301-400.json");
const topicOf401To500WithCn = require("./topic/cn/401-500.json");

const topicAllWithCn = [].concat(
	topicOf1To100WithCn,
	topicOf101To200WithCn,
	topicOf201To300WithCn,
	topicOf301To400WithCn,
	topicOf401To500WithCn
);

const topicOf1To100WithJp = require("./topic/jp/1-100.json");
const topicOf101To200WithJp = require("./topic/jp/101-200.json");
const topicOf201To300WithJp = require("./topic/jp/201-300.json");
const topicOf301To400WithJp = require("./topic/jp/301-400.json");
const topicOf401To500WithJp = require("./topic/jp/401-500.json");

const topicAllWithJp = [].concat(
	topicOf1To100WithJp,
	topicOf101To200WithJp,
	topicOf201To300WithJp,
	topicOf301To400WithJp,
	topicOf401To500WithJp
);

// 三题故事
exports.topic = {
	cn: {
		list: topicAllWithCn,
		count: topicAllWithCn.length,
	},
	jp: {
		list: topicAllWithJp,
		count: topicAllWithJp.length,
	},
};
