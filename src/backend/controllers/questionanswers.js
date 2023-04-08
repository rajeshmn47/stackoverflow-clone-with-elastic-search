const bodyParser = require("body-parser");
const catchasyncerror = require("../catchasyncerrors");
const Question = require("../models/question");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
var express = require("express");
const router = express.Router();

router.post(
  "/question",
  catchasyncerror(async (req, res, next) => {
    console.log("hi boy");
    console.log(req.body);
    const { author, title, text, tags } = req.body;
    const question = await Question.create({
      author: author,
      title: title,
      text: text,
      tags: tags,
    });
    console.log(question);
    res.status(200).json({
      success: true,
    });
  })
);

router.get(
  "/getquestions",
  catchasyncerror(async (req, res, next) => {
    const questions = await Question.find();

    console.log(questions);
    res.status(200).json({
      success: true,
      questions: questions,
    });
  })
);
module.exports = router;
