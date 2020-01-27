let mongoose = require("mongoose");
let moment = require("moment");

let CommentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    date: {
        type: String,
        required: true,
        default: moment().format("D.M.Y HH:mm")
    },
    subComments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        required: true,
        default: []
    }]
});

module.exports = mongoose.model("Comment", CommentSchema);