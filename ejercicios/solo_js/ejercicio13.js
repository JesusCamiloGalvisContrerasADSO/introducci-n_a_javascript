// Escribir un programa que lea 4 números y calcule la media.

let num1 = parseFloat(prompt('Ingrese el primer numero'));
let num2 = parseFloat(prompt('Ingrese el segundo numero'));
let num3 = parseFloat(prompt('Ingrese el tercero numero'));
let num4 = parseFloat(prompt('Ingrese el cuarto numero'));

const operacion = (num1,num2,num3,num4) => {
    media = (num1+num2+num3+num4)/4;
    alert(`la media de los 4 numeros ingresados es de ${media}`);
}

operacion(num1,num2,num3,num4);