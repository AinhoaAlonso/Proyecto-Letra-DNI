console.log('ok enlazado');
"use strict";

const form = document.querySelector('#formdni');
const dniInput = document.querySelector('#dni');
const resultLetterInput = document.querySelector('#dniletter');
const submitButton = document.querySelector('#buttonletter');
const checkVerde = document.querySelector('#checkverde');
const resetButton = document.querySelector('#delete');

const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

submitButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      calculateDniLetter();
    }); 

resetButton.addEventListener('click', function(event) {
        checkVerde.style.display = 'none';
    });

dniInput.addEventListener('input', function(event){
    const inputValue = event.target.value;
    event.target.value = inputValue.replace(/\D/g, '').slice(0, 8); 
});

function calculateDniLetter (){
    let dniLetter = '';
    const dniValue = dniInput.value.trim();

    if (!dniValue) {
        alert('Debes introducir un número de DNI antes de calcular la letra.');
        checkVerde.style.display = 'none';
        return;
    }

    const restoDni = dniValue % 23;
    
    if (restoDni>=0 && restoDni<23){
        dniLetter= letters[restoDni];
        const dniWithLetter = dniValue + '-' + dniLetter;
        dniInput.value = dniWithLetter;
        console.log (dniLetter);
        console.log (restoDni);
        console.log (dniValue);

        checkVerde.src ="images/checkverde.jpg"
        checkVerde.style.display = 'inline';

    } else{

        alert ('El DNI introducido no es válido');
        checkVerde.style.display = 'none';
    }
   
   
}
