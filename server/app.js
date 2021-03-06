const express = require("express");
const app = express();
const PORT = 4000;
const routes = require("./routes/index.js");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(PORT, () => {
  console.log("Apps is Running on Port" + ` ${PORT}`);
});
