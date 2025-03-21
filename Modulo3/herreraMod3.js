/*
Desestructuración de Objetos:

a. Crea un objeto llamado persona que contenga información sobre una persona, como su nombre, edad, dirección, y correo electrónico.

b. Utiliza la desestructuración de objetos para extraer la información de persona y mostrarla en la consola de forma separada (nombre, edad, dirección, correo electrónico).
*/

const persona = {
    nombre: "luis",
    edad: 26,
    direccion: "Argentina",
    correoElectronico: "leggetram@gmail.com"
}

const {nombre, edad, direccion, correoElectronico} = persona
console.log(nombre);
console.log(edad);
console.log(direccion);
console.log(correoElectronico);

//ejemplo renombrando las props de persona

const persona2 = {
    nombre: "juan",
    edad: 28,
    direccion: "Mexico",
    correoElectronico: "Juanchito@hotmail.es"
}

const {nombre: nombrePersona, edad: edadPersona, direccion: direccionPersona, correoElectronico: correoElectronicoPersona} = persona2;

console.log(nombrePersona);
console.log(edadPersona);
console.log(direccionPersona);
console.log(correoElectronicoPersona + "\n\n\n\n");

/*
Consumo de una API:

a. Utiliza la API pública de JSONPlaceholder que proporciona datos ficticios para practicar. En particular, vamos a utilizar la ruta /todos que proporciona una lista de tareas.

b. Utiliza la función fetch para hacer una solicitud GET a la URL https://jsonplaceholder.typicode.com/todos.

c. Maneja la promesa resultante y convierte la respuesta en formato JSON.

d. Utiliza la desestructuración para extraer un objeto de tarea (cualquier tarea) de la lista de tareas obtenida.

e. Muestra en la consola la información de la tarea desestructurada, que generalmente incluye userId, id, title, y completed.

Aplicación de Datos de la API:

a. Crea una función llamada mostrarTarea que tome un objeto de tarea como parámetro y muestre la información de la tarea en el formato deseado (por ejemplo, "Tarea: [title], ID: [id], Completada: [completed]").

b. Llama a la función mostrarTarea pasando el objeto de tarea obtenido de la API como argumento.
*/
console.log("aca empieza el ejercicio de apis \n");
fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => res.json())
.then(response => {
    const tarea = response[0];
    const {userId, id, title, completed} = tarea;
    console.log(userId, id, title, completed);

    function mostrarTarea(tareaEsperada){
        const {title, id, completed} = tareaEsperada;
        console.log(`Tarea: ${title}, ID: ${id}, Completada: ${completed}`);
    }

    mostrarTarea(tarea);
})
.catch(error => console.error("Error al obtener los datos:", error));

