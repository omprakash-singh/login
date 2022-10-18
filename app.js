const express = require('express');
const mongoose = require('mongoose')
const User = require('./usermodel');
const Commnet = require('./comment');
const app = express();

const password = "Gat4OXVMM9ncv11S";
const DB = `mongodb+srv://omprakashsingh:${password}@cluster0.jfhuf3m.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(DB, {
     useCreateIndex: true,
     useFindAndModify: true,
     useNewUrlParser: true,
     useUnifiedTopology: true
}).then(() => {
     console.log("Database connect Sucessfully...");
}).catch((err) => {
     console.log("Something is error in database..");
     console.log(err);
})

// app.get('/', async (req, res) => {
//      await Commnet.find()
//           .populate("author")
//           .then(p => console.log(p))
//           .catch(error => console.log(error));
// })

app.post('/', async (req, res) => {

     const saveUser = new User({
          name: 'om',
          user_type: {
               user: 'admin'
          }
     })
     await saveUser.save().then(doc => {
          console.log(doc);
          res.render('login')
     }).catch(err => {
          res.json(err)
     })
     console.log("Post is working");
})

app.post('/comment', async (req, res) => {
     const commentUser = new Commnet({
          text: "This is comment",
          author: "634d4a4af16de579d4a403ab"
     });
     await commentUser.save().then(doc => {
          console.log(doc);
     }).catch(err => {
          res.json(err)
     })
})

app.listen(8000, () => {
     console.log("Server Start");
})