const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'ef2b0b4521a5c2db689bd51083b68b0a-c250c684-865ea41a',
        domain: 'sandbox3e4eb8868c2c4779bda25c976accbc01.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, cb) => {
    const mailOptions = {
        sender: name,
        from: email,
        to: 'omarsumon1030@gmail.com',
    };
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

// Exporting the sendmail
module.exports = sendMail;