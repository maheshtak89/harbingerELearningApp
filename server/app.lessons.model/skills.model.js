var mongoose = require("mongoose");

var skillSchema=mongoose.Schema({
    _id: String,
    name: String,
    description: String,
    developedBy: String,
    type: String,
    img: String,
    licence: String
});

module.exports=mongoose.model("skills",skillSchema,"skills");