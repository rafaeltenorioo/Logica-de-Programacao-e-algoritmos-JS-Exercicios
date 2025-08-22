function mostrarTabuada() {
    const inNumero = document.getElementById("inNumero");
    const outTabuada = document.getElementById("outTabuada");

    const numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido...")
        inNumero.focus();
        return;
    }
    
    let resposta = "";

    for (let i = 1; i <= 30; i++) {
        resposta = resposta + numero + " x " + i + " = " + numero*i + "\n";
    }

    outTabuada.textContent = resposta;
}
const btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarTabuada);