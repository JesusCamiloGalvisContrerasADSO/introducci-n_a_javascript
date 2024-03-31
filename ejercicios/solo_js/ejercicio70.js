// Escribir un programa que almacene la cadena de caracteres contraseña en una variable, 
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.


let contraseña = prompt('ingrese la contraseña');
let parametros = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).(8,15)$/


const operacion = (contraseña,)=>{
    if(parametros.test(contraseña)){
        let validacion = prompt('validando la contraseña, ingrese la contraseña');
        if(contraseña == validacion){
            alert('las contraseñas son iguales, ingresas al sistema');
        }else{
            alert('la contraseña no es la misma, no vas a ingresar al sistema');
        }
    }else{
        alert('la contraseña no cumple con los requisitos')
    }
}

operacion(contraseña);
