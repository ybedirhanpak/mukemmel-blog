let mongoose = require("mongoose");

let TagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model("Tag", TagSchema);