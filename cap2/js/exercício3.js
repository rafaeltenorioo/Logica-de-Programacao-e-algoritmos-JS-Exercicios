function verPromo() {
    const inProduto = document.getElementById("inProduto");
    const inPreço = document.getElementById("inPreço");
    const outProduto = document.getElementById("outProduto");
    const outPreço = document.getElementById("outPreço");

    const produto = inProduto.value;
    const preço = inPreço.value;

    const preçoDas3 = preço*3;
    const preçoComDesconto = preço/2
    const preçoFinal = (preçoDas3) - preçoComDesconto;

    outProduto.textContent = produto + " - Promoção: Leve 3 por R$: " + preçoFinal;

    outPreço.textContent = "O 3° produto custa apenas R$: " + preçoComDesconto;

}
const btVerPromo = document.getElementById("btVerPromo");
btVerPromo.addEventListener("mousedown", verPromo);