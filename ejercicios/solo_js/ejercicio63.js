// Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los 
// años que ha cumplido (desde 1 hasta su edad).


let edad = parseInt(prompt('ingrese su edad'));

const validacion = edad =>{
    for(let i = 1; i <= edad;i++){
        console.log(`ya cumpliste tu año numero ${i}`);
    }
    alert('revisa tu consola')
}

validacion(edad);