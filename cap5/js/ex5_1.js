let pacientes = [];
const inPaciente = document.getElementById("inPaciente");
const outLista = document.getElementById("outLista");


function adicionarPaciente() {
    
    let nome = inPaciente.value; 

    if (nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }
    pacientes.push(nome); //adiciona o nome no fim da array

    let lista = "";

    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
}
const btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);

function adicionarPacienteUrgente() {

    let nome = inPaciente.value; 

    if (nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }
    pacientes.unshift(nome); //adiciona o nome no inicio da array

    let lista = "";

    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
}
const btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarPacienteUrgente);

function atenderPaciente() {
    
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera");
        inPaciente.focus();
        return;
    }
    const outAtendimento = document.getElementById("outAtendimento");
    const outLista = document.getElementById("outLista");

    const atender = pacientes.shift();
    //retira o primeiro paciente da lista de espera e o armazena na variável atender

    outAtendimento.textContent = atender

    let lista = "";

    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista
}
const btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);