// . Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados 
// de: Iva, Subtotal y Total de la compra de los artículos

const operacion = () =>{
    let iva, total, productosPrecio = 0;
    
    for (let i = 1; i <= 5; i++){
        let producto = parseFloat(prompt(`ingrese el valor del producto ${i}`));

        productosPrecio += producto;

    }
    iva = productosPrecio * 0.15;
    total = productosPrecio + iva;

    alert(`el subtotal es de $${productosPrecio}, el iva es de $${iva}, y el total a pagar es de $${total}`);
}

operacion();