// los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el 
// nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los 
// hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que 
// pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde.



let sexo = prompt('ingrese su sexo');
let nombre = prompt('ingrese su nombre');

let valoracion = (sexo, nombre ) => {
    if(sexo == 'hombre' || sexo == 'Hombre' || sexo == 'HOMBRE'){
        parametros = /^[n-zN-Z]+$/;

        if(parametros.test(nombre)){
            alert('usted pertenece al grupo A');
        }else{
            alert('usted pertenece al grupo B');
        }

    }else{
        parametros = /^[a-mA-M]+$/;
        if(parametros.test(nombre)){
            alert('usted pertenece al grupo A');
        }else{
            alert('usted pertenece al grupo B');
        }
    }
}

valoracion(sexo,nombre);