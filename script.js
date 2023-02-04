let pass1 = document.querySelector("#password");
let pass2 = document.querySelector("#confirm-password");
let result = document.querySelector("#result");

function checkPassword(){
    result.innerText = pass1.value == pass2.value ? "" : "* Passwords do not match";
}

pass1.addEventListener('keyup', () => {
    if (pass2.value.length != 0) checkPassword();
});

pass2.addEventListener('keyup', checkPassword);