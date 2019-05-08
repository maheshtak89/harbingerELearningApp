var mongoose = require("mongoose");

var lessonsmod = require("./../app.lessons.model/lessons.model");

var LessonModel = mongoose.model("lessons");

module.exports ={
   // Get Users function returns all users
    getLessons: function(request,response){
        LessonModel.find().exec(function(err, res) {
            if (err) {
                response.statuscode = 404;
                response.send({ status: response.statuscode, error: err });
              }

              response.statuscode = 200;
              response.send({ status: response.statuscode, data: res });
        })
    }
}