var express = require('express');
var app = express();
const mongoose = require("mongoose");
const User = require("./models/user");
/* Requiring body-parser package
to fetch the data that is entered
by the user in the HTML form.*/
const bodyParser = require("body-parser");



// Allowing app to use body parser
app.use(bodyParser.urlencoded({ extended: true }));



// Initializing Passport

// Connecting mongoose to our database
mongoose.connect(
'mongodb://localhost:27017/stackoverflow', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});



// Handling get request on login route
app.get("/", async function (req, res) {
const asd=await User.find()
    res.send('rajesh')
}) 
    
app.listen(8000, () => {
    console.log(`Server is working on http://localhost:8000`);
  });