function isAProperty(a, b) {
    let propertyArray = Object.keys(a);

    let check = propertyArray.indexOf(b);

    if (check == -1) return false;
    
    return true;
}

console.log(isAProperty({x:'a',y:'b',z:'c'},'z'));