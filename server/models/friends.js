const  {Schema, model}  = require ("mongoose");

const schema = new Schema({
    friendId: {type: Number},
    firstName: { type: String, allowNull: false, ref: 'User'},
    lastName: { type: String, allowNull: false, ref: 'User'}
});

module.exports = model("Friends", schema);