const nodemailer = require('nodemailer');
const config = require('../../config')

const transporter = nodemailer.createTransport({
    service: 'gmail',
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
 */
module.exports.sendEmail = async (recipients, subject, message) => {
    //Setting emailing options
    const mailOptions = {
        from: `${config.EMAIL_USERNAME}`, 
        to: `${recipients}`, 
        subject: `${subject}`, 
        text: `${message}`
    };
    
    //sending the email
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
        console.log(err.code); // displaying only the error code
    });
}