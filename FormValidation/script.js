const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById("password2");
const msgContainer = document.querySelector('.message-container');
const msg = document.getElementById('message');

let isValid = false;

function validateForm(){
    //contraint api
    isValid = form.checkValidity();
    // error msg
    if(!isValid){
        msg.textContent = "Please fill out all fields.";
        msg.style.color = "red";
        msgContainer.style.borderColor = "red";
        return;
    }

    if(password1El.value === password2El.value){
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = "green";
    }else {
        passwordsMatch = false;
        msg.textContent = "Make sure passwords match.";
        msg.style.color = 'red';
        msgContainer.style.borderColor = 'red';
        password1El.style.borderColor = "red";
        password2El.style.borderColor = "red";
        return;
    }

    //if valid form & pass
    if(isValid && passwordsMatch){
        msg.textContent = "Successfully Registered!";
        msg.style.color = 'green';
        msgContainer.style.borderColor = 'green';
    }
}


function storeFormData(){
    const user = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      website: form.website.value,
      password: form.password.value,
    };

    //do something with user data
    console.log(user);
}

function processFormData(e){
    e.preventDefault();
    //validate
    validateForm();
    //submit if valid
    if(isValid && passwordsMatch){
        storeFormData();
    }
    
}

//Event listener

form.addEventListener('submit',processFormData)