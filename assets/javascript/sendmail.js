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

