// Escribir un programa que calcule el volumen de un elipsoide


let a = parseFloat(prompt('ingrese el valor de a en cm'));
let b = parseFloat(prompt('ingrese el valor de b en cm'));
let c = parseFloat(prompt('ingrese el valor de c en cm'));

const operacion = (a,b,c) => {
    try {
        
        if (a == 0 || b == 0 || c == 0){
           throw new Error  ('los valores ingresados corresponden a 0, ERROR');
        }

        volumen = (4/3)*(Math.PI)*a*b*c;

        alert(`el volumen de la elipsoide es de ${volumen}`);

    } catch (error) {
        alert(error)
    }
}

operacion(a,b,c);