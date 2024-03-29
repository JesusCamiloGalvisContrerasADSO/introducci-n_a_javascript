// . Calcular el sueldo de un empleado dados como datos de entrada: 
// a. Nombre.
// b. horas de trabajo.
// c. pago en hora.


let nombre = prompt('ingrese si nomre');
let horas = parseFloat(prompt('ingrese la cantidad de horas de trabajo'));
let pago = parseFloat(prompt('ingrese la cantidad de pago por hora de trabajo'));


const operacion = (nombre,horas,pago) =>{
    total = horas * pago;
    alert(`el total de pago para el trabajador ${nombre} sera de  $${total}`);
}

operacion(nombre,horas,pago);
 
