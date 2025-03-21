/*
Crea una clase Empleado con:

nombre y sueldo como propiedades.

Un método mostrarInformacion().

Crea una clase Gerente que herede de Empleado y agregue:

Una propiedad departamento.

Sobrescriba el método mostrarInformacion().

Crea instancias de Empleado y Gerente y llama a sus métodos.
*/
class empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    mostrarInformacion(){
        console.log(`mi nombre es: ${this.nombre} y estoy ganando aproximadamente un sueldo de: ${this.sueldo}`);
    }
}

class gerente extends empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    mostrarInformacion(){
        super.mostrarInformacion();
        console.log(`y soy gerente del departamento: ${this.departamento}`);
    }
}

const miEmpleado = new empleado("luis", 1500);
const miGerente = new gerente("isi", 2000, "mi corazon");