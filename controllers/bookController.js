const createError = require('http-errors');

const books = ["Best Book Ever", "Second Best Book Ever", "Third Best Book Ever"];

exports.showBooks = (req, res, next) => {
    res.send(books)
}