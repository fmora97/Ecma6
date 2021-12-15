//caracteristicas de ecmascript 9

//operador de reposo, es una herramienta que nos permite extraer las propiedades de un objeto que aun no se ha construido 

const obj = {
    name: 'Fernando',
    age: 24,
    country: 'GT',
};

//utilizando el operador de reposo para separa nuestros elementos
let {name, ...all} = obj;
console.log(all);

const  obj = {
    name: 'Fernando',
    age: 32,
}

const obj1 ={
    ...obj,
    country: 'GT'
}

console.log(obj1);


const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? resolve ('Hola mundo')
        : reject(new Error('test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally (() => console.log('Finalizo'))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year,month,day);