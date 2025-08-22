let clubes = [];

function adicionarClubes() {
    const inClube = document.getElementById("inClube");

    const clube = inClube.value;

    if (clube == "") {
        alert("Informe corretamente os dados")
        inClube.focus();
        return;
    }
    clubes.push({clube: clube});

    inClube.value = "";
    inClube.focus();

    listarClubes(); //chama function que lista os clubes
}
const btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarClubes);

function listarClubes() {
    if (clubes.length === 0) {
        alert("Não há clubes na lista");
        return;
    }
    
    let lista = "";

    for (let i = 0; i < clubes.length; i++) {
        lista += (i + 1) +". " + clubes[i].clube + "\n";
    }
    document.getElementById("outLista").textContent = lista;
}
const btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarClubes);

function montarTabela() {
    if (clubes.length === 0) {
        alert("Não há clubes na lista");
        return;
    }
    
    if (clubes.length % 2 == 1) {
        alert("Não é possível montar uma tabela de jogos, pois há uma quantidade ímpar de equipes.");
        return;
    } else {

        let confrontosTexto = "";

        for (let i = 0; i < clubes.length/2; i++) {
            confrontosTexto += clubes[i].clube + " x " + clubes[clubes.length - 1 - i].clube + "\n";
        }
        document.getElementById("outConfronto").textContent = confrontosTexto;

        document.getElementById("outLista").textContent = "";

    }
}
const btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarTabela);