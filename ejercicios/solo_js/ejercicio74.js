// Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el 
// usuario escriba “salir” que terminará.


const eco = () => {
    let entrada = '';
    while (entrada !== 'salir') {
        entrada = prompt('Ingrese algo (escribe "salir" para terminar):');
        if (entrada !== 'salir') {
            console.log(entrada);
        }
    }
    console.log('¡Hasta luego!');
}

eco();
