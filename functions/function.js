const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

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

const addNewList = (task) => {
  const lists = loadLists();
  const list = { id: uuidv4(), task, status: false };
  lists.push(list);
  saveLists(lists);
};

module.exports = { loadLists, deleteList, addNewList };
