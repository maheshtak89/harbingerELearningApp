var express = require('express');
var instance = express();
module.exports= instance;

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var cors = require("cors");
instance.use(cors());

var bodyParser = require("body-parser");
instance.use(bodyParser.urlencoded({ extended: false }));
instance.use(bodyParser.json());

// var roles = require("./app.personinfo.dals/roles.dals");
// var users = require("./app.personinfo.dals/users.dals");
// var auth = require("./app.personinfo.common/authentication");
// var personInfo = require("./app.personinfo.dals/personinformation.dal");

var lessons = require('./app.lessons.dals/lessons.dal');
var skills = require('./app.lessons.dals/skills.dal');

var connection= mongoose.connect(
  "mongodb://localhost/learningAppDB",
  { useNewUrlParser: true }
);

module.exports= connection;

var dbConnect = mongoose.connection;
if(!dbConnect) {
  console.log("Connection is established");
  return;
}


// get collection of lessons
instance.get("/api/lessons", function( request , response ) {
    lessons.getLessons(request, response);

});

// get collection of skills
instance.get("/api/skills", function( request , response ) {
  skills.getSkills(request, response);

});

//get a skill by skill_Id
instance.get("/api/skillById", function( request , response ) {
  skills.getSkillById(request, response);

});

// to create 
instance.listen(4040, function() {
  console.log("Started listening on port 4040");
});