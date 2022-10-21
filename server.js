const express = require("express");

//
const app = express();
const PORT = 3000;

//
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server Is Running On Port :-" + PORT);
});

//
var usersData = [
  { name: "Haresh", rollNo: 21 },
  { name: "Mohit", rollNo: 22 },
  { name: "Prashant", rollNo: 23 },
  { name: "Uvesh", rollNo: 24 },
  { name: "Yuvraj", rollNo: 25 },
];

app.get("/user/fetchlist", (req, res) => {
  return res.json(usersData);
});

app.post("/user/add", (req, res) => {
  const { name, rollno } = req.body;

  usersData.push({
    name: name,
    rollNo: rollno,
  });

  return res.send("Data Addedd Successfully");
});

app.put("/user/update", (req, res) => {
  const { name, rollno } = req.body;

  const tempData = usersData.map((item) => {
    if (item.rollNo == rollno) {
      return {
        ...item,
        name: name,
      };
    } else {
      return item;
    }
  });

  usersData = tempData;

  return res.send("Data Update Successfully");
});

app.delete("/user/remove", (req, res) => {
  const { rollno } = req.body;

  const tempData = usersData.filter((item) => {
    if (item.rollNo != rollno) {
      return item;
    }
  });

  usersData = tempData;

  return res.send("Data Remove Successfully");
});

// CRUD
// C => CREATE
// R => READ
// U => UPDATE
// D => DELETE
