const mongoose = require('mongoose');

const account_type = new mongoose.Schema({
     user: String
});

const User_schema = new mongoose.Schema({
     name: String,
     email: String,
     phoneNo: String,
     image: String,
     branch: String,
     password: String,
     confirm_password: String,
     roll_no: String,
     user_type: account_type
})

module.exports = mongoose.model('Users', User_schema);