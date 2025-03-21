var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var vehiculo = /** @class */ (function () {
    function vehiculo(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    vehiculo.prototype.detalles = function () {
        console.log("mi marca es: ".concat(this.marca, ", mi modelos es: ").concat(this.modelo, ", y fui fabricado el a\u00F1o: ").concat(this.año));
    };
    return vehiculo;
}());
var moto = /** @class */ (function (_super) {
    __extends(moto, _super);
    function moto(marca, modelo, año, cilindrada) {
        var _this = _super.call(this, marca, modelo, año) || this;
        _this.cilindrada = cilindrada;
        return _this;
    }
    moto.prototype.detalles = function () {
        console.log("Mi marca es: ".concat(this.marca, ", mi modelo es: ").concat(this.modelo, ", fui fabricado en el a\u00F1o: ").concat(this.año, " y tengo ").concat(this.cilindrada, " cc de cilindrada."));
    };
    return moto;
}(vehiculo));
var miVehiculo = new vehiculo("Toyota", "Corolla", 2022);
var miMoto = new moto("Yamaha", "R1", 2021, 1000);
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
var Banco = /** @class */ (function () {
    function Banco() {
        this.saldo = 1000;
    }
    //aca tendria que ir un constructor si quiesieramos crear instancias con diferentes saldos iniciales
    Banco.cambiarTasaDeInteres = function (nuevaTasa) {
        this.tasaInteres = nuevaTasa;
        console.log("Nueva tasa de inter\u00E9s: ".concat(this.tasaInteres, "%"));
    };
    Banco.prototype.depositar = function (monto) {
        this.saldo += monto;
        return this.saldo;
    };
    Banco.prototype.retirar = function (monto) {
        if (this.saldo >= monto) {
            this.saldo -= monto;
            return this.saldo;
        }
        return "Saldo insuficiente";
    };
    Banco.prototype.obtenerSaldo = function () {
        console.log("Su saldo actual es de: ".concat(this.saldo));
    };
    Banco.tasaInteres = 5.5;
    return Banco;
}());
// Pruebas
console.log(Banco.tasaInteres);
Banco.cambiarTasaDeInteres(2.3);
var cuenta1 = new Banco(); //al no haber constructor no hace falta pasar ningun parametro para construir la instancia
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
var persona = /** @class */ (function () {
    function persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    persona.prototype.presentarse = function () {
        console.log("Hola mi nombre es ".concat(this.nombre, " y actualmente tengo ").concat(this.edad, " a\u00F1os"));
    };
    return persona;
}());
var estudiante = /** @class */ (function (_super) {
    __extends(estudiante, _super);
    function estudiante(nombre, edad, carrera) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.carrera = carrera;
        return _this;
    }
    estudiante.prototype.presentarse = function () {
        console.log("Hola mi nombre es ".concat(this.nombre, " y actualmente tengo ").concat(this.edad, " a\u00F1os, actualmente estudio ").concat(this.carrera));
    };
    return estudiante;
}(persona));
var miPersona = new persona("Luis", 20);
var miEstudiante = new estudiante("Luis", 20, "programacion");
miPersona.presentarse();
miEstudiante.presentarse();
var articulo = /** @class */ (function () {
    function articulo(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    articulo.prototype.mostrarDetalles = function () {
        console.log("nombre: ".concat(this.nombre, " precio: ").concat(this.precio, " categoria: ").concat(this.categoria));
    };
    return articulo;
}());
var miArticulo = new articulo('pantalla lg', 12000, "electronica");
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
var usuario = /** @class */ (function () {
    function usuario() {
        this._contraseña = "contrase12345";
    }
    Object.defineProperty(usuario.prototype, "contrase\u00F1a", {
        get: function () {
            return "*******";
        },
        set: function (nuevaContraseña) {
            if (nuevaContraseña.length > 8) {
                this._contraseña = nuevaContraseña;
                console.log("Contraseña actualizada con éxito.");
            }
            else {
                console.log("Error: La contraseña debe tener más de 8 caracteres.");
            }
        },
        enumerable: false,
        configurable: true
    });
    usuario.prototype.mostrarInfo = function () {
        if (this._contraseña.length > 8) {
            console.log("Usuario con contraseña segura.");
        }
        else {
            console.log("Advertencia: La contraseña es demasiado corta.");
        }
    };
    return usuario;
}());
var user = new usuario();
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
var cuentaBancaria = /** @class */ (function () {
    function cuentaBancaria(titular) {
        this._saldo = 0;
        this._titular = titular;
    }
    Object.defineProperty(cuentaBancaria.prototype, "mostrarSaldo", {
        get: function () {
            return console.log(this._saldo);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(cuentaBancaria.prototype, "cambiarSaldo", {
        set: function (valor) {
            console.log("no se puede cambiar el valor, debe usar un metodo aprobado");
        },
        enumerable: false,
        configurable: true
    });
    cuentaBancaria.prototype.depositar = function (valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
    };
    cuentaBancaria.prototype.retirar = function (valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
        console.log("no puedes retirar mas de lo que tienes");
    };
    cuentaBancaria.prototype.mostrarInfor = function () {
        console.log("La cuenta pertenece al usuario: ".concat(this._titular, " y cuenta con el saldo de: ").concat(this._saldo));
    };
    return cuentaBancaria;
}());
var cuentaDeBanco1 = new cuentaBancaria("luis");
cuentaDeBanco1.mostrarInfor();
cuentaDeBanco1.mostrarSaldo;
cuentaDeBanco1.cambiarSaldo = 100;
cuentaDeBanco1.depositar(500);
cuentaDeBanco1.mostrarSaldo;
cuentaDeBanco1.retirar(600);
