const baseDecimal = 9;
let aux = baseDecimal;
let binario = "";

while (aux >= 1) {

    binario += Math.floor(aux % 2);
    aux /= 2;
}

console.log(`${baseDecimal} = ${binario}`);
