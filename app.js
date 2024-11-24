const fs = require("fs");
const express = require("express");
const {
  loadLists,
  deleteList,
  addNewList,
} = require("./functions/function.js");

var app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// check file data
if (!fs.existsSync("/data")) {
  fs.mkdirSync("data", { recursive: true });
}

if (!fs.existsSync("data/list.json")) {
  fs.writeFileSync("data/list.json", "[]");
}

app.get("/", function (req, res) {
  const lists = loadLists();
  res.render("list", { lists });
});

app.get("/delete/:id", function (req, res) {
  deleteList(req.params.id);
  res.redirect("/");
});

app.post("/add", function (req, res) {
  addNewList(req.body.task);
  res.redirect("/");
});

app.listen(3000);
