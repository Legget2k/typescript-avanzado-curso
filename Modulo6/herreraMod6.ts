/*
Instrucciones:

Parte 1: Entendiendo keyof

a. Crea un objeto llamado persona con propiedades como nombre, edad y correo.

b. Define un tipo TipoPersona que sea igual a keyof typeof persona. Este tipo debería representar las claves del objeto persona.

c. Crea una función llamada imprimirDetalle que acepte dos argumentos: una clave de tipo TipoPersona y un objeto del tipo typeof persona.

d. Dentro de la función, imprime en la consola el valor correspondiente a la clave proporcionada.
*/

const persona = {
    nombre: "luis",
    edad: 26,
    correo: "lucho@gmail.com"
}

type tipoPersona = keyof typeof persona;

console.log(persona); // Esto imprime las claves del objeto persona

function imprimirDetalle(clave: tipoPersona, objeto: typeof persona){
    console.log(objeto[clave]);
}

imprimirDetalle("nombre", persona); // Esto imprimirá "luis"
imprimirDetalle("edad", persona); // Esto imprimirá 26


/*
Parte 2: Tipos Indexados

a. Crea un tipo llamado Mascotas que sea un objeto donde las claves son nombres de animales y los valores son sus edades.

b. Define un tipo llamado EdadDeMascota<T> que acepte un nombre de animal como argumento y devuelva la edad correspondiente.

c. Implementa una función llamada obtenerEdadMascota que tome un nombre de animal y un objeto del tipo Mascotas, y devuelva la edad de la mascota.

*/

type Mascotas = {
    perro: number,
    gato: number,
    pez: number
}

type EdadDeMascota<T extends keyof Mascotas> = Mascotas[T];

function obtenerEdadMascota<T extends keyof Mascotas>(animal: T, mascotas: Mascotas): EdadDeMascota<T> {
    return mascotas[animal];
}   

obtenerEdadMascota("perro", { perro: 5, gato: 3, pez: 1 }); // Esto devolverá 5
obtenerEdadMascota("gato", { perro: 5, gato: 3, pez: 1 }); // Esto devolverá 3
obtenerEdadMascota("pez", { perro: 5, gato: 3, pez: 1 }); // Esto devolverá 1

/*

Parte 3: Tipos Mapeados

a. Define un tipo llamado Requerido<T> que tome un tipo T y haga todas sus propiedades opcionales.

b. Crea un objeto datos con propiedades como nombre, edad y correo.

c. Aplica el tipo Requerido<typeof datos> para obtener un nuevo tipo llamado DatosRequeridos.

d. Intenta asignar un objeto que solo tenga algunas de las propiedades requeridas y observa cómo TypeScript te da un error.
*/

type Requerido<T> = {
    [K in keyof T]?: T[K];
};

const datos = {
    nombre: "Luis",
    edad: 26,
    correo: "hola@hotmail.com"
};

type DatosRequeridos = Requerido<typeof datos>;

const datosIncompletos: DatosRequeridos = {
    nombre: "Luis"
}; 
// error porque faltan las propiedades edad y correo, pero al poner el ? en el tipo Requerido, se vuelve opcional

const datosCompletos: DatosRequeridos = {
    nombre: "Luis",
    edad: 26,
    correo: "hola@hotmail.com"
};