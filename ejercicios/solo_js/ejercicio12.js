// Escribir un programa que calcule el área de un rectángulo:

let base = parseFloat(prompt('Ingrese la base del rectangulo en cm'));

let altura = parseFloat(prompt('Ingrese la altura del rectangulo en cm'));

const proceso = (base, altura) => {
    let area = base * altura;

    alert(`el area del rectangulo es de ${area} cm^2`);
}

proceso(base, altura);