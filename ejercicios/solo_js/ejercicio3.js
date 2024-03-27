// Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si 
// el divisor es cero el programa debe mostrar un error, se debe manejar mediante 
// excepciones y el mensaje debe ser personalizado.


let num1 = prompt('Escriba el numero dividendo' );
let num2 = prompt ('Escriba el numero divisor ');

function total(num1, num2){
    try {

        num1 = parseFloat(num1);
        num2 = parseFloat (num2);


        if (num2==0 ){
            throw new Error ('el numero ingresado es 0, no se realiza la operacion')
        }
        let operacion = num1 / num2;
        return operacion ;
    } catch (error) {
        alert(error);
    }finally{
        alert('continuando con el proceso')
    }
}

let resultado = total(num1,num2);

if (resultado !== undefined){
    alert(`el resultado de la divicion es ${resultado}`)
}


