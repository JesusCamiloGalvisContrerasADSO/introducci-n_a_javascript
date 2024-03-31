// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla 
// la cuenta atrás desde ese número hasta cero separados por comas.


let numero = parseInt(prompt('ingrese el numero positivo entero'));

const operacion = numero =>{
    for(let i = numero;i>=0;i--){
        console.log(`el numero es ${i}`)
    }
    alert('revisa tu consola')
}
operacion(numero);

