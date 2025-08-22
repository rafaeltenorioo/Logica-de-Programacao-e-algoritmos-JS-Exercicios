function verificar() {
    const inNúmero = document.getElementById("inNúmero");
    const outResposta = document.getElementById("outResposta");

    const numero = Number(inNúmero.value);

    if (numero%2 == 0) {
        outResposta.textContent = "Resposta: " + numero + " é Par";
    } else {
        outResposta.textContent = "Resposta: " + numero + " é Ímpar";
    }

}
const btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificar);