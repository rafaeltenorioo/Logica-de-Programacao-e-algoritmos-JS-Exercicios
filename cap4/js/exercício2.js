
function mostrarChinchilas() {
    const inQuantidade = document.getElementById("inQuantidade");
    const inAnos = document.getElementById("inAnos");
    const outResposta = document.getElementById("outResposta");

    let chinchilas = Number(inQuantidade.value);
    const anos = Number(inAnos.value);

    if (chinchilas <= 2 || isNaN(chinchilas)) {
        alert("Infome uma quantidade de chinchilas maior que 2");
        inQuantidade.focus();
        return;
    }

    let repetição = "";


    for (let i = 1; i <= anos; i++) {
        if (i === 1) {
            repetição = repetição + i + "° Ano:" + chinchilas + " Chinchilas" + "\n"
        } else {
            chinchilas = chinchilas * 3;
            repetição = repetição + i + "° Ano:" + chinchilas + " Chinchilas" + "\n"
        }
    }
    outResposta.textContent = repetição;

}
const btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarChinchilas);