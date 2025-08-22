function gerarEmail() {
    const inNome = document.getElementById("inNome");
    const outEmail = document.getElementById("outEmail");

    const nome = inNome.value;

    if (nome === "" || nome.indexOf(" ") === -1) {
        alert("Informe o nome completo do participante...");
        inNome.focus();
        return;
    }
    const criandoArray = nome.split(" ");
    let email = "";
    let tam = criandoArray.length;


    for (let i = 0; i < tam - 1; i++) {
        email += criandoArray[i].charAt(0);
    }
    email += criandoArray[tam - 1] + "@empresa.com.br"

    outEmail.textContent = "Email: " + email.toLowerCase();
}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarEmail);