require("dotenv").config();
require("./Config/Db/mongoConfig");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 9090;
const cors = require("cors");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: ['http://localhost:3000','https://pizza-kun.netlify.app']
}))

// api's
const api = require('./Routes/index');
app.use('/', api);


app.get("/", (req, res) => {
  res.send("app working");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;