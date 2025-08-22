function mostrarPromo() {
    const inMedicamento = document.getElementById("inMedicamento");
    const inPreço = document.getElementById("inPreço");
    const outMedicamento = document.getElementById("outMedicamento");
    const outPreço = document.getElementById("outPreço");

    const medicamento = inMedicamento.value;
    const preço = inPreço.value;

    const preçoDeDois = Math.abs(preço*2)
    const preçoComDesconto = Math.floor(preçoDeDois);

    outMedicamento.textContent = "Promoção de " + medicamento;
    outPreço.textContent = "Leve 2 por apenas R$:" + preçoComDesconto;

}
const btMostrarPromo = document.getElementById("btMostrarPromo");
btMostrarPromo.addEventListener("click", mostrarPromo);