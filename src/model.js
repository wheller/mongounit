'use strict';

const mongoose = require('mongoose'),
      schema = mongoose.Schema;



var sUser = new schema({
  name: String,
  username: { type: String, required: true, unique: true },
  admin: Boolean,
  created: Date
});

var mUser = mongoose.model('User', sUser);

module.exports = mUser;
