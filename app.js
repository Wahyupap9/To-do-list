const fs = require("fs");
const express = require("express");
const { loadContact } = require("./functions/function.js");

var app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded());
// check file data
if (!fs.existsSync("/data")) {
  fs.mkdirSync("data", { recursive: true });
}

if (!fs.existsSync("data/list.json")) {
  fs.writeFileSync("data/list.json", "[]");
}

app.get("/", function (req, res) {
  const lists = loadContact();
  res.render("list", { lists });
});

app.listen(3000);
