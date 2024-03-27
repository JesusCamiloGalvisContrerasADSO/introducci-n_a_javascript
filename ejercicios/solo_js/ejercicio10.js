// La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los 
// ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón. 
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en 
// función de su respuesta le muestre un menú con los ingredientes disponibles para que 
// elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están 
// en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana 
// o no y todos los ingredientes que lleva.


let pizza = prompt('escriba "si" si desea una pizza vegetariana, de lo contrario escriba no');

let valoracion = pizza =>{
    let ingrediente = "";
    if (pizza.toLowerCase() == "si" ){
        alert('los ingredientes vegetarianos son: Pimiento y tofu.')
        if(confirm('deseas agregar otro ingrediente a la pizza?')){
            let opcion =parseInt(prompt('puede agregar 1:Pepperoni, 2:Jamón, 3:Salmón, 4:nada mas escriba el numero correspondiente'))
            switch (opcion){
                case 1:
                    ingrediente = "peperoni";
                    alert('agregaste peperoni a tu pizza')
                    break;

                case 2:
                    ingrediente = "Jamón";
                    alert('agregaste Jamón a tu pizza')
                    break;

                case 3:
                    ingrediente ='Salmón';
                    alert('agregaste Salmón a tu pizza')
                    break;

                case 4:
                    ingrediente ='nada mas';
                    alert('agregaste nada a tu pizza')
                    break;
            }
            alert('la pizza tiene Pimiento, tofu y '+ ingrediente + 'la orden saldra en 20 minutos')
        }else{
            alert('no eligio mas ingredientes, la orden estara lista en 20 minutos aproximadamente')
        }
        
    }else{
        alert('los ingredientes de tu pizza no vegetariana son Pepperoni, Jamón y Salmón')
        if(confirm('deseas agregar algo mas a la pizza?')){
            let opcion =parseInt(prompt('puede agregar 1:Pimiento, 2:tofu, 3:nada mas - escriba el numero correspondiente'))
            switch (opcion){
                case 1:
                    ingrediente = "Pimiento";
                    alert('agregaste Pimiento a tu pizza')
                    break;

                case 2:
                    ingrediente = "tofu";
                    alert('agregaste Jamón a tu pizza')
                    break;

                case 3:
                    ingrediente ='nada mas';
                    alert('agregaste nada a tu pizza')
                    break;
            }
            alert(`los ingredientes de tu pizza vegetariana son Pepperoni, Jamón, Salmón y ${ingrediente} la orden saldra en 20 minutos` );
        }else{
            alert(`la orden saldra en 20 minutos aproximadamente` );
        }
    }
}

valoracion(pizza);