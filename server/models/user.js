let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    realName: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }]
});

module.exports = mongoose.model("User", UserSchema);