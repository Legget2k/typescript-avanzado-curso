//class
/*
class persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    //metodos
    saludar(){
        console.log("Hola mundo")
    }
}


//objeto literal
const persona1 = {
    nombre: "luis",
    edad: 26,
    saludar: function(){
        console.log("hola mundo")
    } 
}
*/

function objectoCreador(forma, color, edad){
    this.forma = forma;
    this.color = color;
    this.edad = edad;
}

objectoCreador.prototype.mostrarInfo = function() {
    console.log(`soy un objeto de forma ${this.forma}, color ${this.color} y tengo ${this.edad} años`);
}

let miObjeto = new objectoCreador("circulo", "rojo", 10);
miObjeto.mostrarInfo();
