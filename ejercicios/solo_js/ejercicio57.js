// Consideramos la asignación de una calificación literal a un rango dado de calificaciones 
// numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación 
// de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8 
// Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No 
// Aprobado


const operacion  = () =>{
    let calificacion = parseFloat(prompt('ingrese su calificacion, recuerde que es de 1 a 10'));

    if(calificacion >= 1 && calificacion <= 10){
        if(calificacion<=10 && calificacion>=9.1){
            alert('la calificación de A equivale a Excelente');
        }else if(calificacion<=9 && calificacion>=8.1){
            alert('la calificación de A equivale a Muy bien');

        }else if(calificacion<=8 && calificacion>=7.5){
            alert('la calificación de A equivale a bien');
        }else{
            alert(`la calificación de ${calificacion} No Aprobado`)
        }

    }else{
        alert('el valor ingresado no corresponde')
    }
}


operacion();