// Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que 
// lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad 
// de cursos es mayor que 6 el pago será únicamente de $1.200.000.


const operacion = ()=>{
    
    if(confirm('deseas ingresar algun curso')){
        let cursos = 1;
        for(let i = 1; i==i;i++){
            let NombreCurso = prompt('Ingresa el nombre del curso')
            if(confirm('¿Deseas agregar otro curso?')){
                cursos++;
                continue;
                
            }else{
                break;
            } 
        }
        if (cursos >= 6){
            total = cursos * 1200000;
            alert(`el pago por curso sera de $1'200.000 el total a pagar es de $${total}, total de cursos ${cursos}`);
        }else{
            total = cursos * 2000000;
            alert(`el pago por curso sera de $2'000.000 el total a pagar es de ${total}, total de cursos ${cursos}`);
        }
    }
}

operacion();