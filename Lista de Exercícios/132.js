const numLinhas = 5;

let linha, contCaracteres = numLinhas, contEspaco = 0;

for (let i = 0; i < numLinhas; i++) {
    linha = "";

    for (let k = 0; k < contEspaco; k++) {
        linha += " ";
    }
    for (let j = 0; j < contCaracteres; j++) {
        linha += "*";
    }
    console.log(linha);
    contEspaco++;
    contCaracteres--;
}