// Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un 
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo). t=v/q
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo 
// en segundos.


const volumenDeposito = () =>{
    let altura = parseFloat(prompt('ingrese la altura del deposito en cm'));
    let radio = parseFloat(prompt('ingrese el radio del deposito en cm'));

    volumen= (Math.PI) * (radio * radio) * altura;

    
}

volumenDeposito()

const tiempoLlenado = (volumen) =>{
    let caudal = parseFloat(prompt('ingresa el caudal del liquido en m^3/s'));

    tiempo= volumen/caudal;

    alert(`el tiempo de llenado del deposito es de ${tiempo} minutos, y el volumen del reposito es de ${volumen} cm^3`);
}

tiempoLlenado(volumen);

