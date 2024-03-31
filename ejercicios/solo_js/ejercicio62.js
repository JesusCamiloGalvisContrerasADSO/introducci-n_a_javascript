// Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.



const mostarPalabra = () =>{
    let palabra = prompt('ingresa una palabra');

    for (let i = 1; i <= 10;i++){
        alert(`${palabra} numero ${i}`);
        console.log(`${palabra} numero ${i}`);
    }
}

mostarPalabra();