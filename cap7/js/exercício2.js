const inNome = document.getElementById("inNome");

nome = inNome.value;
function validarNome(nome) {
    if (nome == "" || nome.indexOf(" ") == -1) {
        alert("Informe o nome completo");
        inNome.focus()
        return;
    }
}
const btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", validarNome(nome))