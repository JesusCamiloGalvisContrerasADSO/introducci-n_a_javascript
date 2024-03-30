// Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como 
// constante el valor de una moneda.

let euro = 4169.57;
let dolares = 3864.90;
const conversionEuros = () =>{
    totalmoneda = pesos / euro;
    alert(`el total de Euros es de E ${totalmoneda}`);
}

const conversionDolares = () =>{
    totalmoneda = pesos / dolares;
    alert(`el total de dolares es de $${totalmoneda}`);
}

let pesos = parseFloat(prompt('ingrese la cantidad de dinero que desea convertir'));

let moneda = parseInt(prompt('ingrese 1 si desea covertir a euros, y ingrese dos si desea convertir a dolares'));

if(moneda === 1){
    conversionEuros();
    
}else if(moneda === 2){
    conversionDolares();
}else{
    alert('el valor ingresado no corresponde a nada, vuelva a intentarlo');
}