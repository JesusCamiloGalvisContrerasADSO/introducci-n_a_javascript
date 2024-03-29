// Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para 
// obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos.


let exam1 = parseFloat(prompt('ingrese la nota del examen 1'));
let exam2 = parseFloat(prompt('ingrese la nota del examen 2'));
let exam3 = parseFloat(prompt('ingrese la nota del examen 3'));
let exam4 = parseFloat(prompt('ingrese la nota del examen 4'));

const operacion = (exam1,exam2,exam3,exam4) =>{
    if(exam1 >= 1 && exam1 <=5 && exam2 >= 1 && exam2 <=5 && exam3 >= 1 && exam3 <=5 && exam4 >= 1 && exam4 <=5){
        promedio = (exam1+exam2+exam3+exam4)/4;
        alert(`el promedio de la calificacion es de ${promedio}`)
    }else{
        alert('alguna de las calificaciones son mayores a 5 o menores a 1 ERROR');
    }
    
}

operacion(exam1,exam2,exam3,exam4);
