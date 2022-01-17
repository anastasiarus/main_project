const  {Schema, model}  = require ("mongoose");

const schema = new Schema({
    firstName: { type: String, allowNull: false},
    lastName: { type: String, allowNull: false},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

module.exports = model("User", schema);