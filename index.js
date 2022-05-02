const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

const config = require("./config/key");

const { User } = require("./models/User");

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// applicateion/json
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World! ~~안녕하세요 ~"));

app.post("/register", (req, res) => {
  // 회원 가입 시 필요한 정보 client에서 가져오면
  // 그것을 DB에 추가

  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
