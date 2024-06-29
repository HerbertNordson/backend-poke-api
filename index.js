const express = require("express");
const routes = require("./routes");
const PORT = 8080;
const HOST = "0.0.0.0";

require("dotenv/config");

const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.send("POKE API");
});

app.listen(PORT, HOST);
