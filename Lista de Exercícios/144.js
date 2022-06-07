function obterFatorial (num) {
    let fatorial = 1;
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }

    return fatorial;
}

const n = 10;

for (let i = 1; i < n; i++) {
    if (obterFatorial(i) > i) {
        console.log(i);
        break;
    }
}