// Escribir un programa que pida al usuario un numero entero y muestre por pantalla si es par 
// o impar

let numero = prompt('Ingresa el numero para verificar si es par o impar');

function valoracion(numero){
    try {
        numero = parseFloat (numero);


        if (numero == 0){
            throw new Error ('el numero ingresado es 0 ')
        }

        if(numero%2 == 0){
            alert(`el numero ${numero} es par`);
        }else{
            alert(`el numero ${numero} es impar`);
        }

        

    } catch (error) {
        alert(error)
    }
}
valoracion(numero);
