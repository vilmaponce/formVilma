// Agrega evento de input a los campos de texto
document.getElementById('nombre').addEventListener('blur', validarNombre);
document.getElementById('apellido').addEventListener('blur', validarApellido);
document.getElementById('email').addEventListener('blur', validarEmail);
document.getElementById('fecha_nacimiento').addEventListener('blur', validarFechaNacimiento);
document.getElementById('pais').addEventListener('blur', validarPais);

function validarNombre() {
    let nombre = document.getElementById('nombre').value;
    let errorNombre = document.getElementById('error-nombre');
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        errorNombre.textContent = "El nombre solo debe contener letras y espacios.";
    } else {
        errorNombre.textContent = "";
    }
}

function validarApellido() {
    let apellido = document.getElementById('apellido').value;
    let errorApellido = document.getElementById('error-apellido');
    if (!/^[a-zA-Z\s]+$/.test(apellido)) {
        errorApellido.textContent = "El apellido solo debe contener letras y espacios.";
    } else {
        errorApellido.textContent = "";
    }
}

function validarEmail() {
    let email = document.getElementById('email').value;
    let errorEmail = document.getElementById('error-email');
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorEmail.textContent = "El correo electrónico no es válido.";
    } else {
        errorEmail.textContent = "";
    }
}

function validarFechaNacimiento() {
    let fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    let errorFechaNacimiento = document.getElementById('error-fecha_nacimiento');
    let fechaActual = new Date().toISOString().split('T')[0];
    if (fechaNacimiento >= fechaActual) {
        errorFechaNacimiento.textContent = "La fecha de nacimiento debe ser una fecha pasada.";
    } else {
        errorFechaNacimiento.textContent = "";
    }
}

function validarPais() {
    let pais = document.getElementById('pais').value;
    let errorPais = document.getElementById('error-pais');
    if (!/^[a-zA-Z\s]+$/.test(pais)) {
        errorPais.textContent = "El país de residencia solo debe contener letras y espacios.";
    } else {
        errorPais.textContent = "";
    }
}

function enableHighContrast() {
    let link = document.getElementById('altocontraste');
    link.disabled = false; // Habilita el CSS de alto contraste
}

function disableHighContrast() {
    let link = document.getElementById('altocontraste');
    link.disabled = true; // Deshabilita el CSS de alto contraste
}

// Modal funcionalidad
const form = document.getElementById('personal-form');
const modal = document.getElementById('successModal');
const closeBtn = document.querySelector('.modal .close');

form.addEventListener('submit', function (event) {
    console.log('Submit event triggered');
    event.preventDefault(); // Evita el envío real del formulario
    modal.style.display = 'block'; // Muestra el modal
    console.log('Modal displayed');
    form.reset(); // Reinicia el formulario
});

closeBtn.addEventListener('click', function () {
    console.log('Close button clicked');
    modal.style.display = 'none'; // Oculta el modal
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        console.log('Outside modal clicked');
        modal.style.display = 'none'; // Oculta el modal si se hace clic fuera del contenido del modal
    }
});