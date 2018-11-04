const User = require('../models/user');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/onestop');

async function createUser(email, username, password) {
    let userData = {
        email,
        username,
        password
    }
    let user = await User.create(userData);
   
    User.create(userData, function (error, user) {
        if (error) {
          return error;
        } else {
          req.session.userId = user._id;
          return res.redirect('/profile');
        }
      });
      return user;
}

async function authUser(logemail, logpassword) {
    User.authenticate(logemail, logpassword, function (error, user) {
        if (error || !user) {
          var err = new Error('Wrong email or password.');
          err.status = 401;
          return err;
        } else {
          req.session.userId = user._id;
          return res.redirect('/profile');
        }
    });
}

function errorUser () {
    var err = new Error('All fields required.');
    err.status = 400;
    return res.send('Error');
}

module.exports.createUser = createUser;
