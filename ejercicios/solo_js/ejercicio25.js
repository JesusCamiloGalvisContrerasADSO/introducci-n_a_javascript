// Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa 
// que ingresando el costo de los medicamentos calcule el descuento y el precio final.


let precio = parseFloat(prompt('ingrese el valor del producto'));

const operacion = precio =>{
    descuento = precio * 0.2;
    total = precio - descuento;

    alert(`el descuesto es de ${descuento} y el valor a pagar es de ${total}`);
}

operacion(precio);
