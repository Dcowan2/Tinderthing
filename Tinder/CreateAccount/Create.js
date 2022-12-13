const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const vPassword = document.getElementById('vPassword');

console.log(username);

//make sure username does not exist aready
//get form stuff into a json
//passwords match 
//email is an email



form.addEventListener('submit', (event) => {
    //event.preventDefault();

    validateForm();
});

function validateForm(){
    //gets values of the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value
    const vPasswordValue = vPassword.value

    //USERNAME
    if(usernameValue == ''){ //add a case to see if username is not taken then create a function
        setErrorFor(username, 'Username cannot be blank');
    } else{
        setSuccessFor(username);
    }

    //add other checks in here
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error'
}

function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className = 'form-control success';
}


//push form information to a json
let account = [];
const addAccount = (ev)=>{
    ev.preventDefault();
    let account1 = {
        id: Date.now(),
        username:document.getElementById('username').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
        vPassword:document.getElementById('vPassword').value,
        dogName:document.getElementById('dogName').value,
        dogBreed:document.getElementById('dogBreed').value,
        dogGender:document.getElementById('dogGender').value
    }
    account.push(account1);
    document.forms[0].reset();

    console.warn('added', {account});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(account, '\t', 2);
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addAccount);
});
