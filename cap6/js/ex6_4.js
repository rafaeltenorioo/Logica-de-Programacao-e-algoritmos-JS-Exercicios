function gerarCracha() {
    const inNome = document.getElementById("inNome");
    const outCracha = document.getElementById("outCracha");

    const nome = inNome.value;

    if (nome === "" || nome.indexOf(" ") === -1) {
        alert("Informe o nome completo do participante...");
        inNome.focus();
        return;
    }
    const priEspaco = nome.indexOf(" ");
    const ultEspaco = nome.lastIndexOf(" ");

    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

    outCracha.textContent = "Crachá: " + cracha;
}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarCracha);