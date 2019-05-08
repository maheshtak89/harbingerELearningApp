var mongoose = require("mongoose");

var skillsmod = require("./../app.lessons.model/skills.model");

var SkillModel = mongoose.model("skills");

module.exports ={
    
   // getSkills function returns all skills
    getSkills: function(request,response){
        console.log('in getSkills dal');
        SkillModel.find().exec(function(err, res) {
            if (err) {
                response.statuscode = 404;
                response.send({ status: response.statuscode, error: err });
              }

              response.statuscode = 200;
              response.send({ status: response.statuscode, data: res });
        })
    },

    getSkillById: function(request, response){
        condition = {"skill_Id": request.headers.skill_Id}
        SkillModel.find(condition).exec(function(err, res) {
            if (err) {
                response.statuscode = 404;
                response.send({ status: response.statuscode, error: err });
              }

              response.statuscode = 200;
              response.send({ status: response.statuscode, data: res });
        })
    }
}