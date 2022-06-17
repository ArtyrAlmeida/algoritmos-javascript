function arrayMerge(a, b) {
    let concat = a.concat(b);
    let filteredArray = concat.filter((c, index) => {
        return concat.indexOf(c) === index; 
    });

    return filteredArray.sort((a,b) => a-b);
}

console.log(arrayMerge([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));