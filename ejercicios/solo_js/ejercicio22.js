// Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada 
// minuto cuesta $355 pesos y un IVA 20%

minutos = Math.ceil;

let minutos = parseFloat(prompt('Ingrese el numero de minutos que gasto en su llamada telefonica, recuerde que asi no halla cumplido todo el minuto se cuenta completo'))

const operacion = minutos => {
    costo= minutos * 335;
    iva= costo * 0.2;
    total = costo + iva;
    alert(`el costo de su llamada es de ${total}`);
}

operacion(minutos);