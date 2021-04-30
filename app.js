const express = require("express");
const fruits = require("./fruits");
const sortArr = require("./sort");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("This is root home page ");
});

app.get("/ping", (req, res) => {
  res.json("pong");
});

app.get("/greet/:name", (req, res) => {
  try {
    const { name } = req.params;
    res.send(`Hello there, ${name}!`);
  } catch (err) {
    res.send(" there in name error ", err.message);
  }
});

app.get("/five", (req, res) => {
  res.send([1, 2, 3, 4, 5]);
});
app.get("/evens/:n", async (req, res) => {
  try {
    const { n } = req.params;
    if (n > 3) {
      let array = [];
      for (let i = 0; i >= n; i += 2) {
        array.push(i);
      }
      res.send(array);
    }
  } catch (err) {
    res.send(" there in name error", err.message);
  }
});
app.get("/fruits", (req, res) => {
  try {
    res.json(fruits);
  } catch (err) {
    res.send("there are error in fruits data", err.message);
  }
});
app.get("/fruits/sort", (req, res) => {
  try {
    res.json(sortArr);
  } catch (err) {
    res.send("there are error in fruits data", err.message);
  }
});

app.get("/fruits/:name", (req, res) => {
  try {
    const { name } = req.params;

    let fruitsName = fruits.filter((fruit) => {
      if (fruit.name.toLowerCase() === name.toLowerCase()) {
        return fruit;
      }
    });

    res.json(fruitsName);
  } catch (err) {
    res.send("there error on frouts by name ", err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
