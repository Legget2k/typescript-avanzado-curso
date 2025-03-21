/*
Objetivo: El objetivo de esta actividad es practicar el uso de funciones en JavaScript y comprender el concepto de recursividad.

Instrucciones:

Ejercicio de Funciones:

a. Crea una función llamada calcularAreaTriangulo que tome dos parámetros: base y altura. Esta función debería calcular y retornar el área de un triángulo utilizando la fórmula (base * altura) / 2.

b. Crea una función llamada calcularCircunferencia que tome un parámetro radio. Esta función debería calcular y retornar la circunferencia de un círculo utilizando la fórmula 2 * Math.PI * radio.

c. Llama a ambas funciones y muestra los resultados en la consola.

Ejercicio de Recursividad:

a. Crea una función recursiva llamada calcularFactorial que tome un parámetro n. Esta función debería calcular y retornar el factorial de n. (Recuerda que el factorial de un número n es el producto de todos los enteros positivos desde 1 hasta n).

b. Llama a la función calcularFactorial con un número entero y muestra el resultado en la consola.

Ejercicio Combinado:

a. Crea una función llamada calcularPotencia que tome dos parámetros: base y exponente. Esta función debería calcular y retornar base elevado a la exponente utilizando recursividad.

b. Llama a la función calcularPotencia con valores diferentes y muestra los resultados en la consola.
*/
//ejercicio de funciones
function calcularAreaTriangulo(base, altura){
    let areaTotal = (base * altura)/2;
    return areaTotal;
}

function calcularCircunferencia(radio){
    let circunferencia = 2 * Math.PI * radio;
    return circunferencia;
}
console.log(`area total: ${calcularAreaTriangulo(3, 4)}, circunferencia: ${calcularCircunferencia(2)}`); 

//ejercicio de recursividad
function calcularFactorial(n){
    if(n != 0){
        return n * calcularFactorial(n-1);
    }
    return 1;
}
console.log(calcularFactorial(5));

//ejercicio combinado
function calcularPotencia(base, exponente){
    if(exponente === 0){
        return 1;
    }else{
        return base * calcularPotencia(base, exponente - 1);
    }
}
console.log(calcularPotencia(2,3));