const User = require("../models/user");
const crypto = require("crypto");
var express = require('express');
const bcrypt = require("bcrypt");
const router = express.Router();
const salt = bcrypt.genSaltSync(10);
const server_secret_key='iamrajesh675gjhchshskijdiucacuijnuijniusjiudjcsdijcjsijcisjijsoisju'
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const catchasyncerror=require('../catchasyncerrors')
const ErrorHandler=require('../errorhandler')
// Register a User
router.post('/register',catchasyncerror(async (req, res, next) => {
console.log('hi boy')
console.log(req.body)
  const { username, password } = req.body.myform;
  var passwordToSave = bcrypt.hashSync(password, salt);
  console.log(passwordToSave)
 
  const user = await User.create({
    username:username,
    password:passwordToSave,
  });
  const server_token = jwt.sign(
    { uid: user._id },
    server_secret_key
  );
  res.status(200).json({
    success: true,
    user,
    server_token
  });
}))

function checkloggedinuser(req,res,next) {

  const tokenheader = req.body.headers || req.headers['servertoken'];

  if (tokenheader) {
  
      jwt.verify(tokenheader, server_secret_key, function(err, decoded){
          if (!err) {
              req.body.uidfromtoken = decoded.uid;
              console.log('rajesh')
          }
          next();
      });
  }else {
    res.status(200).json({
      success: false
    });
  }

}

router.get("/loaduser",checkloggedinuser,async function(req, res, next) {
  console.log(req.headers)
  console.log(req.body.uidfromtoken)
  const notifications=await Notification.find()
  const user=await User.find({_id:{$eq:req.body.uidfromtoken }})
  res.status(200).json({
    message:user
  });
})

router.post("/login", async function(req, res, next) {
  console.log(req.body)
  const userdetails={ username:req.body.username,
      password:req.body.password,}
      User.find({"username":req.body.username,})
  .exec()
  .then(doc => {
    // console.log("response got : ", doc);
    if (doc != undefined && doc.length > 0) {
        console.log(userdetails.password)
        console.log(doc)
        console.log(req.body.password)
      if (bcrypt.compareSync(req.body.password, doc[0].password)) {
        const server_token = jwt.sign(
          { uid: doc[0].email },
          server_secret_key
        );
        // console.log("UID from JWT: ", doc[0].email);
        res.status(200).json({
          message: "User Logged in Successfully",
          server_token: server_token,
          current_user: doc[0].email,
          user_Details: doc[0]
        });
      } else {
        console.log("Error.!!!!!!!");
        res.status(401).json({
          message: "Applicant entered wrong password"
        });
      }
    } else {
      console.log("Applicant is not registered, First Signup");
      res.status(400).json({
        message: "Applicant is not registered, First Signup"
      });
    }
  })
  .catch(err => {
    console.log("Error : ", err);
    res.status(500).json({
      message: "internal server error"
    });
  });
})



module.exports = router;
