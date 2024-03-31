// Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a 
// una las letras de la palabra introducida empezando por la última


let palabra= prompt('ingrese una palabra');

const operacion=(palabra)=>{
    let arreglo = palabra.split('');
    for(let i=arreglo.length - 1; i >= 0; i--){
        console.log(arreglo[i]);
    }

}


operacion(palabra);