// Escribir un programa que pida al usuario un número entero y muestre por consola un 
// triángulo rectángulo como el de más abajo.



let altura = parseInt(prompt("ingrese la altura del triangulo"));

const operacion = altura=>{
    for(let i = 1; i <= altura; i++){
        let fila = ('')
        for(let j = 1;j <= i;j++){
            fila+= '* ';
        }
        console.log(fila)
    }
}

operacion(altura);

