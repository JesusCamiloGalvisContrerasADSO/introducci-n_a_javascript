// Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo -
//     2.3e-1, -3e2, 23, 3.2).


let valor = prompt('ingrese el valor de una expresion regular');
let valoracion = /^-?\d*\.?\d+(e-?\d+)?$/;

// -   ^: Coincide con el inicio de la cadena.
// -    -?: Coincide con un signo negativo opcional.
// -    \d*: Coincide con cero o más dígitos.
// -    \.?: Coincide con un punto decimal opcional.
// -    \d+: Coincide con uno o más dígitos.
// -    (e-?\d+)?: Coincide con una parte opcional de notación científica que incluye la letra 'e' seguida opcionalmente de un signo negativo y uno o más dígitos.
// -    $: Coincide con el final de la cadena.

const operacion = (valor,valoracion) =>{
    if(valoracion.test(valor)){
        alert(`la cadena de caracteres ${valor} es valida `);
    }else{
        alert(`la cadena de caracteres ${valor} no es valida`);
    }
}

operacion(valor,valoracion);
