/* Code adapted from  Code institute "Sending Emails Using EmailJS" lesson */

function sendMail(contactForm) {
    console.log("Hello!")
    emailjs.send("service_4panlki", "ms2_robdav", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.questionsfeedback.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}


/* Code adapted from https://www.geeksforgeeks.org/ form validation */

function formValidation() {
    var name = document.forms["RegForm"]["name"];
    var emailaddres = document.forms["RegForm"]["emailaddres"];
    
    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (emailaddres.value == "") {
        window.alert("Please enter a valid e-mail address.");
        emailaddres.focus();
        return false;
    }

    return true;
}

/* Code adapted from https://www.codegrepper.com/  display text onclick */ 
function validation() {
    document.getElementById("validated").innerHTML = "Thank you for your message!";
}
