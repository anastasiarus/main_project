const  {Schema, model, Types}  = require ("mongoose");

const schema = new Schema({
    _id: { type: Types.ObjectId}, 
    firstName: { type: String, allowNull: false},
    lastName: { type: String, allowNull: false},
    friends: [{type: Types.ObjectId, ref: 'Friends'}],
    posts: [{type: Types.ObjectId, ref: 'Posts'}],
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

module.exports = model("User", schema);