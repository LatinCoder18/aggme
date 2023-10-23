// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtén el formulario y el campo de nombre de usuario
    const usernameForm = document.getElementById('usernameForm');
    const usernameInput = document.getElementById('username');

    // Agrega el evento submit al formulario
    usernameForm.addEventListener('submit', function (event) {
        // Detén el envío del formulario
        event.preventDefault();

        // Obtiene el valor del campo de nombre de usuario
        const username = usernameInput.value;

        // Realiza las validaciones
        if (username.trim() === '') {
            alert('El nombre de usuario no puede estar vacío.');
        } else if (/\s/.test(username)) {
            alert('El nombre de usuario no puede contener espacios.');
        } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
            alert('El nombre de usuario solo puede contener letras y números.');
        } else {
            // Si pasa todas las validaciones, puedes enviar el formulario o realizar otras acciones aquí
            alert('Formulario enviado con éxito.');
            usernameForm.submit(); // Envía el formulario
        }
    });
});