


const nameInput = document.querySelector ("#a-fullname");
const emailInput = document.querySelector ("#a-email");
const phoneInput = document.querySelector ("#a-ph");
const messageInput = document.querySelector ("#a-message");
const error = document.querySelector (".a-error");
const success = document.querySelector ("#a-success");


function validateForm() {
   
    var name = nameInput.value
    console.log(name);

    if (nameInput.value.split(' ') < 5) {
        alert("Name must have two or more words");
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


