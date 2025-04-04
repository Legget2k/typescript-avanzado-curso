"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var color = 'azul'; // Parte 1a
//color = 'amarillo';
function edades(color) {
    console.log(color);
}
edades(color); // Parte 1c
//edades('amarillo'); // Parte 1d  
var edad = 21; // Parte 2a
//edad = 90;
function edades2(edad) {
    console.log(edad);
}
edades2(edad); // Parte 2c  
//edades2(90); // Parte 2d
function combinacion(color, edad) {
    console.log("Color: ".concat(color, ", Edad: ").concat(edad)); // Parte 3b
}
combinacion(color, edad); // Parte 3c
