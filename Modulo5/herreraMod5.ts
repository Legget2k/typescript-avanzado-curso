/*
Objetivo: Esta actividad tiene como objetivo familiarizar a los estudiantes con el uso de literales de cadenas y números en TypeScript para mejorar su comprensión de los tipos de datos.

Instrucciones:

Parte 1: Literales de Cadenas

a. Crea una variable color y asígnale un valor de tipo literal de cadena que represente un color (por ejemplo, 'rojo', 'verde' o 'azul').

b. Intenta asignar un valor que no sea una de las opciones mencionadas. Observa cómo TypeScript te da un error.

c. Crea una función que acepte solo los tres colores mencionados como argumento y que imprima el color en la consola.

d. Llama a esta función con diferentes colores y verifica que solo acepte los tres colores especificados.

Parte 2: Literales Numéricos

a. Crea una variable edad y asígnale un valor de tipo literal numérico (por ejemplo, 21, 18 o 30).

b. Intenta asignar un valor que no sea una de las opciones mencionadas. Observa cómo TypeScript te da un error.

c. Crea una función que acepte solo las edades mencionadas como argumento y que imprima la edad en la consola.

d. Llama a esta función con diferentes edades y verifica que solo acepte las edades especificadas.

Parte 3: Uso Combinado

a. Crea una función que acepte un color y una edad como argumentos.

b. Dentro de la función, imprime tanto el color como la edad en la consola.

c. Asegúrate de que la función solo acepte los colores y edades especificados.
*/
let color: 'rojo' | 'verde' | 'azul' = 'azul'; // Parte 1a
//color = 'amarillo';

function edades(color: 'rojo' | 'verde' | 'azul'): void {
    console.log(color);
}

edades(color); // Parte 1c
//edades('amarillo'); // Parte 1d  

let edad: 21 | 18 | 30 = 21; // Parte 2a
//edad = 90;
function edades2(edad: 21 | 18 | 30): void {
    console.log(edad);
}
edades2(edad); // Parte 2c  
//edades2(90); // Parte 2d
function combinacion(color: 'rojo' | 'verde' | 'azul', edad: 21 | 18 | 30): void { // Parte 3a
    console.log(`Color: ${color}, Edad: ${edad}`); // Parte 3b
}
combinacion(color, edad); // Parte 3c
//combinacion('amarillo', 90); // Parte 3d

export { } // Para evitar el error de "Cannot redeclare block-scoped variable 'color'" en TypeScript