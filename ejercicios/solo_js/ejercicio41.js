// . Ingrese una frase que lo identifique como programador de Software y luego mostrar esta 
// frase invertida




const invertirFrase = () => {
    let frase = prompt('Ingrese una frase que lo identifique como programador de Software y luego mostrar esta frase invertida');

    let separar = frase.split(""); //asi se crea un arreglo

    let invertir = separar.reverse(); // con esto se invierte

    let unir = invertir.join(""); //con esto volvemos a unir para que sea un solo texto

    alert(`el texto invertido es ${unir}`);
}

invertirFrase();


