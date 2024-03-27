// Escribir un programa que calcule el volumen de una esfera

let radio = parseFloat(prompt('ingrese el radio de la esfera en cm'));


const operacion = (radio) => {
    volumen = (4/3)*(Math.PI)*(radio*radio);
    alert(`el volumen de la esfera es de ${volumen}`);
}

operacion(radio);