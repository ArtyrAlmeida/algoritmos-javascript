function titleCase (string) {
    const stringArray = string.split(' ');
    const titleArray = stringArray.map(e => {
        let elementArray = e.split("");
        elementArray[0] = elementArray[0].toUpperCase();
        return elementArray.join("");
    });
    return titleArray.join(" ");
}

console.log(titleCase('JavaScript exercises. python exercises.')); 
