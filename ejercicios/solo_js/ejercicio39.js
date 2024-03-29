// Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura 
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le 
// permita ir generando presupuestos para cada cliente.


const operacion = () =>{
    let metros = parseFloat(prompt('ingrese el total de metros cuadrados que desea pintar'));
    let precio = parseFloat(prompt('ingrese el precio que vale por metro cuadrado'));

    total = metros * precio;

    alert(`el total a pagar por la pintada es de ${total}`);
}

operacion();




