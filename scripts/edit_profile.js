document.addEventListener('DOMContentLoaded', () => {
    // Cargar datos actuales desde localStorage
    const userData = JSON.parse(localStorage.getItem('user'));
    
    // Si hay datos del usuario, cargarlos en el formulario
    if (userData) {
        document.getElementById('edit-username').value = userData.username;
    }

    // Manejar envío del formulario
    document.getElementById('edit-profile-form').addEventListener('submit', (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto de envío del formulario

        // Obtener los nuevos valores
        const username = document.getElementById('edit-username').value;
        const password = document.getElementById('edit-password').value;
        
        // Verificar si el nombre de usuario o la contraseña están vacíos
        if (!username || !password) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Actualizar los datos del usuario en localStorage
        localStorage.setItem('user', JSON.stringify({ username, password }));

        // Notificar al usuario que el perfil se ha actualizado
        alert('Perfil actualizado correctamente');

        // Redirigir al usuario al index.html
        window.location.href = '/index.html';  // Asegúrate de que esta ruta sea correcta
    });
});
