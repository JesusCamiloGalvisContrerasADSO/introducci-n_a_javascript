// Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el 
// menor o si son iguales.


const valoracion = () =>{
    let num1 = parseFloat(prompt('ingrese el numero 1'));
    let num2 = parseFloat(prompt('ingrese el numero 2'));
    let num3 = parseFloat(prompt('ingrese el numero 3'));
    let mayor;
    let menor;
    
    mayor = Math.max(num1, num2, num3);
    menor = Math.min(num1, num2, num3);

    if(num1 === num2){
        alert(`el numero ${num1} es igual al numero ${num2}`);
    }else if(num1 == num3){
        alert(`el numero ${num1} es igual al numero ${num3}`);
    }else if(num2 === num3){
        alert(`el numero ${num2} es igual al numero ${num3}`);
    }else if(num1 == num2 && num2 == num3){
        alert(`todos los numero son iguales`);
    }else if (num1 !== num2 || num2 !== num3){
        mayor = Math.max(num1, num2, num3);
        menor = Math.min(num1, num2, num3);
        alert(`el numero mayor es ${mayor}`);
        alert(`el numero menor es ${menor}`);
    }
}

valoracion();
