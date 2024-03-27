// . Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b

let a = parseFloat(prompt('Ingrese el valor de a'));
let b = parseFloat(prompt('Ingrese el valor de b'));
let c = parseFloat(prompt('Ingrese el valor de c'));

const operacion = (a,b,c) => {
    total=(a+7*c) / (b+2-a) + 2*b;
    alert(`el total de la operacion es de ${total}`);
}

operacion(a,b,c);