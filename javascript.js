const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmpassword');
const passwordDiv = document.querySelector('#comparePW');

const errorDiv = document.getElementById("error");
errorDiv.style.color = "red";



function validatePassword(){
    const errorDivChildren = errorDiv.childNodes;
    if(password != confirmPassword && password.value.length != 0){
        if(passwordDiv.innerHTML.indexOf("*") !== 145){
            errorDivChildren.forEach(c => c.nodeType === Node.TEXT_NODE && c.remove());
            const textToAdd = document.createTextNode("* Passwords do not match!");
            errorDiv.appendChild(textToAdd);
        }

    }
    if(password.value === confirmPassword.value && password.value.length > 0){
        errorDivChildren.forEach(c => c.nodeType === Node.TEXT_NODE && c.remove());

    }

    if(password.value.length === 0 && confirmPassword.value.length === 0){
        errorDivChildren.forEach(c => c.nodeType === Node.TEXT_NODE && c.remove());
    }

};


password.addEventListener("input", event => {
    validatePassword();
});


confirmPassword.addEventListener("input", event => {
    validatePassword();
});


