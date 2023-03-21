const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const rootRouter = require("./routers/rootRouter");

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.static("."));

app.use("/api", rootRouter);

app.listen(3002, () => {
  console.log("listening on port 3002");
});
