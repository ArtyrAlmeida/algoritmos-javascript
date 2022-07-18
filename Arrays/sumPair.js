function sumPair(numbers, target) {
    let pair = [-1, -1];

    numbers.forEach((e, index, array) => {
        if (e + array[index + 1] == target) {
            pair = [index, index + 1];
        }
    });
    return pair;
}

const numbers = [10,20,10,40,50,60,70], target = 50;

console.log(sumPair(numbers, target));