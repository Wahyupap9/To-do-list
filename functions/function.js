const fs = require("fs");

const loadContact = () => {
  const lists = JSON.parse(fs.readFileSync("data/list.json", "utf-8"));
  return lists;
};

module.exports = { loadContact };
