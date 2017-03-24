'use strict';

const mongoose = require('mongoose'),
      db       = 'mongodb://localhost/mongounit',
      users = require('./src/mongo');

mongoose.connect(db);


console.log('Creating Joe');
users.create({
  name:'joe',
  username:'jbanks'
}).then(() => {
  console.log('Creating Chris');
  users.create({
    name:'chris',
    username:'cknight'
  });
}).then(()=>{
  users.list().then(()=>{process.exit(0)});
});
