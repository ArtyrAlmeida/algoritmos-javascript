const removerAtributo = (obj, atr) => {
    delete obj[atr];

    return obj;
}

const objeto = {
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}

console.log(removerAtributo(objeto, "descricao"));