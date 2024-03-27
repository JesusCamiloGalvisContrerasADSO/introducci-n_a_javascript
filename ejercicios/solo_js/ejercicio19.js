// Escribir un programa que calcule el área y el volumen de un cilindro

let altura = parseFloat(prompt('ingrese la altura del cilindro en cm'));
let radio = parseFloat(prompt('ingrese el radio del cilindro en cm'));

const operacion = (altura,radio) => {
    areaBase= (radio*radio)*Math.PI;
    volumen= areaBase*altura;

    alert(`el area del cilindro es de ${areaBase} cm^2`);
    alert(`el volumen del cilindro es de ${volumen} cm^3`);
}

operacion(altura,radio);
