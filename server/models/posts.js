const  {Schema, model}  = require ("mongoose");

const schema = new Schema({
    id: {type: String, required: true, unique: true},
    descText: { type: String, allowNull: false}
});

module.exports = model("Post", schema);