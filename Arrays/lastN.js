function lastN(array, n = 1) {
    const numLeft = array.length - n;
    return array.splice(numLeft, n);
    
}

console.log(lastN([7, 9, 0, -2]));
console.log(lastN([7,9,0,-2],3)); 