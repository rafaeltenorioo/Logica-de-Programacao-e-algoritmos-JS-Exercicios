let numContas = 0;
let valTotal = 0;

let resposta = "";

function registrarConta() {
    const inDescricao = document.getElementById("inDescricao");
    const inValor = document.getElementById("inValor");
    const outListaContas = document.getElementById("outListaContas");
    const outTotal = document.getElementById("outTotal");

    const descricao = inDescricao.value;
    const valor = Number(inValor.value);

    if (descricao == "" || valor == 0 || isNaN(valor)) {
        alert("Informe os dados corretamente");
        inDescricao.focus();
        return;
    }
    numContas++;
    valTotal = valTotal + valor;

    resposta = resposta + descricao + " -R$: " + valor.toFixed(2) + "\n";

    outListaContas.textContent = resposta + "----------------------------------------------------------------"
    outTotal.textContent = numContas + " Contas(s) - Total R$: " + valTotal.toFixed(2);

    inDescricao.value = "";
    inValor.value = "";
    inDescricao.focus();
}
const btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", registrarConta);

function limpar() {
    location.reload();
}
const btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limpar)