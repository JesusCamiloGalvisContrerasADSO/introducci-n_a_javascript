// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla 
// todos los números impares desde 1 hasta ese número separados por coma


let numero = (parseInt(prompt('ingrese un numero positivo entero')));

const operacion = numero =>{
    if(numero > 0){
        for(let i =0;i<=numero;i++){
            if(i%2 !== 0){
                alert(`numero impares hasta llegar al numero ${i}`);
            }
        }
    }else{
        alert('el numero ingresado no es positivo');
    }
}
operacion(numero);
