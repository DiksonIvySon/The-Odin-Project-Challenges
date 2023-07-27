
//function to validate if the password is a match to the password-confirmation
function checkPassword(){
    const userPassword = document.getElementById("user-password").value
    const passwordConfirmation = document.getElementById("password-confirmation").value
    const validationMessage = document.querySelector(".validation-message");

    if (userPassword != passwordConfirmation){
        validationMessage.textContent = "Passwords don't match";
        validationMessage.style.color = "red";
    }
    else {
        validationMessage.textContent = "Passwords match";
        validationMessage.style.color = "green";
    }
}

