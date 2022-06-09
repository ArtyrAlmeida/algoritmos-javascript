let num = 23458;
let auxNum = num, cont = 1;

while (auxNum > 9) {
    auxNum /= 10;
    cont++;
}

console.log(`${num} tem ${cont} algorismos.`);