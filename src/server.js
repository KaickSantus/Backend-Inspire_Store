const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

mongoose.connect(
  "mongodb+srv://Inspire_Store:kaick321@cluster0-xbl0b.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log("Conectado ao banco de dados");
  }
);

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(process.env.PORT || 4200, () => console.log("Running on port 4200"));
