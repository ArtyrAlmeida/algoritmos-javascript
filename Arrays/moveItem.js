function move(array, from, to) {
    if (from < 0) from += array.length;
    if (to < 0) to += array.length;
    fromValue = array[from];
    array.splice(from, 1);
    array.splice(to, 0, fromValue);
    return array;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2)); 
