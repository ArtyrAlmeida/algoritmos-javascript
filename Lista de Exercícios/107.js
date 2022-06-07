const m = 0,
      n = 10;

let soma = 0,
    cont = 0,
    divisores;

for(let i = 0; i < n; i++) {
    divisores = 0;
    for(let k = 1; k <= i; k++) {
        if (i % k == 0) {
            divisores++;
        }
    }
    if(divisores == 2) {
        soma += i;
        cont++;
    }
}

console.log(soma / cont);