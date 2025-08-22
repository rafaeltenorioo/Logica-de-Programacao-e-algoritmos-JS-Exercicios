function verificar() {
    const inVelocidadePermitida = document.getElementById("inVelocidadePermitida");
    const inVelocidadeDoCondutor = document.getElementById("inVelocidadeDoCondutor");
    const outResposta = document.getElementById("outResposta");

    const velocidadePermitida = Number(inVelocidadePermitida.value);
    const velocidadeDoCondutor = Number(inVelocidadeDoCondutor.value);

    if (velocidadeDoCondutor <= velocidadePermitida) {
        outResposta.textContent = "Sem multa";
    } else if (velocidadeDoCondutor <= 1.2*velocidadePermitida) {
        outResposta.textContent = "Multa leve"
    } else {
        outResposta.textContent = "Multa grave"
    }

}
const btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificar);