'use strict';

const mongoose = require('mongoose'),
      db       = 'mongodb://localhost/mongounit',
      mUser    = require('./model.js');

// 
//  Added to avoid mongoose warning about deprecated promise libraray
//     but then promises don't work at all... D'OH!
//
//mongoose.Promise = global.Promise;
//

//mongoose.connect(db);


module.exports.create = function(user) {
    var u = new mUser(user);
    var savePromise = u.save((err, jUser) => {
      if(err) {
        console.log('Error Saving '+user.name,err);
      } else {
        console.log(user.name+' Saved Successfully');
      }
    });
    // debugger; // breakpoint to analyze promise for resolving mongoose warning
    return savePromise;
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
