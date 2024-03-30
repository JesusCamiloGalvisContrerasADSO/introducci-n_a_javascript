// Calcule el mayor de tres números, permitiendo leer 3 valores diferentes



const numeroMayor = () =>{
    let num1 = parseFloat(prompt('ingrese el numero 1'));
    let num2 = parseFloat(prompt('ingrese el numero 2'));
    let num3 = parseFloat(prompt('ingrese el numero 3'));
    let mayor;
    
    mayor = Math.max(num1, num2, num3);
    
    if(mayor === num1){
        numero = 1;
    }else if(mayor === num2){
        numero = 2;
    }else{
        numero = 3;
    }
    
    
    alert(`el numero ${mayor} es el mayor: numero ${numero}`);
    
}

numeroMayor();

