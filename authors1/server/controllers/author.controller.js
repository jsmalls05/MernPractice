const Author = require("../models/author.models");

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuth => res.json({ authors: allAuth }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }))
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params._id })
        .then(oneAuth => res.json({ author: oneAuth }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }))
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuth => res.json({ author: newAuth }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }))
}

module.exports.deleteAuthor = (req, res) => {
    Author.remove({ _id: req.params._id })
        .then(res.json({ message: "That was not a good Author" }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }))
}

module.exports.updateAuthor = (req, res) => {
    Author.update({ _id: req.params._id }, {
            $set: {
                name: req.body.name
            }
        }, { runValidators: true })
        .then(allAuth => res.json({ authors: allAuth }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }))
}