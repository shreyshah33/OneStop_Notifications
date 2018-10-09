const assert = require('assert');
const mailer = require('../lib/mailer.js')

describe('mailer', function() {
    describe('#sendEmail()', function() {
        it('should send an email to specified email with correct details', function() {
            this.timeout(5000);
            return mailer.sendEmail(["one@email.com","two@email.com","three@email.com"],"This is a subject", "This is a message body")
        });
    });
});