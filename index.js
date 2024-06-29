const express = require("express");

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.send("POKE API");
});

app.listen(PORT, HOST);
