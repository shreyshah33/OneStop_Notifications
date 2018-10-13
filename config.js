// CONFIGURATION FILE FOR APPLICATION
require('dotenv').config()

module.exports.PORT = 3000;

module.exports.EMAIL_HOST = "smtp.ethereal.email";
module.exports.EMAIL_PORT = 587;
module.exports.EMAIL_USERNAME = process.env.EMAIL_USERNAME;
module.exports.EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;