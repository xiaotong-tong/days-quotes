const marchOf2024 = require("./lib/2024.json");

exports.list = [].concat(marchOf2024);

exports.itemByKey = (key) => exports.list.find((item) => item.key === key);

exports.quotesCount = exports.list.length;
