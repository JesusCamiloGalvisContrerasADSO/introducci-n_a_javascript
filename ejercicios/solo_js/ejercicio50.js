// Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que 
// muestre en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable 
// temperatura es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra 
// Normal.



const operacion = () =>{
    let temperatura = parseFloat(prompt('ingrese la temperatura en grados celius'));
    let presion = parseFloat(prompt('ingrese la presión'));

    if(temperatura > 100 || presion > 200){
        alert(`ALARMA , la temperatura es de ${temperatura}° y la presion es de ${presion}`);
    }else{
        alert('Normal');
    }
}

operacion();