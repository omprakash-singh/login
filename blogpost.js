const mongoose = require('mongoose');

const blog_Schema = new mongoose.Schema({
     title: String,
     post: String,
     author: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "Users"
     },
     comment: [
          {
               type: mongoose.SchemaType.ObjectId,
               ref: "Comment"
          }
     ]
})

module.exports = mongoose.model("Blogpost", blog_Schema)