const num = 7;

let soma = 0;

for(let i = 0; i < 6; i++) {
    if (num % i == 0) {
        soma += i;
    }
}

if(num == soma) {
    console.log("É perfeito.");
}
else {
    console.log("Não é perfeito.")
}