//parametros por defecto 

//asi se hacia antes 

function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 24;
    var country = country || 'Guatemala';

    console.log(name, age, country);
}

//con ecmaScript 6

function newFunction2(name = 'oscar', age = 24, country= 'GT'){
    console.log(name,age,country);
}

//para ejecutar se puede llamar de dos maneras 

//manera 1 sin parametro para que tome los que tiene por defecto 
newFunction2();

//manera 2: enviando los parametros que yo desee 

newFunction2('Josue', 25, 'Bolivia');


//los template  literal nos permite separa o unir varios elementos 
let hello = "Hello";
let world = "World";

//si queremos concatenarlo se hace hacia de esta manera : 
let epicPharase = hello + " " + world;
console.log(epicPharase);

//de esta manera se hace en ecmascript6
//nota se utilizan estas comillas "Francesas" ``

let epicPharase2 = `${hello} ${world}`;
console.log(epicPharase2);


//utilizando multilineas antes 
let lorem ="Valiente no es aquel que no tiene miedo, si no aquel que hace las cosas a pesar de tener miedo \n"
+ "otra frase epica,";


//multilineas con Ecma6

let lorem2 = `otra frase epica que neceistamos
ahora es otr frase epica`;

console.log(lorem);
console.log(lorem2);


//objeto 
let person = {
    'name': 'Fernando',
    'age': 32,
    'country': 'GT'
}

//acceder a datos de los objetos antes

console.log(person.name, person.age);

//acceder a datos de un objeto con ecma6
//mandamos a llamar nuestros elementos que sabemos que tenemos dentro del objeto y luego de las llaves indicamos que objeto es
let {name, age, country} = person;

console.log(name, age, country);


//arreglos 

let team1 = ['Oscar','Fernando','Ricardo'];
let team2 = ['Valeria','Yesica','Camila'];

//de esta manera se unen dos arrelos ademas igresando un nuevo dato en ecma6
let education = ['David', ...team1, ...team2];

console.log(education);


/*var = significa que la variable tendra un alcance global
let = indica que la variable solo se podra usar dentro del bloque de codigo donde fue declarada*/ 

//ejemplos de alcance de variable 

{
    var global = "Global var";
}

{
    let globalLet = 'Global let';
    console.log(globalLet);
}

console.log(global); //ya que var es global podremos acceder a ella sin ningun problema
// console.log(globalLet); ya que global let no lo es no podremos imprimirla fuera de su bloque de codigo


//constantes se caracterizan por que sus valores no pueden ser modificados

const a = 'b';
console.log(a);

//propiedad de objetos mejorada en ECMa6 


let name = 'Fernando';
let age = '24';


//anterior a Ecma6

obj = {name: name, age: age};

//con ecma6

obj2 = {name, age}; //utilizamos las variables declaradas y tomara  el nombre de la var como llave y el valor de la misma como valor
console.log(obj2);

//funciones de tipo flecha o arrow function 

const names = [
    {name: 'Fernando', edad = 24},
    {name : 'Josue'. edade = 27}
]

//iterar antes de ECMA6 utilizando map

let listOfNames  = names.map(function(item){
    console.console.log(item.name);
})

//con arrow function 
//hace exactamente lo mismo que el de arriba pero de manera mas corta 
let listOfNames2 = names.map(item => console.log(item.name));

//otra manera de arrow function 

const listOfNames3 = (name,age,country) =>{
    //codigo que necesitemos
}

//arrow function con un solo parametro 

const listOfNames4 = name =>{
    //codigo
};

//otra manera que podemos encontrar estamos generando una funcion que recibe como parametro un numero y retornara num * num 
const square = num => num * num;

//Promesas Esto ayuda al sincronismo ya que javaScript no es sincronico esto nos ayudara a hacerlo sincronico 

//generando promesa 
const helloPromise = () =>{
    return new Promise((resolve, reject)=>{
        if (false){
            resolve('Todo bien')
        }else{
            reject('ups! algo salio mal')
        }
    })
}

//ejecutando promesoa 

helloPromise()
    .then(Response => console.log(Response))
    //podemos anidar elemntos then
    .then(() => console.log('Hola'))
    .catch(error  => console.log(error));

//Clases en Ecma6 esto nos ayuda a aplicar la progra orientada a objetos 

//creando una clase 

class calculator {
    //asignando un constructor que declarara las variables en scope o alcance global
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    //metodo sumar 
    sum (valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

//utilizando la clase 

const calc = new calculator(); //creamos una varible llamada calc que es igual a nuestra clase 
console.log(calc.sum(2,2)); //y al enviarlo a imprimir llamamos a calc . y su metodo sum y los parametros

//trabajando con modulos 
//importando modulo hello de mi archivo module.js

import {hello } from './module'; //importamos con el nombre y luego from para dar el path donde se encuentra nuestra funcion

//ahora nuestra funcion ya se encuentra disponible para utilizarla
hello();


//TRABAJANDO CON GENERADORES 
//creamos una funcion 


function* helloWorld (){ //creamos una funcion colocando * para indicar que es un generador
    if (true){ //validamos lo que necesitemos en este caso esta quemado true
        yield 'Hello, '; //utilizando el valor yield que permite retornar algo y guarda el stado de forma interna
    }

    if (true){
        yield 'World';
    }
};

//ejecutando generador 

const generatorHello = helloWorld();
//para ejecutar utilizamos next 

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
