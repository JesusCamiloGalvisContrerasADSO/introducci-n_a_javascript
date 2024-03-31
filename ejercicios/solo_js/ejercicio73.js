// Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre 
// por pantalla el número de veces que aparece la letra en la frase.


let frase = prompt('ingrese la frase ');
let letra = prompt('ingrese la letra para validar');

const operacion = (frase,letra) =>{
    let contador = 0;
    for(let i=0; i <frase.length;i++){
        if(frase[i] === letra){
            contador++;
        }
    }
    
}

let veces = operacion(frase,letra);

alert(`la letra "${letra}" se repite ${contador} veces en la frase`);



