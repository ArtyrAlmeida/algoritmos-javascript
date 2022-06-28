const pessoa = {
    nome: "Artur",
    idade: 19,
    peso: 90
}

// keys: retorna atributos do objeto em um array de strings

let keys = Object.keys(pessoa);
console.log("Keys: " + keys);

// values: retorna valores de todos os atributos do objeto

let values = Object.values(pessoa);
console.log("Values: " + values);

// entries: retorna um array contendo um array para cara atributo: valor

let entries = Object.entries(pessoa);
console.log("Entries: " + entries);

// defineProperty: adiciona uma propriedade no objeto. É possível definir características da propriedade.

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: true,
    value: "20/03/2003"
});

console.log("defineProperty: " + Object.keys(pessoa));

// assign: concatena atributos de n objetos a um objeto alvo

const o1 = {a: 1};
const o2 = {b: 2};
const o3 = {c: 3, d: 3};
console.log("Antes do assign: " + Object.keys(o1));

Object.assign(o1, o2, o3);
console.log("Depois do assign: " + Object.keys(o1));

// freeze: priva um objeto de alterações nos valores

Object.freeze(o1);
o1.a = 5;

console.log("Freeze: " + Object.values(o1));