function adicionarTarefa() {
    const inTarefa = document.getElementById("inTarefa");

    const tarefa = inTarefa.value;

    if (tarefa == "") {
        alert('Informe a tarefa');
        inTarefa.focus();
        return;
    }

    const divQuadro = document.getElementById("divQuadro");

    const h5 = document.createElement('h5');
    const texto = document.createTextNode(tarefa);
    h5.appendChild(texto); //O texto será filho do h5!
    divQuadro.appendChild(h5); //E h5 será filho do divQuadro!

    inTarefa.value = "";
    inTarefa.focus();
}
const btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarTarefa);

function selecionarTarefa() {
    const h5 = document.getElementsByTagName('h5');
    const numH5 = h5.length;

    if (numH5 == 0) {
        alert('Nenhuma tarefa para selecionar')
        return;
    }

    let auxiliar = -1; // variável auxiliar para indicar linha selecionada

    for (let i = 0; i < numH5; i++) {

        //tag é da classe 'tarefa selecionada' (está selecionada)...
        if (h5[i].className == "tarefaSelecionada") {
            h5[i].className = "tarefaNormal";
            auxiliar = i;
            break
        }
    }

    // se a linha que está selecionada é a última, irá voltar para a primeira
    if (auxiliar == numH5 - 1) {
        auxiliar = -1;
    }

    h5[auxiliar + 1].className = "tarefaSelecionada";
}
const btSelecionar = document.getElementById("btSelecionar");
btSelecionar.addEventListener("click", selecionarTarefa);

function retirarSelecionada() {
    const divQuadro = document.getElementById('divQuadro');
    const h5 = document.getElementsByTagName('h5');
    const numH5 = h5.length;

    let auxiliar = -1;

    for (let i = 0; i < numH5; i++) {
        if (h5[i].className == "tarefaSelecionada") {
            auxiliar = i
            break;
        }
    }

    if (auxiliar == -1) {
        alert('Selecione uma tarefa para removê-la...')
        return;
    }
    if (confirm("Confirma exclusão de ' " + h5[auxiliar].textContent + " ' ?")) {
        divQuadro.removeChild(h5[auxiliar]);

        // observe que o conteúdo da tag h5 é recuperada por 'text content'!
    }
}
const btRetirar = document.getElementById("btRetirar");
btRetirar.addEventListener("click", retirarSelecionada);

function gravarTarefas() {
    const h5 = document.getElementsByTagName('h5');
    const numH5 = h5.length;

    if (numH5 == 0) {
        alert('Não há tarefas para serem salvas');
        return;
    }

    let tarefas = '' // vai acumular as tarefas

    for (let i = 0; i < numH5; i++) {
        tarefas += h5[i].textContent + ";" // acumula conteúdo de cada h5 separado por ';'       
    }
    localStorage.setItem('tarefasDia', tarefas.substr(0, tarefas.length - 1)); //grava e remove o ultimo ';'

    if (localStorage.getItem('tarefasDia')) {
        alert('Ok! Tarefas Salvas')
    }
}
const btGravar = document.getElementById("btGravar");
btGravar.addEventListener("click", gravarTarefas);

function recuperarTarefasSalvas() {
    if (localStorage.getItem('tarefasDia')) {
        const tarefas = localStorage.getItem('tarefasDia').split(';');
    
        const divQuadro = document.getElementById('divQuadro');

        for (let i = 0; i < tarefas.length; i++) {
            const h5 = document.createElement('h5');
            const texto = document.createTextNode(tarefas[i]);
            
            h5.appendChild(texto);
            divQuadro.appendChild(h5);
        }
    }
}
recuperarTarefasSalvas();
