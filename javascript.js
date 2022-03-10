const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmpassword');
const passwordDiv = document.querySelector('#comparePW');
// const passwordDivChildren = passwordDiv.childNodes;
const errorDiv = document.getElementById("error");
errorDiv.style.color = "red";
const errorDivChildren = errorDiv.childNodes;


function validatePassword(){
    if(password != confirmPassword && password.value.length != 0){
        
        // make a paragraph and remove all paras.. i guess?
        if(passwordDiv.innerHTML.indexOf("*") !== 145){
            errorDivChildren.forEach(c => c.nodeType === Node.TEXT_NODE && c.remove());
            const textToAdd = document.createTextNode("* The passwords do not match!");
            // textToAdd.style.color = "red";
            //passwordDiv.appendChild(textToAdd);
            errorDiv.appendChild(textToAdd);

            // errorDiv.before("* The passwords don't match!");
            // password.after("* The passwords don't match!");
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


