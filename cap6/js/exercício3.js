function verificar() {
    const inFrase = document.getElementById("inFrase");
    const outResposta = document.getElementById("outResposta");

    const frase = inFrase.value.toUpperCase();

    if (frase == "") {
        alert("Informe uma frase")
        inFrase.focus();
        return;
    }
    let inverso = "";
    const fraseSemEspaço = frase.replace(/ /g, "");
    const tam = fraseSemEspaço.length;

    for (let i = tam - 1; i >= 0; i--) {
        inverso += fraseSemEspaço.charAt(i)
    }
    if (inverso === fraseSemEspaço) {
        outResposta.textContent = frase + " É UM PALÍNDROMO"
    } else {
        outResposta.textContent = frase + " NÃO É UM PALÍNDROMO"
    }

}
const btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificar)