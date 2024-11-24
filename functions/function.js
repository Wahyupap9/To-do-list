const fs = require("fs");

const loadLists = () => {
  const lists = JSON.parse(fs.readFileSync("data/list.json", "utf-8"));
  return lists;
};

const saveLists = (list) => {
  fs.writeFileSync("data/list.json", JSON.stringify(list));
};

const deleteList = (id) => {
  const lists = loadLists();
  const newList = lists.filter((list) => list.id !== id);
  saveLists(newList);
};

module.exports = { loadLists, deleteList };
