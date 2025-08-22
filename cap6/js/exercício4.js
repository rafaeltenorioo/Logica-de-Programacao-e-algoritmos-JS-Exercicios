function calcularDataLimite() {
    const inData = document.getElementById("inData");
    const inValor = document.getElementById("inValor");
    const outDataLimite = document.getElementById("outDataLimite");
    const outValorComDesconto = document.getElementById("outValorComDesconto");

    const data = inData.value;
    const valor = Number(inValor.value);

    if (data == "" || valor == 0 || isNaN(valor)) {
        alert("Informe os dados corretamente");
        inData.focus();
        return;
    }
    const dataLimite = new Date();

    const partes = data.split("-");
    dataLimite.setDate(Number(partes[2]));
    dataLimite.setMonth(Number(partes[1]) - 1);
    dataLimite.setFullYear(Number(partes[0]));

    const dia = dataLimite.getDate() // obtém o dia da multa
    dataLimite.setDate(dia + 90); // aumenta 90 dias na data da multa

    const diaInfração = dataLimite.getDate();
    const mes = dataLimite.getMonth();
    const ano = dataLimite.getFullYear();

    const valorComDesconto = valor * 0.8

    outDataLimite.textContent = "Data Limite para Pagto com Desconto: " + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano;
    outValorComDesconto.textContent = "Valor com Desconto R$: " + valorComDesconto.toFixed(2);
}
const btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularDataLimite)