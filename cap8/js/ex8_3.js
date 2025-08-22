function incluirAposta() {
    const inNome = document.getElementById("inNome");
    const inPeso = document.getElementById("inPeso");

    const nome = inNome.value;
    const peso = Number(inPeso.value);

    if (nome == "" || peso == 0 || isNaN(peso)) {
        alert("Informe nome e peso da apostar")
        inNome.focus()
        return;
    }

    if (verApostaExiste(peso)) {
        alert("Alguém já apostou este peso, informe outro...")
        inPeso.focus()
        return;
    }
    if (localStorage.getItem("melanciaNome")) {
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;

        localStorage.setItem("melanciaNome", melanciaNome);
        localStorage.setItem("melanciaPeso", melanciaPeso);
    } else {
        localStorage.setItem("melanciaNome", nome);
        localStorage.setItem("melanciaPeso", peso);

    }
    mostrarApostas();

    inNome.value = "";
    inPeso.value = "";
    inNome.focus();
}
const btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", incluirAposta);

function verApostaExiste(peso) {
    let existe = false;

    if (localStorage.getItem("melanciaPeso")) {
        const pesos = localStorage.getItem("melanciaPeso").split(";")

        if (pesos.indexOf(peso.toString()) >= 0) {
            existe = true;
        }
    }
    return existe;
}
function mostrarApostas() {
    const outApostas = document.getElementById("outApostas");

    if (!localStorage.getItem("melanciaNome")) {
        outApostas.textContent = "";
        return; //não exexuta os comandos abaixo
    }

    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    let linhas = "";

    for (let i = 0; i < nomes.length; i++) {
        linhas += nomes[i] + " - " + pesos[i] + "gr \n";
    }
    outApostas.textContent = linhas;
}
mostrarApostas();

function verificarVencedor() {
    if (!localStorage.getItem("melanciaNome")) {
        alert("Não há apostas cadastradas");
        return;
    }
    const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));

    if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
        return;
    }
    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");
    // valor inicial para vencedor é o da primeira aposta
    const vencedorNome = nomes[0];
    const vencedorPeso = Number(pesos[0]);
    // percorre as apostas
    for (let i = 1; i < nomes.length; i++) {
        // calcula a diferença de peso do "vencedor" e da aposta atual
        difVencedor = Math.abs(vencedorPeso - pesoCorreto);
        difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);
        // se a diferença da aposta atual (no for) for menor que a do "vencedor"
        if (difAposta < difVencedor) {
            vencedorNome = nomes[i]; // troca o "vencedor"
            vencedorPeso = Number(pesos[i]); // para este elemento
        }
    }
    // monta mensagem com dados do vencedor
    let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr";
    mensagem += "\n----------------------------------------------";
    mensagem += "\nVencedor: " + vencedorNome;
    mensagem += "\nAposta: " + vencedorPeso + "gr";
    alert(mensagem);
}
const btVencedor = document.getElementById("btVencedor");
btVencedor.addEventListener("click", verificarVencedor);

function limparApostas() {
    if (confirm("Confirma exclusão de todas as apostas?")) {
        localStorage.removeItem("melanciaNome");
        localStorage.removeItem("melanciaPeso");

        mostrarApostas();
    }
}
const btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparApostas);

