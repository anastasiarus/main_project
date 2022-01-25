const  {Schema, model}  = require ("mongoose");

const schema = new Schema({
    postId: {type: Number},
    descText: { type: String, allowNull: false}
});

module.exports = model("Post", schema);