const express = require('express');
const sendMail = require('./mail');
const log = console.log;
const app = express();
const path = require('path');
const router = express.Router();
const PORT = 8080;

// Configuring our data parsing
app.use(express.urlencoded({
    extend: false
}));
app.use(express.json());

app.post('/email', (req, res) => {
    //send email here
    const { name, subject, email, text } = req.body;
    console.log('Data: ', req.body);

    sendMail(name, email, subject, text, function(err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
            res.status({ message: 'Email sent!!!' });
        }
    });
    // res.json({ message: 'Message received!!!' })
});

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'landing.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});