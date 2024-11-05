const Mongoose = require('mongoose')
const User = new Mongoose.Schema({
    _id: String,
    t: Number,
    f: Number,
    k: Number,
    t1: Number,
    e: Number,
    c: Number,
    w: Number,
    s: Number
})

module.exports = Mongoose.model('s', User)