const assert = require('assert');
const mailer = require('../lib/mailer.js')
const database = require('../lib/database.js')

describe('mailer', function() {
    describe('#sendEmail()', function() {
        it('should send an email to specified email with correct details', function() {
            this.timeout(5000);
            return mailer.sendEmail(["one@email.com","two@email.com","three@email.com"],"This is a subject", "This is a message body")
        });
        it('should send an email to people fetched from the database', function() {
            this.timeout(5000);
            return database.getEmailRecipientsFor("aggie-coding-club").then((emails) => {
                return mailer.sendEmail(emails,"This is a subject", "This is a message body")
            })
        });
    });
});