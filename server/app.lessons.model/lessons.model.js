var mongoose = require("mongoose");

var lessonsSchema=mongoose.Schema({
    title: String,
    description: String,
    skill_id: Number,
    image: String,
    author: String,
    pages: {
            id: Number,
            text: String,
            pageImg: String
            },
    quiz:   {
            questions : {
                        id : Number,
                        question: String,
                        score: Number,
                        isMultiSelect: Boolean,
                        answerOptions: Array,
                        correctAnswerIndexes: Array
                        }
            }
});

module.exports=mongoose.model("lessons",lessonsSchema,"lessons");