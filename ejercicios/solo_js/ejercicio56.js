// Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a 
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga 
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado


const operacion = () =>{
    let saldo = parseFloat(prompt('ingrese el total del saldo que se encuentra en el deposito'));

    if(saldo <= 100000){
        interes = saldo* 0.03;

    }else{
        interes = saldo * 0.04;
    }
    total = saldo - interes;
    alert(`el interes a pagar es de $${interes} y el saldo restante es de $${total}`);

}

operacion();