// Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica 
// desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio


const areaCirculo = () =>{
    let radio = parseFloat(prompt('ingrese el radio del circulo'));
    area = PI * radio* radio

    alert(`el area del circulo es ${area}`);
}

const areaTriangulo = () => {
    let base = parseFloat(prompt('ingrese la base del triangulo'));
    let altura = parseFloat(prompt('ingrese la altura del triangulo'));

    area = (base * altura) / 2;

    alert(`el area del triangulo es ${area}`);
}

let figura = prompt('ingrese T para calcular el area del triangulo o C para la del circulo');

if(figura.toLowerCase() == "t"){
    areaTriangulo();
}else if(figura.toLowerCase() == "c"){
    areaCirculo();
}else{
    alert('los valores ingresados no corresponden');
}

