const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Have to have an author"],
        minlength: [3, "Must have first and last name"]
    }
})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;