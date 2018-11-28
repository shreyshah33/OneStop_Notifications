const express = require('express');
const router = express.Router();
const mailer = require("../lib/mailer.js")

router.get('/', (req, res) => {
    res.send("Notification Home Page. This is cool");
});

router.post('/sendmail', (req, res) => {
    let body = req.body;
    let subject = body.Subject;
    let message = body.Body;
    let recipients = body.to;
    mailer.sendEmail(recipients,subject,message);
});
module.exports = router;