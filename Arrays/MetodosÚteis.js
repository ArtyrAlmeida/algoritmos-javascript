// splice - primeiro parâmetro é o index que a remoção começa e o segundo é a quantidade de itens

let arraySplice = ["Item1", "Item2", "Item3", "Item4", "Item5"];

arraySplice.splice(3, 2);

console.log(arraySplice);

let arraySplice2 = ["Item1", "Item2", "Item3", "Item4", "Item5"];

console.log(arraySplice2.splice(2,3));

// indexOf - retorna o index de um certo elemento

let arrayIndexOf = ["Item1", "Item2", "Item3", "Item4", "Item5"];

console.log(arrayIndexOf.indexOf("Item2"));

// sort - organiza o array

let arraySort = ["Item1", "Item2","Item5", "Item3", "Item4"];

console.log(arraySort.sort());

// reverse - inverte a ordem do array

let arrayReverse = ["Item1", "Item2", "Item3", "Item4", "Item5"];

console.log(arrayReverse.reverse());

// join - converte o array em string, separando cada item com o separador especificado

let arrayJoin = ["Item1", "Item2", "Item3", "Item4", "Item5"];

console.log(arrayJoin.join(', '));