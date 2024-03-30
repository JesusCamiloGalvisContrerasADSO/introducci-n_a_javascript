// Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el 
// monto total de la venta, según la cantidad de artículos solicitados durante el día.


const venta = () =>{
    let libros = parseInt(prompt('Ingrese el total de libros vendidos en el dia'));
    let cuadernos = parseInt(prompt('ingrese la cantidad de cuadernos vendidos durante el dia'));
    let lapiceros = parseInt(prompt('ingrese la cantidad de lapiceros vendidos durante el dia'));

    cantLibros = 10000 * libros;
    cantCuadernos = 7550 * cuadernos;
    cantLapiceros = 5550 * lapiceros;

    total = cantLibros + cantCuadernos + cantLapiceros;

    alert(`el total de ventas durante el dia es de $${total}`);

}

venta();
