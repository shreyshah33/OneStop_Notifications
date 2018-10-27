var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
});

//hashing a password before saving it to the database


UserSchema.pre('save', function () {
  var user = this;
  bcrypt.hash(user.password, 12, async function (err, hash){
    if (err) {
      return err;
    }
    user.password = await hash;
   
  })
});


var User = mongoose.model('User', UserSchema);
module.exports = User;



