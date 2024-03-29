// Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12 
// caracteres, y al menos una mayúscula, una minúscula, y un dígito.

alert('debe tener entre 8 y 12 caracteres, y al menos una mayúscula, una minúscula, y un dígito')
let contrasena = prompt('ingrese su contraseña');

let parametros = /^(?=.*[a-z])  (?=.*[A-Z])  (?=.*\d)[a-zA-Z\d]{8-12}$/

// /^[a-z+/A-Z+\d+]{8-12}+$/

const validacion = (contrasena, parametros) =>{
    if (parametros.test(contrasena)){
        alert('la contraseña es segura y cumple con los requisitos');
    }else{
        alert('la contraseña no es segura y no cumple con los parametros');
    }
}

validacion(contrasena, parametros);