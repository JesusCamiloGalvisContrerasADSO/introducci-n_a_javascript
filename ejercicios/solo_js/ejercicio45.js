// Determinar si un número es positivo y menor que 100


const operacion = () =>{
    let numero = parseInt(prompt('ingrese el numero a validar'));

    if(numero > 0 && numero < 100){
        alert(`el numero ${numero} es positivo y menor que 100`);
    }else if(numero > 100){
        alert(`el numero ${numero} es positivo y mayor que 100`);
    }else{
        alert(`el numero ${numero} es negativo y menor que 100`);
    }
}

operacion();

