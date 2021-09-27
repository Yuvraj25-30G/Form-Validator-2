// using if statements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success outline
function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//email validation
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function checkRequired(arr) {
    arr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, input.id.charAt(0).toUpperCase()+input.id.slice(1)+' is required'); // concatenation
        } else{
            showSuccess(input);
        }
    })
}


function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input, input.id.charAt(0).toUpperCase()+input.id.slice(1)+' must be more than ' + min);
    } else if(input.value.length > max){
        showError(input, input.id.charAt(0).toUpperCase()+input.id.slice(1)+'must be less than ' + max);
    } else {
        showSuccess(input);
    }
}
// password matching
function passwordMatch(input1 , input2) {
    if(input1.value !== input2.value) {
        showError(input2,'Password must match')
    }
}

// Event listers
form.addEventListener('submit', function(e){
    e.preventDefault();


    checkRequired([username, email, password, password2]);
    validateEmail(email);
    checkLength(username, 3, 15);
    checkLength(password, 8, 16);
    passwordMatch(password,password2);
})
