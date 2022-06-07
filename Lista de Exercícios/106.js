const m = 0, 
      n = 10;

let soma = 0;
let quantidade = 0;

for (let i = m; i <= n; i++) {
    soma+=i;
    quantidade++;
}

console.log(soma / quantidade);