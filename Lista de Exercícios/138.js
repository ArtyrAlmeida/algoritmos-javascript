const numero = 1092;
let soma = 0;
let numeroString = numero.toString();

for(let i = 0; i < numeroString.length; i++) {
    soma += parseInt(numeroString[i]);
}

console.log(`A soma dos algorismos de ${numero} é ${soma}`);