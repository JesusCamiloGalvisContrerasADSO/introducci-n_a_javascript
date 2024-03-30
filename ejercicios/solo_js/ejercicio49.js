// Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean 
// positivos: área triangulo= lado * lado


const operacion=()=>{
    let base = parseFloat(prompt('ingrese la base del rectangulo en cm'));
    let altura = parseFloat(prompt('ingrese la altura del rectangulo en cm'));

    if(base > 0 && altura > 0){
        area = base * altura;

        alert(`el area del rectangulo es ${area} cm`)
    }else{
        alert('los valores ingresados no son positivos, error');
    }
    
}

operacion();