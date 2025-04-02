document.addEventListener(DOMcontentLoaded, () => {
    const recognition = new webkitSpeechRecognition() || new SpeechRecpognition();
    const startListeningButton = document.querySelector('.record');
    const taskList = document.querySelector('.tasks');

    let recognizing = false;

    recognition.continuos = true;
    recognition.lang = 'es-ES';

    const renderTasks = () => {

    }

    const loadTasksFromApi = async () => {
        try {
            const response = await fetch('');
        } catch (error) {
            
        }
    }
});