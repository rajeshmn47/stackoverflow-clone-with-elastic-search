const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Schema = mongoose.Schema;

const questionSchema = new mongoose.Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  title: { type: String, required: true },
  text: { type: String, required: true },
  tags: [{ type: String, required: true }],
  score: { type: Number, default: 0 },
  votes: [
    {
      user: { type: Schema.Types.ObjectId, required: true },
      vote: { type: Number, required: true },
    },
  ],
  comments: [
    {
      author: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      body: { type: String, required: true },
      created: { type: Date, default: Date.now },
    },
  ],
  answers: [
    {
      author: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      created: { type: Date, default: Date.now },
      text: { type: String, required: true },
      score: { type: Number, default: 0 },
      votes: [
        {
          user: { type: Schema.Types.ObjectId, required: true },
          vote: { type: Number, required: true },
        },
      ],
      comments: [
        {
          author: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true,
          },
          body: { type: String, required: true },
          created: { type: Date, default: Date.now },
        },
      ],
    },
  ],
  created: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
});

module.exports = mongoose.model("Question", questionSchema);
