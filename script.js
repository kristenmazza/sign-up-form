let pass1 = document.querySelector("#password");
let pass2 = document.querySelector("#confirm-password");
let result = document.querySelector("#result");

function checkPassword(){
    if (pass1.value === pass2.value) {
        result.innerText = "";
        pass1.classList.remove("error");
        pass2.classList.remove("error");
    } else {
        result.innerText = "* Passwords do not match";
        pass1.classList.add("error");
        pass2.classList.add("error");
    }
}

pass1.addEventListener('keyup', () => {
    if (pass2.value.length != 0) checkPassword();
});

pass2.addEventListener('keyup', checkPassword);