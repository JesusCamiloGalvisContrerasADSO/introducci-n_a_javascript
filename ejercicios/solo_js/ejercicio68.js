// . Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10.

alert('se mostrara por consola la tabla de multiplicar del 1');

const operacion=()=>{
    for (let i=1;i<=10;i++){
        console.log(`tabla de multiplicar del ${i}`);

        for(let j = 1;j <= 10;j++){
            let producto = i * j;
            console.log(`${i} x ${j} = ${producto}`);
        }
        console.log("")
    }
    
}

operacion();

