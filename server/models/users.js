const  {Schema, model, Types}  = require ("mongoose");

const schema = new Schema({
    _id: { type: Types.ObjectId}, 
    firstName: { type: String, allowNull: false},
    lastName: { type: String, allowNull: false},
    ava: [{type: Types.ObjectId, allowNull: true, defaultValue:'https://avatars.mds.yandex.net/get-images-cbir/1582893/ox1M2xkqDcVeJSfxJJQaUw3227/ocr'}],
    friends: [{type: Types.ObjectId, ref: 'Friends'}],
    posts: [{type: Types.ObjectId, ref: 'Posts'}],
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

module.exports = model("User", schema);