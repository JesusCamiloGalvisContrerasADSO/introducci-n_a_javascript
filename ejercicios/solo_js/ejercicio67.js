// Escribir un programa que pida al usuario un número entero y muestre por pantalla un 
// triángulo rectángulo como el de más abajo, de altura el número introducido.


let altura = parseInt(prompt("Ingrese la altura del triángulo:"));

const operacion = altura=>{

    // Iterar sobre cada fila del triángulo
    for (let i = 1; i <= altura; i++) {
        let fila = '';
        
        // Agregar asteriscos a la fila actual
        for (let j = 1; j <= i; j++) {
            fila += '* ';
        }
        
        // Mostrar la fila actual en la consola
        console.log(fila);
    }
}
operacion(altura);


