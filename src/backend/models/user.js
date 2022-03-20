
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: 'user' },
    profilePhoto: {
      type: String,
      default: function () {
        return `https://secure.gravatar.com/avatar/${this._id}?s=90&d=identicon`;
      }
    },
    created: { type: Date, default: Date.now }
  
});


module.exports = mongoose.model("User", userSchema);
