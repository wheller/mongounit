'use strict';

const mongoose = require('mongoose'),
      db       = 'mongodb://localhost/mongounit',
      mUser    = require('./model.js');

//mongoose.Promise = global.Promise;

//mongoose.connect(db);


module.exports.create = function(user) {
    var u = new mUser(user);
    var savePromise = u.save((err, jUser) => {
      debugger;
      if(err) {
        console.log('Error Saving '+user.name,err);
//        reject(err);
      } else {
        console.log(user.name+' Saved Successfully');
//        resolve(u._id);
      }
    });
    debugger;
    return savePromise;
//  });
}

module.exports.list = function(query) {
  return new Promise((resolve, reject) => {
    if(!query) { query={}; }
    mUser.find(query,(err, users) => {
      if(err) {
        console.log('Error Listing Users',err);
        reject(err);
      } else {
        console.log('Users: ', users);
        resolve(users);
      }
    });
  });
}
