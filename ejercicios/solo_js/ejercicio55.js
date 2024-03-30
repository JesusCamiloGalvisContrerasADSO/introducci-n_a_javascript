// En una tienda de HELADO da un descuento por compra a sus clientes con membresía 
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los 
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 
// 20% de descuento.


const operacion = () =>{
    let pago = parseFloat(prompt('ingrese el total a pagar'));
    let menbresia = prompt('ingrese el tipo de categoria al que pertenece "Tipo A, Tipo B, Tipo C "');
    let descuento = 0, total = 0;

    switch (menbresia.toLowerCase()){
        case "a":
            descuento = pago * 0.1;
            break;

        case "b":
            descuento = pago * 0.15;
            break;

        case "c":
            descuento = pago * 0.2;
            break;

        
    }
    total= pago - descuento;

    alert(`el total del descuento fue $${descuento} y el total a pagar es de $${total}`);

}

operacion();