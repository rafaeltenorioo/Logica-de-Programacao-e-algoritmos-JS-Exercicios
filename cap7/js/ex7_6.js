let itens = [];
const inPizza = document.getElementById("inPizza");
const inBebida = document.getElementById("inBebida");
const outPedido = document.getElementById("outPedido");


function trocarItem() {


    if (rbPizza.checked) {
        inBebida.className = "oculta";
        inPizza.className = "exibe"
    } else {
        inPizza.className = "oculta"
        inBebida.className = "exibe"
    }

}
const rbPizza = document.getElementById("rbPizza")
rbPizza.addEventListener("change", trocarItem);

const rbBebida = document.getElementById("rbBebida")
rbBebida.addEventListener("change", trocarItem);

function mostrarNumSabores() {
    if (rbPizza.checked) {
        const pizza = inPizza.value;
        const num = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4;
        inDetalhes.placeholder = "Até " + num + " sabores";
    }
}
const inDetalhes = document.getElementById("inDetalhes")
inDetalhes.addEventListener("focus", mostrarNumSabores);

// cria função (anônima) ao evento blur (quando o campo perde o foco
inDetalhes.addEventListener("blur", function () {
    inDetalhes.placeholder = "";
})
inDetalhes.addEventListener("keypress", function (tecla) {
    if (tecla.keyCode == 13) {
        adicionarItem();
    }
})
function adicionarItem() {
    if (rbPizza.checked) {
        const num = inPizza.selectedIndex; // obtém nº do item selecionado
        const produto = inPizza.options[num].text // texto do item selecionado
    } else {
        const num = inBebida.selectedIndex;
        const produto = inBebida.options[num].text
    }
    const detalhes = inDetalhes.value;
    itens.push(produto + " (" + detalhes + ")");
    outPedido.textContent = itens.join("/n")
    limparCampos();
}
const btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarItem);

function limparCampos() {
    rbPizza.checked = true;
    inBebida.className = "oculta";
    inPizza.className = "exibe";
    inPizza.selectedIndex = 0;
    inDetalhes.value = "";
    rbPizza.focus();
}
