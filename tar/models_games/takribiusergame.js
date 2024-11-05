const { Schema, model } = require('mongoose')

module.exports = model("Takribi Users Game Database", Schema({
    id: { type: String, default: null },
    with: { type: String, default: null },
    msgID: { type: String, default: null },
    numbers: { type: Array, default: [] },
    result: { type: String, default: 0 }
    }));