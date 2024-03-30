// Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede 
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento.

const operacion = () =>{
    let pago = 0;
    while (true) {
        if (confirm('¿Desea agregar otro producto?')) {
            let producto = parseFloat(prompt('Ingrese el valor del producto'));
            pago += producto;
        } else {
            break;
        }
    }
    if(pago >= 130000){
        descuento = pago * 0.15;
        total = pago - descuento
        alert(`la compra tiene un descuento de $${descuento} y el total a pagar es de $${total}`);
    }else{
        alert(`el total a pagar es de $${pago}`);
        
    }
}

operacion();

