// . Escribir un programa que calcule el área de un triángulo.

let base = parseFloat(prompt('Ingrese la base del triangulo en cm'));
let altura = parseFloat(prompt('Ingrese la altura del triangulo en cm'));


const operacion = (base,altura) => {
    area = (base * altura)/2;

    alert(`el area del triangulo es de ${area} cm^2`)
}

operacion(base,altura);