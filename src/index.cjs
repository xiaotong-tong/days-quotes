const marchOf1To100 = require("./lib/1-100.json");

const poetryOf1To100 = require("./poetryLib/1-100.json");

// 每日一句日语学习
exports.list = [].concat(marchOf1To100);
exports.itemByKey = (key) => exports.list.find((item) => item.key === key);
exports.quotesCount = exports.list.length;

// 诗词学习
exports.poetryList = [].concat(poetryOf1To100);
exports.poetryItemByKey = (key) => exports.poetryList.find((item) => item.key === key);
exports.poetryCount = exports.poetryList.length;
