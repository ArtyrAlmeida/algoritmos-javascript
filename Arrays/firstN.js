function firstN(array, n = 1) {
    return array.splice(0, n);
}

console.log(firstN([7, 9, 0, -2],3));
