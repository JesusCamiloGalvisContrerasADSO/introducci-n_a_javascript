// Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año. 
// Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué 
// parte le corresponde a Lorena?

const operacion = () =>{
    let total = parseInt(prompt('ingresa el total de tapas recogidas'));

    let Martín = (2/3) * total;
    let Jairo = (1/4) * total;

    lorena = total - (Martín + Jairo);

    alert(`el total que le corresponde a lorena es de ${lorena} tapas`);
}

operacion();

