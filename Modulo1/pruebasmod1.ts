//este archivo lo uso para practicar y repasar cosas del tema gracia :D
/*
Ejercicio 1: Prototipos y Clases en TypeScript
Pregunta teórica:
¿Cuál es la principal diferencia entre un prototipo en JavaScript y una clase en TypeScript?

La diferencia entre prototipos y clases es simplemente sintaxis, aunque en typescript se debe ser mas riguroso con los tipados que se deben retornar en los metodos y los tipados de las propiedades

Ejercicio:
Define una clase Vehiculo que tenga:

marca (string)
modelo (string)
año (number)
Un método detalles() que imprima la información del vehículo.
Luego, crea una subclase Moto que herede de Vehiculo y agregue:

cilindrada (number)
Sobreescriba detalles() para incluir la cilindrada.
Crea instancias de Vehiculo y Moto y prueba sus métodos.
*/
class vehiculo{
    marca: string;
    modelo: string;
    año: number;

    constructor(marca:string, modelo:string, año:number){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    detalles() : void{
        console.log(`mi marca es: ${this.marca}, mi modelos es: ${this.modelo}, y fui fabricado el año: ${this.año}`);
    }

}

class moto extends vehiculo{
    cilindrada: number;

    constructor(marca:string, modelo:string, año:number, cilindrada:number){
        super(marca, modelo, año);
        this.cilindrada = cilindrada;
    }

    detalles(): void {
        console.log(`Mi marca es: ${this.marca}, mi modelo es: ${this.modelo}, fui fabricado en el año: ${this.año} y tengo ${this.cilindrada} cc de cilindrada.`);
    }
}

const miVehiculo = new vehiculo("Toyota", "Corolla", 2022);
const miMoto = new moto("Yamaha", "R1", 2021, 1000);
miVehiculo.detalles();
miMoto.detalles();

/*
Crea una clase Banco con lo siguiente:

Una propiedad estática tasaInteres con valor 5.5%.
Una propiedad privada saldo inicializada en 1000.
Un método depositar(monto: number) que agregue dinero al saldo.
Un método retirar(monto: number) que reste dinero solo si hay suficiente saldo.
Un método obtenerSaldo() para consultar el saldo.
Un método estático cambiarTasaInteres(nuevaTasa: number) para modificar la tasa de interés.
Extra: Prueba acceder a la propiedad saldo desde fuera de la clase y observa qué sucede.
*/

class Banco {
    static tasaInteres: number = 5.5;
    private saldo: number = 1000;
    //aca tendria que ir un constructor si quiesieramos crear instancias con diferentes saldos iniciales
    static cambiarTasaDeInteres(nuevaTasa: number): void {
        this.tasaInteres = nuevaTasa;
        console.log(`Nueva tasa de interés: ${this.tasaInteres}%`);
    }

    depositar(monto: number): number {
        this.saldo += monto;
        return this.saldo;
    }

    retirar(monto: number): number | string {
        if (this.saldo >= monto) {
            this.saldo -= monto;
            return this.saldo;
        }
        return "Saldo insuficiente";
    }

    obtenerSaldo(): void {
        console.log(`Su saldo actual es de: ${this.saldo}`);
    }
}

// Pruebas
console.log(Banco.tasaInteres);
Banco.cambiarTasaDeInteres(2.3);

const cuenta1 = new Banco();//al no haber constructor no hace falta pasar ningun parametro para construir la instancia
cuenta1.obtenerSaldo();
console.log(cuenta1.depositar(300));
console.log(cuenta1.retirar(50));
cuenta1.obtenerSaldo();
console.log(cuenta1.retirar(500)); // Prueba con saldo insuficiente

/*
Ejercicio 2: Herencia y Métodos Sobreescritos
Pregunta teórica:
¿Por qué en TypeScript usamos super() dentro del constructor de una subclase?
Para llamar al constructor padre que nos hereda sus propiedades las propiedades static y # no se heredan tampoco las PRIVATE solo las protected y public

Ejercicio:
Crea una clase Persona con:

nombre: string
edad: number
Un método presentarse() que imprima:
"Hola, mi nombre es [nombre] y tengo [edad] años."
Luego, crea una subclase Estudiante que herede de Persona y agregue:

carrera: string
Sobreescriba presentarse() para incluir la carrera.
Crea instancias de Persona y Estudiante y prueba sus métodos.
*/

class persona{
    nombre: string;
    edad: number;
    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse(): void {
        console.log(`Hola mi nombre es ${this.nombre} y actualmente tengo ${this.edad} años`);
    }
}

class estudiante extends persona{
    carrera:string;
    constructor(nombre:string, edad:number, carrera:string){
        super(nombre, edad);
        this.carrera = carrera;
    }
    presentarse(): void {
        console.log(`Hola mi nombre es ${this.nombre} y actualmente tengo ${this.edad} años, actualmente estudio ${this.carrera}`);
    }
}
const miPersona = new persona("Luis", 20);
const miEstudiante = new estudiante("Luis", 20, "programacion");
miPersona.presentarse();
miEstudiante.presentarse();

/*
Ejercicio 3: Interfaces en TypeScript
Pregunta teórica:
¿Cuál es la ventaja de usar interfaces en lugar de clases en TypeScript?
La ventaja de usar interfaces, es que podemos crear plantillas de tipado para las nuevas instancias y son un poco mas flexibles que los tipados permitiendo que podamos crear subplantillas que heredan de la plantilla padre para instancias futuras con cambios importantes.

Ejercicio:
Crea una interfaz Producto con:

nombre: string
precio: number
Un método mostrarDetalles(): void
Crea una clase Articulo que implemente Producto y agregue:

categoria: string
Implemente el método mostrarDetalles() para incluir la categoría.
Crea instancias de Articulo y prueba el método.
*/
interface producto{
    nombre: string;
    precio: number;
    mostrarDetalles(): void;
}

class articulo implements producto{
    nombre: string;
    precio: number;
    categoria: string;
    constructor(nombre: string, precio: number, categoria:string){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    mostrarDetalles(): void {
        console.log(`nombre: ${this.nombre} precio: ${this.precio} categoria: ${this.categoria}`);
    }
}
const miArticulo = new articulo('pantalla lg',12000, "electronica");
miArticulo.mostrarDetalles();

/*
Ejercicio 5: Getters y Setters en TypeScript
Pregunta teórica:
¿Para qué sirven los getters y setters en una clase?
los getters y setters son metodos que se usan para solo obtener o obtenmer y retornar una modificacion o solo modificar una propiedad en concreto, son practicamente metodos que sirven exclusivamente para esto

Ejercicio:
Crea una clase Usuario con:

Propiedad privada _contraseña: string.
Un getter para mostrar **** en vez de la contraseña real.
Un setter que solo cambie la contraseña si tiene más de 8 caracteres.
Un método mostrarInfo() que imprima:
"Usuario con contraseña segura." si la contraseña cumple con el requisito.
Crea instancias de Usuario y prueba cambiar la contraseña.
*/

class usuario{
    private _contraseña: string = "contrase12345";

    get contraseña():string{
        return "*******";
    }
    
    set contraseña(nuevaContraseña: string) {
        if (nuevaContraseña.length > 8) {
            this._contraseña = nuevaContraseña;
            console.log("Contraseña actualizada con éxito.");
        } else {
            console.log("Error: La contraseña debe tener más de 8 caracteres.");
        }
    }

    mostrarInfo(): void {
        if (this._contraseña.length > 8) {
            console.log("Usuario con contraseña segura.");
        } else {
            console.log("Advertencia: La contraseña es demasiado corta.");
        }
    }
}

let user = new usuario();

console.log(user.contraseña);

user.contraseña = "123jeje";
user.contraseña = "laclavemasseguradelmundo";

user.mostrarInfo();

/*
Ejercicio: Sistema de Cuenta Bancaria
Imagina que estás creando un sistema para manejar cuentas bancarias. Debes implementar una clase CuentaBancaria con las siguientes características:

Requisitos:
Propiedades privadas:

_saldo: number → Inicia en 0.
_titular: string → Se define en el constructor.
Getter y Setter para saldo:

Getter: Debería permitir consultar el saldo de forma segura.
Setter: No debe permitir establecer el saldo manualmente, solo modificarlo mediante métodos específicos.
Métodos:

depositar(cantidad: number): Suma al saldo solo si la cantidad es positiva.
retirar(cantidad: number): Resta del saldo si hay suficiente dinero.
mostrarInfo(): Imprime el titular y el saldo actual.
*/

class cuentaBancaria{
    private _saldo: number = 0;
    private _titular: string;
    
    constructor(titular:string){
        this._titular = titular;
    }

    get mostrarSaldo(){
        return this._saldo;
    }

    set cambiarSaldo(valor:number){
        console.log(`No se puede cambiar el valor por ${valor} debes usar los metodos correspondiente para hacerlo depositar() y retirar()`);
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }

    retirar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
        console.log("no puedes retirar mas de lo que tienes");
        //esto probanblemente requiere mas pruebas X.X
    }

    mostrarInfor(){
        console.log(`La cuenta pertenece al usuario: ${this._titular} y cuenta con el saldo de: ${this._saldo}`);
    }
}

const cuentaDeBanco1 = new cuentaBancaria("luis");

cuentaDeBanco1.mostrarInfor();
console.log(cuentaDeBanco1.mostrarSaldo);
cuentaDeBanco1.cambiarSaldo = 100;
cuentaDeBanco1.depositar(500);
console.log(cuentaDeBanco1.mostrarSaldo);
cuentaDeBanco1.retirar(600);