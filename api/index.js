const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ai = require("./ai");
const app = express();
const port = process.env.PORT || 56210;

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/ai", ai);

app.get("/", (res) => {
  res.send("This is it.");
});

app.listen(port, function () {
  console.log("Started application on port %d", port);
});
