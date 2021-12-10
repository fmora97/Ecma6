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