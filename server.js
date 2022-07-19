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
