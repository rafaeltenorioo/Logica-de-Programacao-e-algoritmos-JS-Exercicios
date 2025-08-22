let info = [];

function adicionarCandidato() {
    const inCandidato = document.getElementById("inCandidato");
    const inAcertos = document.getElementById("inAcertos");
    const outResposta = document.getElementById("outResposta");

    const nome = inCandidato.value;
    const acertos = Number(inAcertos.value);

    if (nome === "" || isNaN(acertos) || acertos === "") {
        alert("Informe os dados corretamente...")
        inCandidato.focus();
        return;
    }

    info.push({ nome: nome, acertos: acertos });

    inCandidato.value = "";
    inAcertos.value = ""
    inCandidato.focus();

    listaDeCandidatos();
}
const btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCandidato);

function listaDeCandidatos() {
    if (info.length == 0) {
        alert("Não há candidatos na lista");
        return;
    }

    let lista = "";
    for (let i = 0; i < info.length; i++) {
        lista += info[i].nome + " - " + info[i].acertos + " acertos" + "\n";
        
    }
    document.getElementById("outResposta").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listaDeCandidatos);

function aprovados() {
    const numAcertos = Number(prompt("Qual o número mínimo de acertos para a aprovação?"));

    let listaAprovados = "";
    for (let i = 0; i < info.length; i++) {
        if (info[i].acertos >= numAcertos) {
            listaAprovados += info[i].nome + " - " + info[i].acertos + " acertos" + "\n";
        }
    }
    if (listaAprovados == "") {
        document.getElementById("outResposta").textContent = "Não há candidatos aprovados...";
    } else {
        document.getElementById("outResposta").textContent = listaAprovados;
    } 
}
var btAprovados = document.getElementById("btAprovados");
btAprovados.addEventListener("click", aprovados);

