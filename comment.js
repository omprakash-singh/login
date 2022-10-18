const mongoose = require('mongoose');

const comment_schema = new mongoose.Schema({
     text: String,
     author: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "Users"
     },
     blog: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "BlogPost"
     }
})

module.exports = mongoose.model("Comment", comment_schema);