// Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual 
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos 
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60

const operacion = () =>{
    let notas = [];

    if(confirm('deseas ingresar una nota?')){

        let a =0,b=0,c=0,d=0,perdieron=0;

        
        for(let i = 1;i == i;i++){
            let nota = parseInt(prompt(`ingrese la nota del estudiante ${i}`));

            notas.push(nota);

            if(nota <= 100 && nota >= 90){
                a++;
            }else if(nota < 90 && nota >= 80){
                b++;
            }else if(nota < 80 && nota >= 70){
                c++;
            }else if(nota < 70 && nota >= 60){
                d++;
            }else{
                perdieron++
            }

            if(confirm('deseas agregar otra nota')){
                continue;
            }else{
                break;
            }
        }

        let notaMax = Math.max(...notas) ;
        let notaMin = Math.min(...notas) ;

        alert(`La nota maxima fue ${notaMax}`);
        alert(`la nota minima fue ${notaMin}`);

        alert(`el total de notas del grupo a: ${a}`);
        alert(`el total de notas del grupo b: ${b}`);
        alert(`el total de notas del grupo c: ${c}`);
        alert(`el total de notas del grupo d: ${d}`);
        alert(`el total de notas del grupo que perdieron: ${perdieron}`);
    }else{
        alert('se cancelo el programa');
    }

}

operacion();
