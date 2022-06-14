const num1 = 12, num2 = 6, num3 = 18;

let maisBaixo = Math.min(num1, num2, num3);
let mdc = 2;

for(let i = 2; i < maisBaixo; i++) {
    if(num1 % i == 0 && num2 % i == 0 && num3 % i == 0) {
        mdc = i;
    }
}
 
console.log(`O MDC entre ${num1}, ${num2} e ${num3} é ${mdc}`);