const User = require('../models/user');

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
