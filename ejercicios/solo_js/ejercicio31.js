// Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la 
// solución, por favor utilizar funciones matemáticas para ello.:
// a. rc((x2-x1)^2 + (y2-y1)^2)



function calcularDistancia() {
    // Solicitar las coordenadas del primer punto
    let x1 = parseFloat(prompt("Ingrese la coordenada x del primer punto:"));
    let y1 = parseFloat(prompt("Ingrese la coordenada y del primer punto:"));

    // Solicitar las coordenadas del segundo punto
    let x2 = parseFloat(prompt("Ingrese la coordenada x del segundo punto:"));
    let y2 = parseFloat(prompt("Ingrese la coordenada y del segundo punto:"));

    // Calcular la diferencia en las coordenadas x e y
    let diffX = x2 - x1;
    let diffY = y2 - y1;

    // Calcular el cuadrado de las diferencias
    let diffXSquared = Math.pow(diffX, 2);
    let diffYSquared = Math.pow(diffY, 2);

    // Calcular la suma de los cuadrados de las diferencias
    let sumSquaredDiffs = diffXSquared + diffYSquared;

    // Calcular la raíz cuadrada de la suma de los cuadrados de las diferencias
    let distancia = Math.sqrt(sumSquaredDiffs);

    // Mostrar el resultado con alert()
    alert("La distancia entre los dos puntos es: " + distancia);
}

// Llamar a la función para calcular la distancia
calcularDistancia();