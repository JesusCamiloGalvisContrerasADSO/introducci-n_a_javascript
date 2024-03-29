// Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.


let gradosC = parseFloat(prompt('ingrese los datos centigrados para hacer convercion'));

const convercion = gradosC => {
    gradosF = (gradosC * (9/5)) + 32;
    // (8 °C × 9/5) + 32 = 46.4 °F
    alert(`el total de grados Fahrenheit es de ${gradosF}`);
}

convercion(gradosC);