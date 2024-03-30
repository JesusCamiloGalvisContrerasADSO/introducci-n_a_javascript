// En un colegio, se necesita hacer una selección de basquetbol que represente al colegio, 
// para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19 
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.

const seleccion = ()=>{
    let persona = {
        edad : prompt('Ingrese su edad'),
        estatura : prompt('Ingrese su estatura en cm'),
        peso : prompt('Ingrese su peso en kg'),
    }

    if(persona.edad <= 19 && persona.estatura >= 175 && persona.peso>=75 && persona.peso <=80){
        alert('Cumples con los requisitos para pertenecer al equipo')
    }else{
        alert(`No cumples los requisitos para estar en el equipo
        
Recuerda que debes cumplir: los postulantes sean menores o iguales a 19 años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.`)
    }
}

seleccion();

