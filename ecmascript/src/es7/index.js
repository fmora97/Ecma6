//CARACTERISTICAS AÑADIDAS EN ECMASCRIPT 7

//metodo include trabaja sobreun arreglo o string nos permite ver si hay un elemento dentro 

let numbers = [1,2,3,7,8];

//este if verifica atravez de includes si el elemento en ete caso 7 se encuentra o no en el arreglo 
if (numbers.includes(7)){
    console.log('ya existe el valor 7')
}else{
    console.log('el elemento no se encuentra.')
}

//Otra cosa que incorporaron es la elevacion a la potencia de un numero 


let base = 4;
let exponente = 4;
let result = base ** exponente; //de esta manera con doble * elevamos base a su exponente 

console.log(result);

