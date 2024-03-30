// Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo 
// zodiacal pertenece, para ello usar if_else anidados.

const operacion = () =>{
    let mes = prompt('ingrese su mes de nacimiento');
    let dia = parseInt(prompt('ingrese el dia de nacimiento'));

    let parametros = /^(0?[1-9]|[12]\d|3[01])$/;
    // let parametrosMesNombre = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)$/i;

    if(parametros.test(dia)){
        if(mes.toLowerCase() == "enero"){
            if(dia >= 1 && dia <= 19){
                alert('su signo es capricornio');
            }else{
                alert('su signo es acuario');
            }
        }else if(mes.toLowerCase() == "febrero"){
            if(dia >= 1 && dia <= 18){
                alert('su signo es acuario');
            }else{
                alert('su signo es piscis');
            }
        }else if(mes.toLowerCase() == "marzo"){
            if(dia >= 1 && dia <= 20){
                alert('su signo es piscis');
            }else{
                alert('su signo es aries');
            }
        }else if(mes.toLowerCase() == "abril"){
            if(dia >= 1 && dia <= 19){
                alert('su signo es aries');
            }else{
                alert('su signo es tauro');
            }
        }else if(mes.toLowerCase() == "mayo"){
            if(dia >= 1 && dia <= 20){
                alert('su signo es tauro');
            }else{
                alert('su signo es geminis');
            }
        }else if(mes.toLowerCase() == "junio"){
            if(dia >= 1 && dia <= 20){
                alert('su signo es géminis');
            }else{
                alert('su signo es cáncer');
            }
        }else if(mes.toLowerCase() == "julio"){
            if(dia >= 1 && dia <= 22){
                alert('su signo es cáncer');
            }else{
                alert('su signo es Leo');
            }
        }else if(mes.toLowerCase() == "agosto"){
            if(dia >= 1 && dia <= 22){
                alert('su signo es Leo');
            }else{
                alert('su signo es Virgo');
            }
        }else if(mes.toLowerCase() == "septiembre"){
            if(dia >= 1 && dia <= 22){
                alert('su signo es Virgo');
            }else{
                alert('su signo es Libra');
            }
        }else if(mes.toLowerCase() == "octubre"){
            if(dia >= 1 && dia <= 22){
                alert('su signo es Libra');
            }else{
                alert('su signo es Escorpio');
            }
        }else if(mes.toLowerCase() == "noviembre"){
            if(dia >= 1 && dia <= 21){
                alert('su signo es Escorpio');
            }else{
                alert('su signo es Capricornio');
            }
        }else if(mes.toLowerCase() == "diciembre"){
            if(dia >= 1 && dia <= 21){
                alert('su signo es Sagitario');
            }else{
                alert('su signo es Capricornio');
            }
        }
    }else{
        alert('el mes ingresado no corresponde')
    }
}

operacion();