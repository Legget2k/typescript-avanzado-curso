//Ejercicio de Prototipos: 
//creamos una funcion constructora llamada animal...

function animal(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

//agregamos a su prototipo un método para que hable. De esta manera todos los objetos que imprima tendran acceso al metodo mediante su propiedad __proto__.
animal.prototype.hablar = function(){
    console.log(`Hola mi nombre es: ${this.nombre} y mi edad es: ${this.edad}`);
}

//para crear un prototipo de perro, le haremos primero un constructor
function perro(nombre, edad){
    animal.call(this, nombre, edad); //llamamos al constructor de animal
}
/*
Podira haber creado la siguiente forma
let perro = Create.Object(animal);
en teoria perro seria un objeto con un __Proto__ apuntando hacia animal pero realmente no estaria heredando las propiedades ni construyendo mediante el constructor este objeto
*/

//heredamos los prototipos
//creamos el prototipo de perro a partir del prototipo de animal
perro.prototype = Object.create(animal.prototype);
//ahora como __proto__ esta apuntando hacia animal, queremos que perro tenga su propio prototipo, por lo tanto hacemos que su proto vuelva a apuntar hacia el mismo, por lo tanto perro.__proto__ = perro; QUE anteriormente era perro.__proto__ = animal;
perro.prototype.constructor = perro;

//agregamos el metodo ladrido al prototipo del objeto perro
perro.prototype.ladrido = function(){
    console.log("guau!");
}


let miPerro = new perro("max", 5);

miPerro.hablar(); //Hola mi nombre es: max y mi edad es: 5
miPerro.ladrido(); //guau!

//Ejercicio de Modelo de Herencia:

//definimos un constructor para persona....

function persona(nombre, edad, profesion){
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
}
//para crear los prototipos de estudiante y profesor seguire la ruta anterior de crearles constructores a cada uno los cuales hederaran la base del constructor de persona. Entonces...

function estudiante(nombre, edad, profesion, grado){
    persona.call(this, nombre, edad, profesion);
    this.grado = grado;
}
//herencia prototipos
estudiante.prototype = Object.create(persona.prototype); //creamos el proto en base a persona
estudiante.prototype.constructor = estudiante; //apuntamos el proto de vuelta hacia estudiante

//creamos el metodo estudiar para el prototipo de estudiante
estudiante.prototype.estudiar = function(){
    console.log(`Estudiando para obtener el grado de ${this.grado}`);
}

//ahora vamos a crear el constructor del profesor y su prototipo que heredan de persona
function profesor(nombre, edad, profesion, especialidad){
    persona.call(this, nombre, edad, profesion);
    this.especialidad = especialidad;
}
//herencia
profesor.prototype = Object.create(persona.prototype); //creamos en base al prototipo de persona
profesor.prototype.constructor = profesor; //apuntamos el __proto__ de regreso al objeto profesor

//creamos el metodo para el prototipo profesor
profesor.prototype.enseñar = function(){
    console.log(`Enseñando ${this.especialidad}`);
}

//creamos instancia de estudiante y profesor
let miEstudiante = new estudiante("luis", 26, "estudiante", "A");
let miProfesor = new profesor("cesar", 31, "profesor", "typescript");

//probamos los metodos
miEstudiante.estudiar(); //Estudiando para obtener el grado de A
miProfesor.enseñar(); //Enseñando typescript

//Ejercicio de Composición vs Herencia:
//a. Considerando el código de los ejercicios anteriores, reflexiona sobre cuándo es preferible usar la composición sobre la herencia en el diseño de objetos en JavaScript.

