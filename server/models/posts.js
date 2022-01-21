const  {Schema, model}  = require ("mongoose");

const schema = new Schema({
    title: { type: String, allowNull: false},
    descText: { type: String, allowNull: false}
});

module.exports = model("Posts", schema);