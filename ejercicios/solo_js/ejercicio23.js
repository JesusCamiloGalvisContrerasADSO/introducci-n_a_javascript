// Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil 
// expresada en kilómetros por hora, proporcione la velocidad en metros por segundo.


let velocidad = parseFloat(prompt('ingrese la velocidad en k/h'));

const operacion = velocidad => {
    convercion = velocidad * (1/3600)* (1000/1);
    alert(`la velocidad en m/s es de ${convercion}`);
}

operacion(velocidad);

