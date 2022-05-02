const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://user:1234@cluster0.p8xga.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
// mongodb+srv://user:1234@cluster0.p8xga.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.get("/", (req, res) => res.send("Hello World! ~~안녕하세요 ~ "));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
