const mongoose = require("mongoose");

const user = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    coins: {
        type: Number,
        default: 0
    },
    challangeStatus: {
        type: String,
        default: "all"
    },
    blockList: {
        type: Array,
        default: []
    },
    friendList: {
        type: Array,
        default: []
    },
    use: {
        type: Boolean,
        default: false
    },
    status_playing: {
        type: String,
        default: "no"
    },
    withdraw_amount: {
        type: String,
        default: 0
    },
    wins: {
        type: Number,
        default: 0
    },
    wins_money: {
		type: Number,
        default: 0
    },
    loses: {
        type: Number,
        default: 0
    },
    loses_money: {
		type: Number,
        default: 0
    },
    premiumExpires: {
        type: Date, 
        default: null 
    },
    dailytime: { 
        type: String, 
        default: ""
    },
})

module.exports = mongoose.model("users", user);