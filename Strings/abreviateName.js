function abbreviateName (string) {
    const nameArray = string.split(" ");
    if (nameArray.length == 1) return `${nameArray[0][0]}.`;
    else return `${nameArray[0]} ${nameArray[1][0]}.`;
}

console.log(abbreviateName("Robin Singh"));
