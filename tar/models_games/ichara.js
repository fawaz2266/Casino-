const { Schema,model } = require('mongoose')

module.exports = model("Nrd Game Database", Schema({
msgID: { type: String, default: null },
players: { type: Array, default: []},
idstusr: { type: String, defualt: null},
role: { type: String, default: null},
notrole: { type: String, default: null}
}));