// Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él 
//segundo, en caso contrario indicar con un mensaje que la operación no es posible 
//realizarla.

const operacionResta = () =>{
    let num1 = parseFloat(prompt('ingrese el primer numero'));
    let num2 = parseFloat(prompt('ingrese el segundo numero'));

    if(num1 >= num2){
        resta = num1 - num2;
        alert(`el resultado de la resta es de  ${resta}`);
    }else{
        alert('la operación no es posible realizarla.')
    }
}

operacionResta();