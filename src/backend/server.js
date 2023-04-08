var express = require("express");
var app = express();
const mongoose = require("mongoose");
const User = require("./models/user");
const error = require("./error");
const cors = require("cors");
/* Requiring body-parser package
to fetch the data that is entered
by the user in the HTML form.*/
const bodyParser = require("body-parser");
const user = require("./controllers/signup");
const question = require("./controllers/questionanswers");
const catcherrors = require("./catchasyncerrors");
// Allowing app to use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const url = "http://localhost:3000";
//const url = "hosting url";
app.use(cors({ origin: url, credentials: true }));
app.use("/auth/", user);
app.use("/question/", question);
// Initializing Passport

// Connecting mongoose to our database
mongoose.connect("mongodb://localhost:27017/stackoverflow", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handling get request on login route
app.get("/", async function (req, res) {
  const asd = await User.find();
  console.log(asd);
  res.send("rajesh");
});

app.use(error);
app.listen(8000, () => {
  console.log(`Server is working on http://localhost:8000`);
});
