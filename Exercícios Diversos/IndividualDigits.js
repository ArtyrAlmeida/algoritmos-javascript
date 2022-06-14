function individualDigits(a) {
    let stringNum = a.toString();
    let stringArray = Array.from(stringNum);
    let numberArray = stringArray.map(str => {
        return Number(str)
    });

    return numberArray;
}

console.log(individualDigits(10));
