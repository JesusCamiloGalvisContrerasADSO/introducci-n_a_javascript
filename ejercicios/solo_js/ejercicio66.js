// . Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el 
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que 
// dura la inversión


let invertir = parseFloat(prompt('ingrese la cantidad a invertir'));
let interes = parseFloat(prompt('ingrese el interes anual'));
let anos = parseFloat(prompt('ingrese el numero de años'));



const operacion = (invertir,interes,anos) =>{
    let porcentaje = interes/100
    let aumentoAnual =0,aumento=0,total=0,totalBruto=0;
    for(let i =1;i<=anos;i++){
        aumentoAnual = invertir * porcentaje;
        aumento += aumentoAnual;
        total = aumentoAnual + interes;
        totalBruto +=total;
        alert(`el aumento del año ${i} es de $${aumentoAnual} para un total de capital bruto de $${totalBruto}`)
    }
    alert(`el total ganado en los años es de $${aumento} y el total mas invercion es de $${totalBruto}`)
}

operacion(invertir,interes,anos);
