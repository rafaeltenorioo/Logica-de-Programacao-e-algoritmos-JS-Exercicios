function criptografar() {

    const inMensagem = document.getElementById("inMensagem");
    const outResposta = document.getElementById("outResposta");
    const mensagem = inMensagem.value;
    let pares = "";
    let impares = "";

    if (mensagem === "") {
        alert("Informe uma mensagem");
        inMensagem.focus();
        return;
    }


    for (let i = 0; i < mensagem.length; i++) {

        if ((i + 1) % 2 == 0) {
            pares += mensagem.charAt(i)
        } else {
            impares += mensagem.charAt(i)
        }
    }
    outResposta.textContent = "Mensagem Criptografada: " + pares + impares;

    document.getElementById("btDescriptografar").onclick = function () {
        inMensagem.value = pares + impares
        outResposta.textContent = "Mensagem Descriptografada: " + mensagem;
    }
}

const btCriptografar = document.getElementById("btCriptografar");
btCriptografar.addEventListener("click", criptografar);


