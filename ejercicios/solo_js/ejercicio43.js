// . Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir 
// la presencia de comillas y caracteres escapados


const operacion =()=>{
    let frase = prompt('ingrese la una frase entre comillas');
    let regla = /"(?:\\.|[^\\"])*"/ ;

    try {
        if(regla.test(frase)){
            alert(`la frese ${frase} cumple con los parametros requeridos`) ;
        }else{
            throw new Error ('la frase ingresada no cumple con los parametros requeridos, vuelva a intentarlo');
        }
    } catch (error) {
        alert(error);
    }
}

operacion();


