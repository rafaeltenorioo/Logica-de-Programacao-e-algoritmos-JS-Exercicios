const inClube = document.getElementById('inClube');
const outClubesPre = document.getElementById('outClubes');
const outTableBody = document.querySelector('#outTable tbody');

let listaClube = [];

function adicionarClube() {

    const clube = inClube.value.trim(); // trim() remove espaços em branco no inicio/fim

    if (clube == '') {
        alert('Informe corretamente o clube');
        inClube.focus();
        return;
    }

    if (listaClube.includes(clube)) { // verifica se o clube já existe
        alert(`O clube "${clube}" já foi adicionado`)
        inClube.focus();
        return;
    }

    listaClube.push(clube) // adiciona clube ao array
    exibirClubes();
    inClube.value = '';
    inClube.focus();
}
const btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarClube);

function exibirClubes() {
    outClubesPre.textContent = listaClube.join('\n'); // exibe os clubes um por linha 
}

function montarTabelaJogos() {
    if (listaClube.length < 2) {
        alert('Adicione pelo menos dois clubes para montar a tabela de jogos');
        return;
    }

    outTableBody.innerHTML = '';

    // lógica de gerar os jogos (todos contra todos)
    for (let i = 0; i < listaClube.length; i++) {
        for (let j = i + 1; j < listaClube.length; j++) {
            const time1 = listaClube[i];
            const time2 = listaClube[j];

            const novaLinha = outTableBody.insertRow();
            const novaCelula = novaLinha.insertCell(0);

            novaCelula.textContent = `${time1} x ${time2}`; // define o texto da celula
        }
    }
}
const btMontar = document.getElementById('btMontar');
btMontar.addEventListener('click', montarTabelaJogos);

function novosClubes() {
    if (confirm('Deseja realmente limpar a lista de clubes e tabela de jogos?')) {
        listaClube = [];
        exibirClubes();
        outTableBody.innerHTML = ''; // limpa a tabela
        inClube.focus();
    }
}
const btNovos = document.getElementById('btNovos');
btNovos.addEventListener('click', novosClubes);
