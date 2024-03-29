// Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha 
// calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final.


if (confirm('vamos a realizar el promedio final de materia de algoritmos')){

    
    let par1 = parseFloat(prompt('ingrese la nota del parcial 1'));
    let par2 = parseFloat(prompt('ingrese la nota del parcial 2'));
    let par3 = parseFloat(prompt('ingrese la nota del parcial 3'));

    let examen = parseFloat(prompt('ingrese la nota del examen final'));

    let trabajo = parseFloat(prompt('ingrese la nota del trabajo final'));

    if (par1 <= 5 && par2 <= 5 && par3 <= 5 && examen <= 5 && trabajo <= 5){
        const operacion = (par1, par2, par3, examen, trabajo) => {
            parciales = ((par1+par2+par3)/3)* 0.55;
            examenF = examen*0.3;
            trabajoF = trabajo * 0.15;
    
            notaFinal = parciales+examenF+trabajoF;
    
            alert(`la calificacion final de algoritmos es de ${notaFinal}`);
        }
    
        operacion(par1, par2, par3, examen, trabajo);
    }else{
        alert('algun valor es mayor a 5, intente nuevamente');
    }
    


}else{
    alert('se cancelo el proceso');
}