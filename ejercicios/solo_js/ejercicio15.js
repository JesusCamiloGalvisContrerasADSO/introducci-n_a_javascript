// . Escribir un programa que calcule la longitud y el área de una circunferencia

let diametro = parseFloat(prompt('ingrese el diametro de la circunferencia en cm'));

const operacion = diametro => {
    radio = diametro / 2;
    longitud = diametro * (Math.PI);
    area = (radio * radio) * (Math.PI);
    alert(`la longitud del la circunferencia es de ${longitud} cm`);
    alert(`el area de la circunferencia es de ${area} cm^2`)
}

operacion(diametro);