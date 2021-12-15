//en esta version se implementaron nuevos cambios aqui tenemos ejemplos 

//object.entries el cual permite devolver clave y valores de una matriz 

const data = { //declaramos un objeto 

    frontend: 'Fernando',
    backend: 'Itzel',
    desing: 'Diego',
}

const entries = Object.entries(data); //declaramos una constante y almacenamos en el este metodo al cual le enviamos como parametro nuestro objeto data
console.log(entries) //imprime un arreglo de strings 


//cuando utilicemos object.entries dispones de length 
console.log(entries.length)

//OBJECT VALUES NOS DEVUELVE LOS VALORES DE UN OBJETO A UN ARREGLO convirtiendolo 

const data2 = {
    frontend: 'Fernando',
    backend: 'Itzel',
    desing: 'Diego',
}

//transformando de objeto a arreglo 

const values = Object.values(data2);
console.log(values)
console.log(values.length);

//otra caracteristica es el padding ejemplo: 

const string = 'Hello';
//como agregar una cadena vacia o elementos a este string

//le enviamos dos parametros, 1: cuantos caracteres tendremos en total y los caracteres que deseamos añadir
//el padStart indica que seran añadidos al inicio del string y el end al final 
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12, '-----'));

console.log('food'.padEnd(12, ' -----'));

//ASYN Y AWAIT caracterisitcas principales añadidas en esta version 

const helloWorld = () =>{
    //creando una nueva promesa 
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('test error'))
    });
};

//implementando async 
const helloAsync = async () =>{
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anothorFunction = async () => { //utilizando try y catch tendremos una manera facil de manejar errores en la funcion 
    try{
        const hello = await helloWorld();
        console.log(hello)
    }catch (error){
        console.log(error);
    }
};

anothorFunction();


