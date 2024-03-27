// Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos 
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al 
// usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o 
// no


let edad = prompt('ingrese su edad ');
let sueldo = prompt('ingrese cuantos son sus ingresos en el mes');

function valoracion(edad, sueldo){
    try {
        

        if(edad < 16 || sueldo < 1000){
            throw new Error ('Usted no cumple los requisitos para tributar impuestos');
        }


        alert('usted debe tributar');

    } catch (error) {
        alert(error)
    }
}

valoracion(edad, sueldo);