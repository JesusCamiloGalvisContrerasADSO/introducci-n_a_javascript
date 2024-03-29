// Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.


const edadMadre = () => {
    let madre = parseFloat(prompt('Ingrese la edad de la madre'));
    let hijo = parseFloat(prompt('ingrese la edad de su hijo'));

    madreEdad =  madre - hijo;

    alert(`la edad de la madre cuando tuvo su hijo fue de ${madreEdad}`);
}

edadMadre();
