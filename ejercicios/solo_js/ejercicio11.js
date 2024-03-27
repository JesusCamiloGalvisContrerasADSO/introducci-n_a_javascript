// Escribir un programa que sume, resta, multiplique y divida dos números.


let num1 = parseFloat(prompt('Ingresa el primer numero'));
let num2 = parseFloat(prompt('Ingresa el segundo numero'));

const proceso = (num1, num2) =>{
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multi = num1 * num2;
    let div = num1 / num2;
    alert(`el resultado de la suma es de ${suma}`);
    alert(`el resultado de la resta es de ${resta}`);
    alert(`el resultado de la multiplicacion es de ${multi}`);
    alert(`el resultado de la divicion es de ${div}`);
}

proceso(num1,num2);