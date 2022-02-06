// stores email from form from signup.html in mail.json

function storeEmail() {
    const email = document.getElementById('from-email').value;
    const data = {
        email: email
    };
    const json = JSON.stringify(data);
    fs.writeFile('mail.json', json, 'utf8', function(err) {
        if (err) {
            console.log('Error: ', err);
        } else {
            console.log('Successfully written to file');
        }
    });
}