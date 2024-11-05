const { Schema,model } = require('mongoose')


module.exports = model("Nrd Users Game Database", Schema({
id: { type: String, default: null },
with: { type: String, default: null },
numbers: { type: Array, defualt: [] },
result: { type: String, defualt: 0},
attempt: { type: String, default: 0 }
}));