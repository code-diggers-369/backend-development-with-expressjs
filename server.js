const express = require("express");

//
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server Is Running On Port :-" + PORT);
});

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

app.post("/", (req, res, next) => {
  res.send("<h1>Hii</h1>");
});

app.put("/", (req, res, next) => {
  res.send("this is put method");
});

app.delete("/", (req, res, next) => {
  res.send("method = delete");
});
