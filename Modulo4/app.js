document.addEventListener("DOMcontentLoaded", () => {
    const recognition = new webkitSpeechRecognition() || new SpeechRecpognition();
    const startListeningButton = document.querySelector('.record');
    const taskList = document.querySelector('.tasks');
    const API_BASE = 'http:/localhost:3000/api/notes';

    let recognizing = false;

    recognition.continuos = true;
    recognition.lang = 'es-ES';

    startListeningButton.addEventListener('click', toggleSpeechRecognition);

    const toggleSpeechRecognition = () => {
        recognition = !recognizing;

        if(recognizing) {
            recognition.start();
        }else{
            recognition.stop();
        }
    }

    recognition.onresult = async (event) => {
        console.log(event.results);
    }


    const renderTasks = (tasks) => {
        taskList.innerHTML = ''; // Limpiar la lista de tareas antes de renderizar
        tasks.forEach(task => {
            const {_id:id, done, text} = task;
            const taskElement = document.createElement('li');

            taskElement.innerHTML = `
            <input type = "checkbox" id="${id}" ${done ? 'checked' : ''}>
            <label for="${id}" ${done ? 'style="text-decoration: line-through;"' : ""}>${text}</label>
            <button class="delete-task" data-id="${id}"><i class='bx bx-trash'></i></button>
            `;

            taskList.appendChild(taskElement);
        });
    }

    const loadTasksFromApi = async () => {
        try {
            const response = await fetch(API_BASE);
            const tasks = await response.json();
            renderTasks(tasks);
        } catch (error) {
            console.log("error al cargar tareas: ", error);
        }
    }

    const addTask = async (text) => {
        const task = {
            text: text,
            done: false
        };

        try {
            await fetch(API_BASE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task)
                });
                loadTasksFromApi();
        } catch (error) {
            console.log('Error al agregar tarea: ', error);   
        }
    }
    loadTasksFromApi();
});