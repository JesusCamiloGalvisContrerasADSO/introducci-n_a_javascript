// Escribir un programa para una empresa que tiene salas de juegos para todas las edades y 
// quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar. El 
// programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. Si 
// el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 años debe pagar 5€ 
// y si es mayor de 18 años, 10€


let edad = parseInt(prompt('Ingrese su edad'));

const valoracion = (edad) =>{
    if(edad < 4 && edad > 0){
        alert('usted puede entrar gratis');
    } else if(edad >= 4 && edad <18){
        alert('su valor a pagar es de 5€ ');
    } else if(edad>=18){
        alert('el valor a pagar es de 10€');
    } else
        alert('la edad ingresada no corresponde');

}

valoracion(edad);