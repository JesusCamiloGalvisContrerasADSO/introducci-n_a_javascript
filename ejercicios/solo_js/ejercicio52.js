// En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es 
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora 
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de 
// horas trabajadas.


const operacion = () =>{

    let cargo = prompt('Ingrese el cargo al que pertenece (de planta o administrativo)');
    let horasTrabajo = parseFloat(prompt('Ingrese las horas trabajadas'));

    let pago = 0;

    switch (cargo.toLowerCase()){
        case "administrativo":
            pago = horasTrabajo * 10000;
            break;

        case "de planta":
            pago = horasTrabajo * 20000;
            break;
    }

    alert(`El total de pago es de $${pago} para su cargo de ${cargo}`);
}

operacion();

