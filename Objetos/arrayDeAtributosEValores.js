const atributosEValores = obj => {
    return Object.entries(obj);
}

const objeto = {
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}

console.log(atributosEValores(objeto));