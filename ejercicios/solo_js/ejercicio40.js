// Una empresa que contrata personal requiere determinar la edad de las personas que 
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que 
// nacieron. Realice el código que representen el algoritmo para solucionar este problema




const operacion = () =>{
    let nombre = prompt('ingrese su nombre');
    let anoNacimiento = parseInt(prompt('ingrese el año de su nacimiento'));
    let anoActual = new Date(). getFullYear();// asi se hace para colocar el año actuañ
    edad = anoNacimiento - anoActual;

    alert(`la edad de ${nombre} es de ${edad}`);

}

operacion();

