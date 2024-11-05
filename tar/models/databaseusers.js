const { Schema,model } = require('mongoose')

module.exports = model("Database Users", Schema({

    id: { type: String, required: true },

    coins: { type: String, default: 0},

    status_playing: { type: String, default: "no"}

    }));