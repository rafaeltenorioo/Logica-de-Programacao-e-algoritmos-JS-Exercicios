function calcularValor() {
    const inValor = document.getElementById("inValor");
    const inTempo = document.getElementById("inTempo");
    const outValor = document.getElementById("outValor");

    const valor = inValor.value;
    const tempo = inTempo.value;

    const parteDoValor = Math.ceil(tempo/15)
    const valorFinal = (parteDoValor*valor).toFixed(2);

    outValor.textContent = "Valor a pagat R$: " + valorFinal;
    
}
const btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValor);