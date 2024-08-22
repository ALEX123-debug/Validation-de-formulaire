let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')

let errorName = document.getElementById("errorName");
let errorEmail = document.getElementById('errorEmail');
let errorPassword = document.getElementById('errorPassword');
const specialCaracteres = ["@", "#", "!", "&", "*", "-", "_", "'", ";", "]", "[", ")", "(", "=", "+", "\", "/", "]


let submitButton = document.getElementById('btn')

submitButton.addEventListener('click',(e) => {
    
    e.preventDefault();
    if(nameInput.value.index === specialCaracteres.index){
         errorName.textContent = `Le champ ${nameInput.name} ne doit pas contenir de caractères spéciaux.`
         nameInput.style.border = "4px solid red";
    }
    if(nameInput.value.length < 3) {
         
         errorName.textContent = `le champ ${nameInput.name} doit dépassser 3 caractères`;
         errorName.style.color = "red"
         nameInput.style.border = "4px solid red";

    } else {

        nameInput.style.border = "4px solid green";
    }


    if (emailInput.value.length < 4 || emailInput.value.index !== specialCaracteres.index) {
         
        errorEmail.textContent = `le champ ${emailInput.name} doit dépassser 4 caractères et contenir au moins un caractere special`;
        errorEmail.style.color = "red"
        emailInput.style.border = "4px solid red"
    } else {

        emailInput.style.border = "4px solid green";
    }



    if(passwordInput.value.length < 4){
        errorPassword.textContent = `le champ ${passwordInput.name} doit dépassser 4 caractères`;
        errorPassword.style.color = "red"
        passwordInput.style.border = "4px solid red";
    }else {

        passwordInput.style.border = "4px solid green";

    }




})