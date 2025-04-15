import { suma } from "./calculadora"; 

const resultado = suma(100, 3);
console.log(resultado);

//exiasten dos formas de ejecutar codigo ts
//dependera del proceso en el que estemos

//desarrollo -> ts-node-dev
//ts es solo un lenguaje de desarrollo
//produccion -> tsc -> index.ts -> index.js
//necesitamos los estaticos js para ejecutar el sistema