//Accesibilidad scripts
//Alumno: Alex Fernandez

// Intro btns script
/*
const inTxt = document.getElementById('intro-text');
const estadoOg = inTxt.style.fontWeight;
*/


// ACCESIBILIDAD 
let tamañoTexto = 64; // Tamaño de texto base en píxeles

function aumentarTexto() {
    tamañoTexto += 2;
    document.getElementById('intro-text').style.fontSize = tamañoTexto + 'px';
}

function disminuirTexto() {
    tamañoTexto -= 2;
    document.getElementById('intro-text').style.fontSize = tamañoTexto + 'px';
}

// -----------------------------------------------------
// SÔNA
// Find the progress bar <div> in the DOM.
const progressBar = document.getElementById("percent-loaded");

// Set its ARIA roles and states,
// so that assistive technologies know what kind of widget it is.
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// Create a function that can be called at any time to update
// the value of the progress bar.
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}


// -----------------------------------------------------
// Entrenamientos list
const btnAdd = document.querySelector('#btnAdd');
const btnRemove = document.querySelector('#btnRemove');
const listbox = document.querySelector('#list');
const ejercicios = document.querySelector('#ejercicios');

btnAdd.onclick = (e) => {
e.preventDefault();

// validate the option
if (ejercicios.value == '') {
    alert('Please enter the name.');
    return;
}

// create a new option
const option = new Option(ejercicios.value, ejercicios.value);
 // add it to the list
listbox.add(option, undefined);

// reset the value of the input
ejercicios.value = '';
ejercicios.focus();
};

// remove selected option
btnRemove.onclick = (e) => {
e.preventDefault();

// save the selected options
let selected = [];

for (let i = 0; i < listbox.options.length; i++) {
    selected[i] = listbox.options[i].selected;
}

// remove all selected option
let index = listbox.options.length;
while (index--) {
    if (selected[index]) {
    listbox.remove(index);
    }
}
};

// Entrenamientos programa button
let btnInvalid = document.querySelector('#btnFullList');

btnInvalid.addEventListener('click', (e) => {
    let msgError = [];
                
    let msg = document.querySelector('#messageInvalid');
    msg.textContent = `Oh no! El servicio no funciona ahora mismo… ${msgError.join('+')}`;
});

// Entrenamientos programa button
function checkValidity(id, searchTerm, msg) {
    const elem = document.getElementById(id);
    if (elem.value.includes(searchTerm)) {
      elem.setAttribute("aria-invalid", "false");
      updateAlert();
    } else {
      elem.setAttribute("aria-invalid", "true");
      updateAlert(msg);
    }
  }