//este es un array con varios niveles es decir que tiene otros array dentro de el
let array = [1,2,3, [1,2,3, [1,2,3,]]];

//flat nos permite aplanar nuestros array anidados
console.log(array.flat());


//flat map permite mapear cada elemento luego pasarlo por una funcion y aplanarlo segun el resultado 
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value,value * 2]));
