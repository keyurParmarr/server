const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());

app.use("/", express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(3000, () => {
  console.log("running on 3000");
});
