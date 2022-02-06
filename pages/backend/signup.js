// gathers email from form then stores it in emails.json

// function to store email in emails.json
function storeEmail(email) {
    // get email from what user has submitted
    var email = document.getElementById("email").value;
    
    // if email is not empty
    if (email != "") {
        // get email from emails.json
        var emails = JSON.parse(localStorage.getItem("emails"));
        
        // if emails is null
        if (emails == null) {
            emails = [];
        }
        
        // add email to emails
        emails.push(email);
        
        // store emails in emails.json
        localStorage.setItem("emails", JSON.stringify(emails));
    }

    // riderect user to thank you page
    window.location.href = "thankyou.html";

}

