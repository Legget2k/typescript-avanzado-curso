// Selecciona todos los elementos arrastrables y las zonas de destino
const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');
const historySection = document.getElementById('localStorageItems'); // Selecciona la sección del historial
const historyList = document.createElement('ul'); // Crea una lista para mostrar el historial
historySection.appendChild(historyList); // Agrega la lista a la sección del historial

// Función para manejar el evento dragstart
const handleDragStart = (e) => {
    e.dataTransfer.setData('text', e.target.id); // Guarda el ID del elemento arrastrado
};

// Función para manejar el evento dragover
const handleDragOver = (e) => {
    e.preventDefault(); // Permite soltar el elemento
};

// Función para manejar el evento drop
const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text'); // Obtiene el ID del elemento arrastrado
    const draggedElement = document.getElementById(data); // Selecciona el elemento arrastrado
    const clonedElement = draggedElement.cloneNode(true); // Clona el elemento arrastrado

    // Agrega el ID del elemento al historial en localStorage
    const history = JSON.parse(localStorage.getItem('droppedElements')) || [];
    history.push({ id: data, timestamp: new Date().toLocaleString() });
    localStorage.setItem('droppedElements', JSON.stringify(history));

    e.target.appendChild(clonedElement); // Lo agrega a la zona de destino

    // Actualiza la visualización del historial
    renderHistory();
};

// Función para renderizar el historial desde localStorage
const renderHistory = () => {
    const history = JSON.parse(localStorage.getItem('droppedElements')) || [];
    historyList.innerHTML = ''; // Limpia la lista antes de volver a renderizar

    history.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Elemento: ${item.id}, Fecha: ${item.timestamp}`;
        historyList.appendChild(listItem);
    });
};

// Asigna eventos a todos los elementos arrastrables
draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', handleDragStart);
});

// Asigna eventos a todas las zonas de destino
dropzones.forEach((dropzone) => {
    dropzone.addEventListener('dragover', handleDragOver);
    dropzone.addEventListener('drop', handleDrop);
});

// Función para reiniciar el localStorage
const resetLocalStorage = () => {
    localStorage.clear(); // Borra todo el contenido del localStorage
    historyList.innerHTML = ''; // Limpia la lista del historial en la interfaz
    console.log("LocalStorage reiniciado");
};

// Asigna el evento al botón de reinicio
document.getElementById('reset-localstorage').addEventListener('click', resetLocalStorage);

// Renderiza el historial al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderHistory();
});