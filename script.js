function calcularEmissao () {
    const consumoEnergia = parseFloat(document.getElementById("totalconta").value);
    const fatorEmissao = 0.0385;

    if (isNaN(consumoEnergia) || consumoEnergia <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um valor válido de consumo em kWh.";
        return;
    }
    const emissaoMensal = consumoEnergia * fatorEmissao;
    const emissaoAnual = emissaoMensal * 12;

    document.getElementById("resultado").innerText = 
        `Sua pegada de carbono para o consumo de ${consumoEnergia} kWh é de aproximadamente ${emissaoMensal.toFixed(2)} kg por mês, ` +
        `ou seja, ${emissaoAnual.toFixed(2)} kg por ano.`;
}   
