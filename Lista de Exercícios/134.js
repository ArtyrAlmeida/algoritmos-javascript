const numLinhas = 5;

let linha, contCaracteres = numLinhas;

for(let i = 0; i < numLinhas; i++) {
    linha = "";
    for(let k = 0; k < contCaracteres; k++) {
        linha += "*";
    }
    console.log(linha);
    contCaracteres--;
}