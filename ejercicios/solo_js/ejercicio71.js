// . Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un 
// número primo o no.


let numero = parseInt(prompt('ingrese un numero entero positivo'));

const operacion = numero =>{
    if(numeor <= 1){
        return false;
    }else{
        for(let i = 2; i < Math.sqrt(numero);i++){
            if(numero %i ===0){
                return false;
            }
        }
        return true;
    }
}

if (esPrimo(numero)) {
    console.log(`${numero} es un número primo.`);
} else {
    console.log(`${numero} no es un número primo.`);
}




