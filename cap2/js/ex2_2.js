function mostrarPromo() {
    const inVeiculo = document.getElementById("inVeiculo");
    const inPreço = document.getElementById("inPreço");
    const outVeiculo = document.getElementById("outVeiculo");
    const outRespostaEntrada = document.getElementById("outRespostaEntrada");
    const outRespostaParcelamento = document.getElementById("outRespostaParcelamento");

    const modelo = inVeiculo.value;
    const preço = inPreço.value;

    
    const entrada = Math.abs(preço/2);

   
    const parcelamento = (entrada/12).toFixed(2);

    outVeiculo.textContent = "Promoção:" + modelo;
    outRespostaEntrada.textContent = "Entrada de R$:" + entrada;
    outRespostaParcelamento.textContent = "+ 12x de R$:" + parcelamento;
}
const btVerPromo = document.getElementById("btVerPromo");
btVerPromo.addEventListener("click", mostrarPromo);