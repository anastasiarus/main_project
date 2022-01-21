const  {Schema, model}  = require ("mongoose");

const schema = new Schema({
    firstName: { type: String, allowNull: false},
    lastName: { type: String, allowNull: false}
});

module.exports = model("Friends", schema);