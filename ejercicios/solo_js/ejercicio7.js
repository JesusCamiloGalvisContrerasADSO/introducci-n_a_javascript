// los tramos impositivos para la declaración de la renta en un determinado país son:
// a. entre 10000 y 20000 ---- 5%
// b. entre 20000 y 35000 ---- 10%
// c. entre 35000 y 60000 ---- 20%
// d. más de 60000 ---- 45%
// escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo 
// de impositivo que le corresponde


let sueldo = parseFloat(prompt('ingrese su sueldo'));

let valoracion = sueldo =>{
    if(sueldo > 10000 && sueldo <= 20000){
        renta = sueldo*0.05;
        alert (`usted debe declarar renta del 5% y el valor a pagar es de ${renta}`);
    }
    if(sueldo >20000 && sueldo <= 35000){
        renta = sueldo*0.1;
        alert (`usted debe declarar renta del 10% y el valor a pagar es de ${renta}`);
    }
    if(sueldo > 35000 && sueldo <= 60000){
        renta = sueldo*0.2;
        alert (`usted debe declarar renta del 20% y el valor a pagar es de ${renta}`);
    }
    if(sueldo > 60000){
        renta = sueldo*0.45;
        alert (`usted debe declarar renta del 45% y el valor a pagar es de ${renta}`);
    }
    if(sueldo <= 10000){
        alert('usted no declara renta');
    }  
    
}

valoracion(sueldo);
