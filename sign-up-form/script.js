
//function to validate if the password is a match to the password-confirmation
function checkPassword(){
    const userPassword = document.getElementById("user-password").value
    const passwordConfirmation = document.getElementById("password-confirmation").value
    const validationNo = document.querySelector(".validation-no");
    const validationYes = document.querySelector(".validation-yes");

    if (userPassword != passwordConfirmation){
        validationNo.textContent = "Passwords don't match";
    }
    else {
        validationYes.textContentCon = "Passwords match";
    }
}

