const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! edited inside remote container");
});

app.listen(5000, () => {
  console.log(`Server started at port 5000`);
});
