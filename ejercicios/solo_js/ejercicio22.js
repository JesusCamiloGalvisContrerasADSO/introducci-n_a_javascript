// Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada 
// minuto cuesta $355 pesos y un IVA 20%


let minutos = parseFloat(prompt('Ingrese el numero de minutos que gasto en su llamada telefónica, recuerde que así no haya cumplido todo el minuto se cuenta completo'));

const operacion = minutos => {
    costo = Math.ceil(minutos) * 335;
    iva = costo * 0.2;
    total = costo + iva;
    alert(`El costo de su llamada es de ${total}`);
}

operacion(minutos);