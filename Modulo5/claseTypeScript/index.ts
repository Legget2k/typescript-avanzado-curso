//inferencia de tipos, implicitamente ts reconoce el tipo de la variable
let nombre = "Juan"; //string
let edad = 25; //number
let esEstudiante = true; //boolean
let calificaciones = [90, 85, 88]; //number[]

//variables con tipado explicito
let ciudad: string = "Madrid"; //string
let pais: string = "España"; //string
let esMayorDeEdad: boolean = true; //boolean
let sueldo: number = 3000; //number
let habilidades: string[] = ["JavaScript", "TypeScript", "React"]; //string[]
let fechaNacimiento: Date = new Date("1998-01-01"); //Date
let persona: { nombre: string; edad: number } = {
  nombre: "Juan",
  edad: 25,
}; //{nombre:string, edad:number}

//funciones
function saludar(nombre: string): string {
  return `Hola, ${nombre}`;
}
console.log(saludar("Juan")); //Hola, Juan

const suma = (a: number, b: number): number => {
  return a + b;
}
console.log(suma(5, 10)); //15

//interfaces y types
interface Persona {
    nombre: string;
    edad: number;
    ciudad?: string; //opcional
}
interface Estudiante extends Persona { //herencia de interfaces
    carrera: string;
    }
const estudiante: Estudiante = { //objeto literal que implementa la interface Estudiante
    nombre: "Juan",
    edad: 25,
    carrera: "Ingeniería",
    ciudad: "Madrid",
};
console.log(estudiante); //{nombre: "Juan", edad: 25, carrera: "Ingeniería", ciudad: "Madrid"}

class PersonaClase implements Persona { //clase que implementa la interface Persona
    nombre: string;
    edad: number;
    ciudad?: string; //opcional
    constructor(nombre: string, edad: number, ciudad?: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
        }
    saludar(): string {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
        }
    }
const personaClase = new PersonaClase("Juan", 25, "Madrid");
console.log(personaClase.saludar()); //Hola, soy Juan y tengo 25 años

type Producto = {
  nombre: string;
}

type Precio = number;
type ProductoConPrecio = Producto & {
    precio: Precio;
    }
const productoConPrecio: ProductoConPrecio = {
    nombre: "Laptop",
    precio: 1000,
};
console.log(productoConPrecio); //{nombre: "Laptop", precio: 1000}
