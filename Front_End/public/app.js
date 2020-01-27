function showResult(text) {
    console.log(JSON.parse(text).google_response.success);

    if (JSON.parse(text).google_response.success) {

        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        console.log("Name: " + firstName + " " + lastName)
        console.log("Email: " + email)
        console.log("Message: " + message)

        document.querySelector("#success").innerHTML = "Thank you, your form has been submitted"
    }

    else {
        document.querySelector("#success").innerHTML = "Did not pass recaptcha"
    }
}

function handleClick(token) {
    return function () {
        var firstName = document.querySelector("#firstName").value;
        var lastName = document.querySelector("#lastName").value;
        var email = document.querySelector("#email").value;
        var message = document.querySelector("#message").value;
        var data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message,
            token: token
        };

        fetch("/send", {
            headers: {
                "Accept": "applicatin/json",
                "Content-Type": "application/json"
            },
            method: "post",
            body: JSON.stringify(data)
        })
            .then(response => response.text())
            .then(text => showResult(text))
            .catch(error => showResult(error));
    }
}

grecaptcha.ready(function () {
    grecaptcha.execute("6LeZYtAUAAAAAG63Un50E5HhFtT59FM5Q-sdFxKg", { action: "homepage" })
        .then(function (token) {
            document.querySelector('#submitBtn').addEventListener('click', handleClick(token));
        });
});



