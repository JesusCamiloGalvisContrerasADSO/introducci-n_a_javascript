// Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada 
// producto y el total de la compra


const totalCompra = () =>{
    alert('los dos primeros con un 5% de descuento y los 2 últimos con un 2% de descuento');

    let total = 0;
    for (let i = 1; i <= 5 ; i++){
        let prod = parseFloat(prompt(`Ingrese el precio del producto ${i}`));

        if (i == 1 || i == 2){
            descuento = prod * 0.05;
            prod = prod - descuento;
            alert(`total del producto ${i} es de ${prod}`);
        }else if (i == 3 || i == 4){
            descuento = prod * 0.02;
            prod = prod - descuento;
            alert(`total del producto ${i} es de ${prod}`);
        }else{
            alert(`total del producto ${i} es de ${prod}`);
        }

        total +=prod;
       
    }

    alert(`El total de la compra fue de $${total}`);

}

totalCompra();
