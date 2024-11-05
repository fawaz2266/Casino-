const { Schema,model } = require('mongoose')


module.exports = model("Takribi Game Database", Schema({
msgID: { type: String, default: null },
idstusr: { type: String, default: null },
role: { type: String, default: null },
notrole: { type: String, default: null },
number_smaller1 : { type: String, default: 0 },
number_smaller2: { type: String, default: 0 },
number_greater1: { type: String, default: 0} ,
number_greater2: { type: String, default: 0 },
max_number: { type: String, default: 0 },
number_players_done: { type: String, default: 0}
}));