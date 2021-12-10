


const nameInput = document.querySelector ("#a-fullname");
const emailInput = document.querySelector ("#a-email");
const phoneInput = document.querySelector ("#a-ph");
const messageInput = document.querySelector ("#a-message");
const error = document.querySelector (".a-error");
const success = document.querySelector ("#a-success");


function validateForm() {
    
    eraseDetails();

    let errorMsg = false;

    if (nameInput.value.length < 1) {
        error[0].innerText="Name cannot be blank";
        nameInput.classList.add("error-border");
        errorMsg = true; 
    }

    if (!validEmail (emailInput.value)){
        error[1].innerText="Invalid email address";
        emailInput.classList.add("error-border"); 
        errorMsg = true;    
    }

    if (phoneInput.value.length < 1){
        error[2].innerText="Phone number cannot be blank";
        phoneInput.classList.add("error-border"); 
        errorMsg = true;   
    }

    if (message.value.length < 1){
        error[3].innerText="Enter your message";
        messageInput.classList.add("error-border");
        errorMsg = true;    
    }

    if (!errorMsg){
        success.innerText="Success!";
    }
}

function eraseDetails () {
    for (let i= 0; i< error.length; i++) {
        error[i].innerText="";
    }
    success.innerText="";
    nameInput.classList.remove ("error-border");
    emailInput.classList.remove ("error-border");
    phoneInput.classList.remove ("error-border");
    messageInput.classList.remove ("error-border");
}

function validEmail (emailInput) {
    let pattern = "";
    return pattern.test(emailInput);
}
