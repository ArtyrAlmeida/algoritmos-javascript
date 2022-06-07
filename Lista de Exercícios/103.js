function isPrime (num) {
    let divisores = 1;
    for(let k = 1; k <= num; k++) {
        if (num % k == 0) {
            divisores++;
        }
    }

    return divisores == 2;
}

const numero = 7;

console.log(isPrime(numero));