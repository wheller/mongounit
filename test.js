'use strict';

var mongoose = require('mongoose');
var Mockgoose = require('mockgoose').Mockgoose;
var mockgoose = new Mockgoose(mongoose);

mockgoose.prepareStorage().then(function() {
  console.log('Storage Prepared');
	mongoose.connect('mongodb://localhost/mongounit');
	mongoose.connection.on('connected', () => {
	  console.log('db connection is now open on port '+mongoose.connection.port);

    debugger;

    var users = require('./src/mongo');
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
      users.list().then(()=>{
        mongoose.connection.close();
        process.exit(0)
      });
    });

	});
});
