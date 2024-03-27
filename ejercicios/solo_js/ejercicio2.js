let contraseña = prompt('introduzca la contraseña');
let parametros = /^[a-zA-Z0-9]+$/;

if (parametros.test(contraseña)){
    if (confirm('Quieres valida tu contraseña')){

        let validarcontra = prompt('validando la contraseña la contraseña');
        
        if(validarcontra === contraseña){
            alert(`la contraseña ingresada es la misma ${contraseña}`);
        }else{
            alert(`La contraseña ${validarcontra} no es igual a ${contraseña}`)
        }
    
    
    
    
    }else{
        alert('se cancelo el proceso');
    }
    
}else{
    alert('la contraseña ingresada no cumple con valores alfanumericos')
}




