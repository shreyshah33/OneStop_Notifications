const nodemailer = require('nodemailer');
const config = require('../../config')

const transporter = nodemailer.createTransport({
    host: config.EMAIL_HOST,
    port: config.EMAIL_PORT,
    auth: {
        user: config.EMAIL_USERNAME,
        pass: config.EMAIL_PASSWORD
    }
});

/**
 * Send email to recipients with a message.
 * @param {[String]} recipients List of emails
 * @param {String} subject Subject field of message
 * @param {String} message Message to send
 * @return {Promise}
 */
module.exports.sendEmail = (recipients, subject, message) => {
    if(!recipients && !subject && !message){
        return Promise.reject({error: "Invalid parameters"})
    }
    return new Promise((resolve, reject) => {
        transporter.sendMail({
            from: config.EMAIL_USERNAME,
            to: recipients,
            subject: subject,
            text: message
        }, (err, info) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(info);
        })
    })
}