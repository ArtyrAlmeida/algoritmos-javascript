const numLinhas = 10;

let linha, contCaracteres = 1;

for(let i = 0; i < numLinhas; i++) {
    linha = "";
    for(let k = 0; k < contCaracteres; k++) {
        linha += '*';
    }
    console.log(linha);
    contCaracteres++;
}