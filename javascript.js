const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmpassword');
const passwordDiv = document.querySelector('#comparePW');
const passwordDivChildren = passwordDiv.childNodes;

function validatePassword(){
    if(password != confirmPassword && password.value.length != 0){
        // make a paragraph and remove all paras.. i guess?
        if(passwordDiv.innerHTML.indexOf("*") !== 145){
            passwordDivChildren.forEach(c => c.nodeType === Node.TEXT_NODE && c.remove());
            //const textToAdd = document.createTextNode("* The two passwords are not the same!");
            //textToAdd.style.color = "red";
            //passwordDiv.appendChild(textToAdd);
            password.after("* The two passwords are not the same!");
        }

    }
    if(password.value === confirmPassword.value && password.value.length > 0){
        passwordDivChildren.forEach(c => c.nodeType === Node.TEXT_NODE && c.remove());

    }

    if(password.value.length === 0 && confirmPassword.value.length === 0){
        passwordDivChildren.forEach(c => c.nodeType === Node.TEXT_NODE && c.remove());
    }

};


password.addEventListener("input", event => {
    validatePassword();
});


confirmPassword.addEventListener("input", event => {
    validatePassword();
});


