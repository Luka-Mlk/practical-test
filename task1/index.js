require("./pkg/db");
const config = require("./pkg/config");
const express = require("express");
const app = express();

app.use(express.json());

app.listen(config.get("development").port, (err) => {
  err
    ? console.log(err)
    : console.log(`Server started on port ${config.get("development").port}`);
});
