const termoInicial = 2456,
      termoFinal   = 9999;

let milhar, centena, dezena, unidade;

for(let i = termoInicial; i <= termoFinal; i++) {
    milhar = Math.floor(i / 1000);
    centena = Math.floor(i / 100) - milhar * 10;
    dezena = Math.floor(i / 10) - (milhar * 100 + centena * 10);
    unidade = Math.floor(i % 10);

    if (milhar == unidade && centena == dezena) console.log(i);
}