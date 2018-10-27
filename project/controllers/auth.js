const User = require('../models/user');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/onestop');

async function createUser(email, username, password) {
    let userData = {
        email,
        username,
        password
    }
    let user = await User.create(userData);
    return user;
}

module.exports.createUser = createUser;
