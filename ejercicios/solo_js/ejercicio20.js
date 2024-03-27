// Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo 
// grado: a * x2 + b + x + c, siendo X un valor constante.


// Coeficientes de la ecuación cuadrática (ejemplo)
alert('raíces reales de la ecuación de segundo grado: a * x2 + b + x + c, siendo X un valor constante')
let a = parseFloat(prompt('ingrese el valor de a'));
let b = parseFloat(prompt('ingrese el valor de b'));
let c = parseFloat(prompt('ingrese el valor de c'));

// Calcula el discriminante
let discriminante = b * b - 4 * a * c;

// Verifica si hay raíces reales
if (discriminante > 0) {
    // Calcula las raíces
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

    
    alert(`Las raíces reales son:  x1 ${x1} y x2 ${x2}`);
} else if (discriminante === 0) {
    // Raíz doble
    let x = -b / (2 * a);
    alert("La raíz doble es:", x);
} else {
    // No hay raíces reales
    alert("No hay raíces reales");
}