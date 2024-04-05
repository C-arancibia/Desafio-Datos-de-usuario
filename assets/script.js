// Definir una función IIFE para ser invocada al cargar la página
(async () => {
    try {
      // Realizar la solicitud a la API para obtener datos de usuarios
    const response = await fetch('https://randomuser.me/api/?results=10');
    
      // Verificar si la solicitud fue exitosa
    if (!response.ok) {
        throw new Error('Error al obtener los datos de usuarios');
    }

      // Obtener los datos de la respuesta en formato JSON
    const data = await response.json();

      // Obtener el contenedor donde mostraremos la información de los usuarios
    const userDataContainer = document.getElementById('user-data');

      // Limpiar el contenido anterior del contenedor
    userDataContainer.innerHTML = '';

      // Mostrar cada usuario en el HTML utilizando etiquetas de párrafo
    data.results.forEach(user => {
        const userParagraph = document.createElement('p');
        userParagraph.textContent = `${user.name.first} ${user.name.last}, ${user.email}`;
        userDataContainer.appendChild(userParagraph);
    });
    } catch (error) {
      // Manejar errores
    console.error('Error:', error.message);
    }
})();
